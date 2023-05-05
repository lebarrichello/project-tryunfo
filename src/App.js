import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Filter from './components/Filter';
import './components/CSS/App.css';
import './components/CSS/Form.css';
import './components/CSS/Card.css';
import './components/CSS/Filter.css';
import logo from './imagens/logo.png';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCard: [],
    filterRare: 'todas',
    filtertrunfo: false,
    isFilterDisabled: false,
    filterName: '',
  };

  cardSaveButton = () => {
    const { cardName, cardDescription, cardImage,
      cardRare, cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const sumMax = 210;
    const max = 90;

    if (cardName.length * cardDescription.length
      * cardRare.length * cardImage.length === 0
      || Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > sumMax
      || (Number(cardAttr1) > max || Number(cardAttr1) < 0)
      || (Number(cardAttr2) > max || Number(cardAttr2) < 0)
      || (Number(cardAttr3) > max || Number(cardAttr3) < 0)) {
      this.setState(() => ({ isSaveButtonDisabled: true }));
      return;
    }
    this.setState(() => ({ isSaveButtonDisabled: false }));
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.cardSaveButton();
      this.validateFilter();
    });
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3,
      cardRare, cardTrunfo } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((prevState) => ({
      savedCard: prevState.savedCard.concat([newCard]),
    }), () => {
      if (cardTrunfo === true) {
        this.setState({ hasTrunfo: true });
      }
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      });
    });
  };

  removeButton = (index, card) => {
    const { savedCard } = this.state;
    savedCard.splice(index, 1);
    if (card.cardTrunfo === true) {
      this.setState({ hasTrunfo: false });
    }
    this.setState({ savedCard });
  };

  validateFilter = () => {
    const { filtertrunfo } = this.state;
    const filterValidate = filtertrunfo === true;
    this.setState({ isFilterDisabled: filterValidate });
  };

  Filter = () => {
    const { savedCard, filterName, filterRare, filtertrunfo } = this.state;
    if (filtertrunfo) {
      return savedCard.filter(({ cardTrunfo }) => cardTrunfo);
    }

    return (
      savedCard
        .filter(({ cardName }) => cardName.includes(filterName))
        .filter(({ cardRare }) => (filterRare === 'todas'
          ? true : cardRare === filterRare))
    );
  };

  render() {
    const { savedCard } = this.state;
    const filterCards = this.Filter();
    return (

      <>
        <img
          className="logo"
          src={ logo }
          alt="logo"
        />
        <section className="board">
          <div className="add">
            <h2>Adicionar nova carta</h2>
            <Form
              { ...this.state }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>

          <div className="preview">
            <h2 fontFamily="Monoton">Pré-visualização</h2>
            <Card { ...this.state } />

          </div>
        </section>
        <div className="filterArea">
          <Filter { ...this.state } onInputChange={ this.onInputChange } />
        </div>
        <ul>
          { savedCard !== []
            ? filterCards.map((card, index) => (

              <div className="cardsArea" key={ card.cardName }>
                <li>
                  <Card { ...card } />
                </li>
                <button
                  className="btnRemove"
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.removeButton(index, card) }
                >
                  X
                </button>
              </div>

            )) : ''}
        </ul>
      </>
    );
  }
}
export default App;
