import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  // email states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);

  // main page states
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // details states
  const [mealsInProgress, setMealsInProgress] = useState([]);
  const [drinksInProgress, setDrinksInProgress] = useState([]);

  // fetch de acordo com a seleção do Radio e o digitado no input
  async function fetchSearchBar(inputRadio, inputText, path) {
    if (inputRadio === 'ingredient') {
      const fetchIngredient = await (path === '/comidas' ? fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputText}`) : fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputText}`));
      const resultIngredient = await fetchIngredient.json();
      return resultIngredient;
    }

    if (inputRadio === 'name') {
      const fetchName = await (path === '/comidas' ? fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`) : fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`));
      const resultName = await fetchName.json();
      return resultName;
    }

    if (inputRadio === 'first-letter' && inputText.length === 1) {
      const fetchFirstLetter = await (path === '/comidas' ? fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputText}`) : fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputText}`));
      const resultFirstLetter = await fetchFirstLetter.json();
      return resultFirstLetter;
    }

    if (inputRadio === 'first-letter' && inputText.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  }

  // detail page states
  const [favorites, setFavorites] = useState([]);

  const conxtValue = {
    email,
    setEmail,
    disable,
    setDisable,
    password,
    setPassword,
    recipes,
    setRecipes,
    categories,
    setCategories,
    selectedCategory,
    setSelectedCategory,
    mealsInProgress,
    setMealsInProgress,
    drinksInProgress,
    setDrinksInProgress,
    fetchSearchBar,
    favorites,
    setFavorites,
  };

  return (
    <RecipesContext.Provider value={ conxtValue }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RecipesProvider;
