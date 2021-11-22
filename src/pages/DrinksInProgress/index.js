import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function DrinksInProgress() {
  const [drink, setDrink] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [shared, setShared] = useState(false);
  const [favorited, setFavorited] = useState(false);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    async function getRecipe() {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setDrink(data.drinks[0]);
    }

    getRecipe();
  }, [id]);

  useEffect(() => {
    const getIngredients = (recipe) => {
      const MAX_VALUE = 20;
      const listIngredients = [];

      for (let index = 0; index < MAX_VALUE; index += 1) {
        const ingredient = recipe[`strIngredient${index}`];
        const measure = recipe[`strMeasure${index}`] || '';

        if (ingredient) {
          listIngredients.push({ ingredient, measure });
        }
      }

      return listIngredients;
    };

    setIngredients(getIngredients(drink));
  }, [drink]);

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
        type: 'bebida',
        area: '',
        category: drink.strCategory,
        alcoholicOrNot: drink.strAlcoholic,
        name: drink.strDrink,
        image: drink.strDrinkThumb,
      };
      favorites.push(item);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    }
  }

  return (
    <>
      <img
        data-testid="recipe-photo"
        src={ drink.strMealThumb }
        alt={ drink.strMeal }
      />
      <h1 data-testid="recipe-title">{drink.strMeal}</h1>
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
      <p data-testid="recipe-category">{drink.strCategory}</p>
      {ingredients.map(({ ingredient }, index) => (
        <label
          key={ ingredient }
          data-testid={ `${index}-ingredient-step` }
          htmlFor={ `${index}-ingredient` }
        >
          <input
            type="checkbox"
            id={ `${index}-ingredient` }
            name="progress"
            // checked={ qnd puxar/eviar p/ o localstorage passar/recuperar se ja esta 'checked' }
          />
          {ingredient}
        </label>
      ))}
      <p data-testid="instructions">{drink.strInstructions}</p>
      <button
        onClick={ () => history.push('/receitas-feitas') }
        type="button"
        data-testid="finish-recipe-btn"
        // disabled={ ativar somente qnd td estiver checked }
      >
        Finalizar Receita
      </button>
    </>
  );
}

export default DrinksInProgress;
