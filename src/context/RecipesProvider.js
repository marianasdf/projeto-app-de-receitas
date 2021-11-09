import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);

  return (
    <RecipesContext.Provider
      value={
        { email,
          setEmail,
          disable,
          setDisable,
          password,
          setPassword }
      }
    >
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.arrayOf.isRequired,
};

export default RecipesProvider;
