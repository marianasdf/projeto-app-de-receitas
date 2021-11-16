import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './recommendationStyle.css';

export default function DrinksRecommendations({ recommendations }) {
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
              to={ `/comidas/${item.idDrink}` }
            >
              <div>
                <img
                  src={ item.strDrinkThumb }
                  alt={ item.strDrink }
                  className="recipeIMG"
                />
                <div className="recipeNameContainer">
                  <p className="recipeName" data-testid={ `${index}-recomendation-title` }>
                    {item.strDrink}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

DrinksRecommendations.propTypes = {
  recommendations: PropTypes.shape([]).isRequired,
};
