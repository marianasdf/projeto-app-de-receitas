import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareButton from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function MealsFavoriteCard({ name, category, image, area, index, id }) {
  const [favorited, setFavorited] = useState(true);
  const [copy, setCopy] = useState(false);

  function copyLink({ target }) {
    // forma de pegar a URL retirada de https://pt.stackoverflow.com/questions/76394/como-fa%C3%A7o-para-pegar-url-atual-em-javascript
    const urlPage = `http://localhost:3000/comidas/${target.name}`;
    navigator.clipboard.writeText(urlPage);
    setCopy(true);
    console.log(urlPage);
  }

  function addFavorite({ target }) {
    if (favorited) {
      console.log(target.name);
      const arrayOfRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      setFavorited(false);
      const newArray = arrayOfRecipes.filter((recipe) => recipe.name !== target.name);
      localStorage.removeItem('favoriteRecipes');
      localStorage.setItem('favoriteRecipes', JSON.stringify(newArray));
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
      <button
        type="button"
        onClick={ (event) => copyLink(event) }
      >
        <img
          name={ id }
          src={ shareButton }
          alt="Imagem de compartilhar"
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </button>
      { copy ? <p>Link copiado!</p> : <p>.</p> }
      <button
        type="button"
        onClick={ (event) => addFavorite(event) }
      >
        <img
          src={ favorited ? blackHeartIcon : whiteHeartIcon }
          alt="Imagem de coração para favoritar e desfavoritar"
          data-testid={ `${index}-horizontal-favorite-btn` }
          name={ name }
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
  id: PropTypes.number.isRequired,
};

export default MealsFavoriteCard;
