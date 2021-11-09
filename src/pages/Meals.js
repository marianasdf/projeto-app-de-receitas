import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { fetchCategories, fetchRecipes } from '../services';

function Meals() {
  // passar useStates para o provider
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  // criar um state para categoria selecionada

  useEffect(() => {
    const getRecipes = async () => {
      const MAX_VALUE = 12;
      const { meals } = await fetchRecipes('meals');
      setRecipes(meals.slice(0, MAX_VALUE));
    };

    getRecipes();

    const getCategories = async () => {
      const MAX_VALUE = 5;
      const { meals } = await fetchCategories('meals');
      setCategories(meals.slice(0, MAX_VALUE));
    };

    getCategories();
  }, []);

  return (
    <>
      <Header title="Comidas" buttonSearch />
      {/* componetizar para categoryFilter */}
      <div
        className="category-button"
        data-testid="All-category-filter"
      >
        <label
          htmlFor="all"
        >
          <input
            type="checkbox"
            name="category"
            id="all"
            value="All"
            // onClick={ criar handle para tratar o valor de pesquisa }
          />
          <span>All</span>
        </label>
      </div>
      { categories.map(({ strCategory }, index) => (
        <div
          key={ index }
          data-testid={ `${strCategory}-category-filter` }
        >
          <label
            htmlFor={ `${index}-option` }
          >
            <input
              type="checkbox"
              name="category"
              id={ `${index}-option` }
              value={ strCategory }
              // onClick={ criar handle para tratar o valor de pesquisa }
            />
            <span>{ strCategory }</span>
          </label>
        </div>
      ))}
      { recipes.map((recipe, index) => (
        <Link
          key={ index }
          to={ `/comidas/${recipe.idMeal}` }
        >
          {/* COMPONETIZAR ESSE CARD */}
          <div data-testid={ `${index}-recipe-card` }>
            <img
              src={ recipe.strMealThumb }
              alt={ recipe.strMeal }
              data-testid={ `${index}-card-img` }
            />
            <h3 data-testid={ `${index}-card-name` }>
              { recipe.strMeal }
            </h3>
          </div>
        </Link>
      )) }
    </>
  );
}

export default Meals;
