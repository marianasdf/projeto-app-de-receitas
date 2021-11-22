import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareButton from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function DrinksFavoriteCard({ name, image, alcoholicOrNot, index, id }) {
  const [favorited, setFavorited] = useState();
  const [copy, setCopy] = useState(false);

  function copyLink({ target }) {
    const urlPage = `http://localhost:3000/comidas/${target.name}`;
    window.navigator.clipboard.writeText(urlPage);
    setCopy(true);
    console.log(urlPage);
  }

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
      <Link to={ `/bebidas/${id}` }>
        <img
          src={ image }
          alt={ `imagem do prato ${name}` }
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <Link to={ `/bebidas/${id}` }>
        <h3 data-testid={ `${index}-horizontal-name` }>
          {name}
        </h3>
      </Link>
      <p data-testid={ `${index}-horizontal-top-text` }>
        Tipo de bebida:
        {alcoholicOrNot}
      </p>
      <button
        type="button"
        onClick={ (event) => copyLink(event) }
      >
        <img
          src={ shareButton }
          alt="Imagem de compartilhar"
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </button>
      { copy ? <p>Link copiado!</p> : <p>.</p> }
      <button type="button" onClick={ addFavorite }>
        <img
          src={ favorited ? whiteHeartIcon : blackHeartIcon }
          alt="Imagem de coração para favoritar e desfavoritar"
          data-testid={ `${index}-horizontal-favorite-btn` }
        />
      </button>
    </section>
  );
}

DrinksFavoriteCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default DrinksFavoriteCard;
