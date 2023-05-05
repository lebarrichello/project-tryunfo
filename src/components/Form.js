import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  hasSuperTrunfo = (hasTrunfo, cardTrunfo, onInputChange) => {
    if (hasTrunfo) {
      return (
        <span className="checkSTrunfo">Você já tem um Super Trunfo em seu baralho</span>
      );
    }
    return (
      <label htmlFor="checkFormTryunfo">
        { ' Super Tryunfo' }
        <input
          className="checkTryunfoForm"
          type="checkbox"
          name="cardTrunfo"
          data-testid="trunfo-input"
          id="checkFormTryunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />

      </label>
    );
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <section>
        <form onSubmit={ onSaveButtonClick }>
          <label>
            Nome
            <input
              className="inpuStyle"
              type="text"
              name="cardName"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label>
            Descrição
            <input
              className="inpuStyle"
              type="textarea"
              name="cardDescription"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label>
            Attr01
            <input
              className="inpuStyle"
              type="number"
              name="cardAttr1"
              data-testid="attr1-input"
              min="0"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label>
            Attr02
            <input
              className="inpuStyle"
              type="number"
              name="cardAttr2"
              data-testid="attr2-input"
              min="0"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label>
            Attr03
            <input
              className="inpuStyle"
              type="number"
              name="cardAttr3"
              data-testid="attr3-input"
              min="0"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label>
            Imagem
            <input
              className="inpuStyle"
              type="text"
              name="cardImage"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label>
            Raridade da Carta
            <select
              className="inpuStyle"
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option id="1" value="normal">normal</option>
              <option id="2" value="raro">raro</option>
              <option id="3" value="muito raro">muito raro</option>
            </select>
          </label>
          <div className="hasTrunfo">
            { this.hasSuperTrunfo(hasTrunfo, cardTrunfo, onInputChange) }
          </div>
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
