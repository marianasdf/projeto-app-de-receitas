import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RecipesContext from '../../context/RecipesContext';
import RecommendedRecipes from '../RecommendedRecipes/RecommendedRecipes';
import './RecipeDetailsStyle.css';

export default function DrinksRecipeDetails({ recipe }) {
  const { drinksInProgress, setDrinksInProgress } = useContext(RecipesContext);

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

  const inProgress = drinksInProgress.some((drink) => drink === id);

  function handleClick() {
    if (!inProgress) setDrinksInProgress([...drinksInProgress, id]);
    history.push(`/bebidas/${id}/in-progress`);
  }

  const { strInstructions, strAlcoholic } = recipe;
  return (
    <section className="DetailsPage">
      <div className="ImgAndName">
        <img
          src={ recipe.strDrinkThumb }
          alt={ recipe.strDrink }
          className="img"
          data-testid="recipe-photo"
        />
        <div className="recipeNameContainer">
          <p
            data-testid="recipe-title"
            className="recipeTitle"
          >
            {recipe.strDrink}
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
        {strAlcoholic}
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
      <RecommendedRecipes type="meals" />
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

DrinksRecipeDetails.propTypes = {
  recipe: PropTypes.shape([]).isRequired,
};
