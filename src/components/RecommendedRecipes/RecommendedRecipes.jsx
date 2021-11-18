import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { fetchRecipes } from '../../services';
import MealsRecommendations from './MealsRecommendations';
import DrinksRecommendations from './DrinksRecomendations';

function RecommendedRecipes({ type }) {
  const [loading, setLoading] = useState(true);
  const id = useParams();
  const [recommendations, setrecommendations] = useState([]);
  useEffect(() => {
    async function getRecommendation() {
      const data = await fetchRecipes(type);
      const number = 6;
      if (type === 'meals') setrecommendations(data.meals.slice(0, number));
      if (type === 'drinks') setrecommendations(data.drinks.slice(0, number));
      setLoading(false);
    }
    getRecommendation();
  }, [type, id]);

  function component() {
    return (
      type === 'meals'
        ? <MealsRecommendations recommendations={ recommendations } />
        : <DrinksRecommendations recommendations={ recommendations } />
    );
  }

  return (
    <div>
      {loading ? <p>Carregando...</p> : component() }
    </div>
  );
}

RecommendedRecipes.propTypes = {
  type: PropTypes.string.isRequired,
};

export default RecommendedRecipes;
