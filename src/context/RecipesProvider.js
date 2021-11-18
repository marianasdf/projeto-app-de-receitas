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
