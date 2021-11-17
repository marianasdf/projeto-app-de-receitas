import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RecipeCard from '../../components/RecipeCard';
import { fetchArea, fetchMealsByArea, fetchRecipes } from '../../services';

function ExploreLocalOrigin() {
  const [area, setArea] = useState([]);
  const [areaMeals, setAreaMeals] = useState([]);
  const [filterArea, setFilterArea] = useState('');

  useEffect(() => {
    async function fetchapi() {
      const data = await fetchArea();
      setArea(data.meals);
    }

    fetchapi();
  }, []);

  useEffect(() => {
    // da pra simplificar criando uma funcao de requisicao geral de api
    // const { meals } = await fetchApiGeral(filter ? api1 : api2${filterArea})

    async function getMealsByArea(filter) {
      if (filter === '') {
        const { meals } = await fetchRecipes('meals');
        const MAX_RANGE = 12;
        setAreaMeals(meals.slice(0, MAX_RANGE));
      } else {
        const { meals } = await fetchMealsByArea(filterArea);
        const MAX_RANGE = 12;
        setAreaMeals(meals.slice(0, MAX_RANGE));
      }
    }

    getMealsByArea(filterArea);
  }, [filterArea]);

  return (
    <div>
      <Header title="Explorar Origem" buttonSearch />
      <select
        data-testid="explore-by-area-dropdown"
        onChange={ ({ target }) => {
          setFilterArea(target.value === 'All' ? '' : target.value);
        } }
      >
        <option data-testid="All-option">
          All
        </option>
        {area.map(({ strArea }) => (
          <option data-testid={ `${strArea}-option` } key={ strArea }>{ strArea }</option>
        ))}
      </select>
      {areaMeals.map((recipe, index) => (
        <Link key={ index } to={ `/comidas/${recipe.idMeal}` }>
          <RecipeCard page="meals" index={ index } recipe={ recipe } />
        </Link>
      ))}
      <Footer />
    </div>
  );
}

export default ExploreLocalOrigin;
