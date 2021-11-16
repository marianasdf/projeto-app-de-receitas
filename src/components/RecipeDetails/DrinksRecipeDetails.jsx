import PropTypes from 'prop-types';
import React from 'react';
import RecommendedRecipes from '../RecommendedRecipes/RecommendedRecipes';

export default function DrinksRecipeDetails({ recipe }) {
  function getIngredients() {
    const ingredients = Object.entries(recipe)
      .filter((par) => (par[0]
        .includes('strIngredient') && par[1] !== '' && par[1] !== null))
      .map((item) => item[1]);
    return ingredients;
  }
  function getMeasurements() {
    const measuments = Object.entries(recipe)
      .filter((par) => (par[0]
        .includes('strMeasure') && par[1] !== '' && par[1] !== null))
      .map((item) => item[1]);
    return measuments;
  }

  const { strInstructions, strAlcoholic } = recipe;
  return (
    <section>
      <img
        src={ recipe.strDrinkThumb }
        alt={ recipe.strDrink }
        className="w-25"
        data-testid="recipe-photo"
      />
      <p
        data-testid="recipe-title"
      >
        {recipe.strDrink}

      </p>
      <button
        type="button"
        data-testid="share-btn"
      >
        Compartilhar
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        Favorito
      </button>
      <p
        data-testid="recipe-category"
      >
        {strAlcoholic}
      </p>
      <ul>
        {getIngredients().map((ing, i) => (
          <li key={ i } data-testid={ `${i}-ingredient-name-and-measure` }>{ing}</li>
        ))}
      </ul>
      <ul>
        {getMeasurements().map((ing, i) => (
          <li key={ i } data-testid={ `${i}-ingredient-name-and-measure` }>{ing}</li>
        ))}
      </ul>
      <p data-testid="instructions">
        {strInstructions}
      </p>
      <RecommendedRecipes type="drinks" />
      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar Receita

      </button>
    </section>
  );
}

DrinksRecipeDetails.propTypes = {
  recipe: PropTypes.shape([]).isRequired,
};
