import PropTypes from 'prop-types';
import React from 'react';

export default function RecipeDetails({ recipe }) {
  console.log(recipe);
  return (
    <section>
      <img
        src={ recipe.strMealThumb }
        alt={ recipe.strMeal }
        className="w-75"
      />
      <p>{recipe.strMeal}</p>
    </section>
  );
}

RecipeDetails.propTypes = {
  recipe: PropTypes.shape([]).isRequired,
};
