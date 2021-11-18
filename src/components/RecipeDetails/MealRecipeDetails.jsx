import PropTypes from 'prop-types';
import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RecipesContext from '../../context/RecipesContext';
import RecommendedRecipes from '../RecommendedRecipes/RecommendedRecipes';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import './RecipeDetailsStyle.css';

export default function MealRecipeDetails({ recipe }) {
  const [shared, setShared] = useState(false);
  const [favorited, setFavorited] = useState(false);
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

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('favoriteRecipes')));
    if (localStorage.getItem('favoriteRecipes')
    && JSON.parse(localStorage.getItem('favoriteRecipes'))
      .find((item) => item.id === id)) {
      setFavorited(true);
    }
  }, [id]);

  function share() {
    window.navigator.clipboard.writeText(`http://localhost:3000/comidas/${id}`);
    setShared(true);
    const time = 2000;
    setTimeout(() => setShared(false), time);
  }

  function addFavorite() {
    if (favorited) {
      console.log(localStorage.getItem(JSON.stringify('favoriteRecipes')));
      setFavorited(false);
      localStorage.removeItem('favoriteRecipes');
    } else {
      setFavorited(true);
      const favorites = [];
      const item = {
        id,
        type: 'comida',
        area: recipe.strArea,
        category: recipe.strCategory,
        alcoholicOrNot: '',
        name: recipe.strMeal,
        image: recipe.strMealThumb,
      };
      favorites.push(item);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    }
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
      <div className="text-center">
        <button
          type="button"
          data-testid="share-btn"
          className="btn"
          onClick={ share }
        >
          {shared ? <p>Link copiado!</p>
            : <img src={ shareIcon } alt="compartilhar" />}
        </button>
        <button
          type="button"
          className="btn "
          onClick={ addFavorite }
        >
          <img
            data-testid="favorite-btn"
            src={ favorited ? blackHeartIcon : whiteHeartIcon }
            alt="Botão de favorito"
          />
        </button>
      </div>
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
