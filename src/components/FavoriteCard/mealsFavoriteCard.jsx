import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareButton from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function MealsFavoriteCard({ name, category, image, area, index }) {
  const [favorited, setFavorited] = useState(false);
  function addFavorite() {
    if (favorited) {
      setFavorited(false);
      localStorage.removeItem('favoriteRecipes');
    } else {
      setFavorited(true);
    }
  }

  return (
    <section>
      <img
        src={ image }
        alt={ `imagem do prato ${name}` }
        data-testid={ `${index}-horizontal-image` }
      />
      <h3 data-testid={ `${index}-horizontal-name` }>
        {name}
      </h3>
      <p data-testid={ `${index}-horizontal-top-text` }>
        Categoria:
        {`${area} - ${category}`}
      </p>
      <button type="button">
        <img
          src={ shareButton }
          alt="Imagem de compartilhar"
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </button>
      <button
        type="button"
        onClick={ addFavorite }
        name={ name }
      >
        <img
          src={ favorited ? whiteHeartIcon : blackHeartIcon }
          alt="Imagem de coração para favoritar e desfavoritar"
          data-testid={ `${index}-horizontal-favorite-btn` }
        />
      </button>
    </section>
  );
}

MealsFavoriteCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default MealsFavoriteCard;
