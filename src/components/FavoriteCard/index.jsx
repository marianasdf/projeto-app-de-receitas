import React from 'react';
import MealsFavoriteCard from './mealsFavoriteCard';
import DrinksFavoriteCard from './drinksFavoriteCard';

function FavoriteCard() {
  function getArrayFromLocal() {
    const favoritesRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    return favoritesRecipes;
  }

  /*   function handleClick(type) {
    if (type === 'tudo') {
      const array = getArrayFromLocal();
      return array;
    }
    const completedArray = getArrayFromLocal();
    const filteredArray = completedArray.filter((item) => item.type === type);
    return filteredArray;
  } */

  return (
    <div>
      <button type="button" data-testid="filter-by-food-btn">Food</button>
      <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      <button type="button" data-testid="filter-by-all-btn">All</button>
      { getArrayFromLocal()
        .map(({ name, type, category, area, image, id, alcoholicOrNot }, index) => (
          <section key={ id }>
            { type === 'comida' ? <MealsFavoriteCard
              name={ name }
              category={ category }
              image={ image }
              area={ area }
              index={ index }
            />
              : (
                <DrinksFavoriteCard
                  alcoholicOrNot={ alcoholicOrNot }
                  name={ name }
                  image={ image }
                  index={ index }
                />)}
          </section>
        )) }
    </div>
  );
}

export default FavoriteCard;
