import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../../context/RecipesContext';

function SearchBarHeader() {
  const [searchInput, setSearchInput] = useState('');
  const [searchRadio, setSearchRadio] = useState('');
  const { fetchSearchBar, setRecipes } = useContext(RecipesContext);
  const history = useHistory();
  const pathUrl = history.location.pathname;

  const handleChange = (value) => {
    setSearchRadio(value);
  };

  // teste
  const handleClick = async () => {
    const result = await fetchSearchBar(searchRadio, searchInput, pathUrl);
    if (result.meals === null || result.drinks === null) {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    } else {
      if (pathUrl === '/comidas' && result.meals.length === 1) {
        history.push(`/comidas/${result.meals[0].idMeal}`);
      }

      if (pathUrl === '/bebidas' && result.drinks.length === 1) {
        history.push(`/bebidas/${result.drinks[0].idDrink}`);
      }

      if (pathUrl === '/comidas' && result.meals.length > 1) {
        const MAX_VALUE = 12;
        setRecipes(result.meals.slice(0, MAX_VALUE));
      }

      if (pathUrl === '/bebidas' && result.drinks.length > 1) {
        const MAX_VALUE = 12;
        setRecipes(result.drinks.slice(0, MAX_VALUE));
      }
    }
  };

  return (
    <form>
      <input
        type="text"
        data-testid="search-input"
        name={ searchInput }
        onChange={ (event) => setSearchInput(event.target.value) }
      />
      <label htmlFor="ingredient">
        <input
          id="ingredient"
          type="radio"
          name={ searchRadio }
          data-testid="ingredient-search-radio"
          value="ingredient"
          onChange={ ({ target: { value } }) => handleChange(value) }
        />
        Ingrediente
      </label>
      <label htmlFor="name">
        <input
          id="name"
          type="radio"
          name={ searchRadio }
          data-testid="name-search-radio"
          value="name"
          onChange={ ({ target: { value } }) => handleChange(value) }
        />
        Nome
      </label>
      <label htmlFor="first-letter">
        <input
          id="first-letter"
          type="radio"
          name={ searchRadio }
          data-testid="first-letter-search-radio"
          value="first-letter"
          onChange={ ({ target: { value } }) => handleChange(value) }
        />
        Primeira Letra
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Buscar
      </button>
    </form>
  );
}
export default SearchBarHeader;
