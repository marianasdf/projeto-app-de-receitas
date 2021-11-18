import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { fetchMealIngredients } from '../../services/index';
import IngredientsCard from '../../components/IngredientsCard';

function ExploreFoodByIngredient() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const MAX_VALUE = 12;
  const URL = 'https://www.themealdb.com/images/ingredients/';
  useEffect(() => {
    const showIngredients = async () => {
      const data = await fetchMealIngredients();
      setIngredientsList(data.meals);
      console.log(data);
    };
    showIngredients();
  }, []);

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      {ingredientsList.map((ingredient, index) => (
        index < MAX_VALUE ? (
          <IngredientsCard
            key={ index }
            index={ index }
            image={ `${URL}${ingredient.strIngredient}-Small.png` }
            ingredients={ ingredient.strIngredient }
            foodOrDrink="comidas"
          />
        ) : null
      ))}
      <Footer />
    </div>
  );
}

/* Consultei o repositório do grupo 3 para fazer a função UseEffect
link: https://github.com/tryber/sd-013-a-project-recipes-app/commit/9f5cc8761c4ff2ba2a077f7b5d74541994aa4c46 */

export default ExploreFoodByIngredient;
