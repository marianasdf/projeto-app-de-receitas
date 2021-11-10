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

  async function fetchSearchBar(inputRadio, inputText) {
    if (inputRadio === 'ingredient') {
      const fetchIngredient = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputText}`);
      const resultIngredient = await fetchIngredient.json();
      console.log(resultIngredient);
      return resultIngredient;
    }

    if (inputRadio === 'name') {
      const fetchName = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`);
      const resultName = await fetchName.json();
      return resultName;
    }

    if (inputRadio === 'first-letter' && inputText.length === 1) {
      const fetchFirstLetter = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputText}`);
      const resultFirstLetter = await fetchFirstLetter.json();
      return resultFirstLetter;
    }

    if (inputRadio === 'first-letter' && inputText.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  }

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
    fetchSearchBar,
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
