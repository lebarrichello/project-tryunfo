import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { isFilterDisabled, filterName, onInputChange,
      filterRare, filtertrunfo } = this.props;
    return (
      <div className="filterContainer">
        <p className="inputTitle">Pesquisar Carta: </p>
        <input
          type="text"
          id="name"
          className="inputNameCard"
          disabled={ isFilterDisabled }
          data-testid="name-filter"
          placeholder="Nome da carta"
          name="filterName"
          value={ filterName }
          onChange={ onInputChange }
        />
        <select
          name="filterRare"
          className="inputRare"
          disabled={ isFilterDisabled }
          value={ filterRare }
          id="filterRare"
          data-testid="rare-filter"
          onChange={ onInputChange }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="filtertrunfo" className="checkboxTrunfo">
          <p className="inputTrunfo">Super Tryunfo</p>
          <input
            type="checkbox"
            name="filtertrunfo"
            className="filterCheckbox"
            value={ filtertrunfo }
            data-testid="trunfo-filter"
            id="filtertrunfo"
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}
Filter.defaultProps = {
  isFilterDisabled: false,
  filterName: '',
  filterRare: '',
  filtertrunfo: false,
};

Filter.propTypes = {
  isFilterDisabled: PropTypes.bool,
  filterName: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  filterRare: PropTypes.string,
  filtertrunfo: PropTypes.bool,
};

export default Filter;
