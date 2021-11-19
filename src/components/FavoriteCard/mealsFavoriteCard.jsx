import React from 'react';
import PropTypes from 'prop-types';
import shareButton from '../../images/shareIcon.svg';
import favoriteButton from '../../images/whiteHeartIcon.svg';

function MealsFavoriteCard({ name, category, image, area }) {
  return (
    <section>
      <img src={ image } alt={ `imagem do prato ${name}` } />
      <h3>
        {name}
      </h3>
      <p>
        Categoria:
        {category}
      </p>
      <p>
        Área:
        {area}
      </p>
      <button type="button">
        <img scr={ shareButton } alt="Imagem de compartilhar" />
      </button>
      <button type="button">
        <img
          src={ favoriteButton }
          alt="Imagem de coração para favoritar e desfavoritar"
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
};

export default MealsFavoriteCard;
