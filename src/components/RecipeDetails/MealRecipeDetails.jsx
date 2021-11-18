import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RecipesContext from '../../context/RecipesContext';
import RecommendedRecipes from '../RecommendedRecipes/RecommendedRecipes';
import './RecipeDetailsStyle.css';

export default function MealRecipeDetails({ recipe }) {
  const { mealsInProgress, setMealsInProgress } = useContext(RecipesContext);

  const history = useHistory();
  const { id } = useParams();

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

  const inProgress = mealsInProgress.some((meal) => meal === id);

  function handleClick() {
    if (!inProgress) setMealsInProgress([...mealsInProgress, id]);
    history.push(`/comidas/${id}/in-progress`);
  }

  const { strYoutube, strInstructions, strCategory } = recipe;
  return (
    <section className="DetailsPage">
      <div className="ImgAndName">
        <img
          src={ recipe.strMealThumb }
          alt={ recipe.strMeal }
          className="img"
          data-testid="recipe-photo"
        />
        <div className="recipeNameContainer">
          <p
            data-testid="recipe-title"
            className="recipeTitle"
          >
            {recipe.strMeal}
          </p>
        </div>
      </div>
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
        {strCategory}

      </p>
      <section className="ingridients">
        <ul>
          <h6>Ingredientes</h6>
          {getIngredients().map((ing, i) => (
            <li key={ i } data-testid={ `${i}-ingredient-name-and-measure` }>{ing}</li>
          ))}
        </ul>
        <ul>
          <h6>Quantidade</h6>
          {getMeasurements().map((ing, i) => (
            <li key={ i } data-testid={ `${i}-ingredient-name-and-measure` }>{ing}</li>
          ))}
        </ul>
      </section>
      <p data-testid="instructions">
        {strInstructions}
      </p>
      <iframe
        width="240"
        data-testid="video"
        src={ strYoutube }
        title="youtube-video"
      />
      <RecommendedRecipes type="drinks" />
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="recipe-btn"
        onClick={ handleClick }
      >
        { inProgress === true ? 'Continuar Receita' : 'Iniciar Receita' }
      </button>
    </section>
  );
}

MealRecipeDetails.propTypes = {
  recipe: PropTypes.shape([]).isRequired,
};
