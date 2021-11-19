import React from 'react';
import MealsFavoriteCard from './mealsFavoriteCard';
import DrinksFavoriteCard from './drinksFavoriteCard';

function FavoriteCard() {
  function getArrayFromLocal() {
    const favoritesRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    return favoritesRecipes;
  }

  function handleClick(type) {
    if (type === 'tudo') {
      const array = getArrayFromLocal();
      return array;
    }
    const completedArray = getArrayFromLocal();
    const filteredArray = completedArray.filter((item) => item.type === type);
    return filteredArray;
  }

  return (
    <div>
      <button type="button" onClick={ handleClick('comida') }>Food</button>
      <button type="button" onClick={ handleClick('bebida') }>Drinks</button>
      <button type="button" onClick={ handleClick('tudo') }>All</button>
      { getArrayFromLocal()
        .map(({ name, type, category, area, image, id, alcoholicOrNot }) => (
          <section key={ id }>
            { type === 'comida' ? <MealsFavoriteCard
              name={ name }
              category={ category }
              image={ image }
              area={ area }
            /> : <DrinksFavoriteCard alcoholicOrNot={ alcoholicOrNot } name={ name } image={ image } />}
          </section>
        )) }
    </div>
  );
}

export default FavoriteCard;
