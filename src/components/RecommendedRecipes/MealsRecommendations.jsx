import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './recommendationStyle.css';

export default function MealsRecommendations({ recommendations }) {
  return (
    <div className="d-flex">
      <div className="d-flex flex-row recipeCardContainer">
        {recommendations.map((item, index) => (
          <div
            key={ index }
            className="recipeCard"
            data-testid={ `${index}-recomendation-card` }
          >
            <Link
              to={ `/comidas/${item.idMeal}` }
            >
              <div>
                <img
                  src={ item.strMealThumb }
                  alt={ item.strMeal }
                  className="recipeIMG"
                />
                <div className="recipeNameContainer">
                  <h3
                    className="recipeName"
                    data-testid={ `${index}-recomendation-title` }
                  >
                    {item.strMeal}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

MealsRecommendations.propTypes = {
  recommendations: PropTypes.shape([]).isRequired,
};
