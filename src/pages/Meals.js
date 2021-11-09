import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { fetchRecipes } from '../services';

function Meals() {
  // passar useStates para o provider
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const MAX_VALUE = 12;
      const { meals } = await fetchRecipes('meals');
      setRecipes(meals.slice(0, MAX_VALUE));
    };

    getRecipes();
  }, []);

  return (
    <>
      <Header title="Comidas" buttonSearch />
      { recipes.map((recipe, index) => (
        <Link
          key={ index }
          to={ `/comidas/${recipe.idMeal}` }
        >
          <div data-testid={ `${index}-recipe-card` }>
            <img
              src={ recipe.strMealThumb }
              alt={ recipe.strMeal }
              data-testid={ `${index}-card-img` }
            />
            <h3 data-testid={ `${index}-card-name` }>
              {' '}
              { recipe.strMeal }
              {' '}
            </h3>
          </div>
        </Link>
      )) }
    </>
  );
}

export default Meals;
