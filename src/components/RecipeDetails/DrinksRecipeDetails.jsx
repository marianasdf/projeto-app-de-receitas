import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import RecommendedRecipes from '../RecommendedRecipes/RecommendedRecipes';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import './RecipeDetailsStyle.css';

export default function DrinksRecipeDetails({ recipe }) {
  const [favorited, setFavorited] = useState(false);
  const [shared, setShared] = useState(false);
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

  const { id } = useParams('');
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('favoriteRecipes')));
    if (localStorage.getItem('favoriteRecipes')
    && JSON.parse(localStorage.getItem('favoriteRecipes'))
      .find((item) => item.id === id)) {
      setFavorited(true);
    }
  }, [id]);

  function share() {
    window.navigator.clipboard.writeText(`http://localhost:3000/bebidas/${id}`);
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
        type: 'bebida',
        area: '',
        category: recipe.strCategory,
        alcoholicOrNot: recipe.strAlcoholic,
        name: recipe.strDrink,
        image: recipe.strDrinkThumb,
      };
      favorites.push(item);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    }
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
      <div className="text-center">
        <button
          type="button"
          data-testid="share-btn"
          className="btn"
          onClick={ share }
        >
          {shared ? (<p>Link copiado!</p>)
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
      >
        Iniciar Receita
      </button>
    </section>
  );
}

DrinksRecipeDetails.propTypes = {
  recipe: PropTypes.shape([]).isRequired,
};
