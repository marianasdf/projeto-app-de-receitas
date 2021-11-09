import React from 'react';
import PropTypes from 'prop-types';

function RecipeCard({ index, recipe, page }) {
  if (page === 'meals') {
    return (
      <div data-testid={ `${index}-recipe-card` }>
        <img
          src={ recipe.strMealThumb }
          alt={ recipe.strMeal }
          data-testid={ `${index}-card-img` }
        />
        <h5 data-testid={ `${index}-card-name` }>
          { recipe.strMeal }
        </h5>
      </div>
    );
  }
  if (page === 'drinks') {
    return (
      <div data-testid={ `${index}-recipe-card` }>
        <img
          src={ recipe.strDrinkThumb }
          alt={ recipe.strDrink }
          data-testid={ `${index}-card-img` }
        />
        <h5 data-testid={ `${index}-card-name` }>
          { recipe.strDrink }
        </h5>
      </div>
    );
  }
}

RecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string),
  index: PropTypes.number,
}.isRequired;

export default RecipeCard;
