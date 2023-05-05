import React from 'react';
import PropTypes from 'prop-types';
import noImage from '../imagens/noimage.jpg';
import tryunfo from '../imagens/tryunfo.png';

class Card extends React.Component {
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
    } = this.props;

    return (
      <div
        className={ `style ${cardRare === 'raro' && 'yellow'}
      ${cardRare === 'muito raro' && 'pink'}` }
      >

        <div className="draw">
          <p className="title" data-testid="name-card">{cardName}</p>
          <img
            className="imageArea"
            data-testid="image-card"
            src={ cardImage || noImage }
            alt={ cardName || 'Imagem inválida' }
            width={ 264 }
            height={ 230 }
          />
          <div className="descArea">
            <p className="desCArd" data-testid="description-card">
              {cardDescription}
            </p>
          </div>
          <div className="attributes">
            <span>attr1:</span>
            <p data-testid="attr1-card">{cardAttr1}</p>
          </div>

          <div className="attributes">
            <span>attr2:</span>
            <p data-testid="attr2-card">{cardAttr2}</p>
          </div>

          <div className="attributes">
            <span>attr3:</span>
            <p data-testid="attr3-card">{cardAttr3}</p>
          </div>

          <p className="rareDiv" data-testid="rare-card">{cardRare}</p>
          {cardTrunfo
        && <p className="trynfocheck" data-testid="trunfo-card">Super Trunfo</p>}

          {cardTrunfo
        && <img
          className="tryunfo"
          src={ tryunfo }
          alt="tryunfo"
          width={ 70 }
          height={ 70 }
        />}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
