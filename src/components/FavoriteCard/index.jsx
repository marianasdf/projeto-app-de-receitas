import React, { useState } from 'react';
import DrinksFavoriteCard from './drinksFavoriteCard';
import MealsFavoriteCard from './mealsFavoriteCard';

function FavoriteCard() {
  const [typeOfFilter, setType] = useState('tudo');
  function getArrayFromLocal() {
    const favoritesRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    return favoritesRecipes;
  }

  function handleClick(type) {
    setType(type);
    return type;
  }

  console.log(typeOfFilter);

  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => handleClick('comida') }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => handleClick('bebida') }
      >
        Drinks
      </button>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => handleClick('tudo') }
      >
        All
      </button>
      { typeOfFilter !== 'tudo'
        ? getArrayFromLocal().filter((recipe) => recipe.type === typeOfFilter)
          .map(({ name, type, category, area, image, id, alcoholicOrNot }, index) => (
            <section key={ id } className="teste">
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
          )) : getArrayFromLocal()
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
          ))}
      {/*  { getArrayFromLocal().filter((tipo) => tipo === typeOfFilter)
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
          )) } */}
    </div>
  );
}

export default FavoriteCard;
