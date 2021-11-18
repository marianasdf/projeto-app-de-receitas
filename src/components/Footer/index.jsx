import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import foodIcon from '../../images/mealIcon.svg';

export default function Footer() {
  const history = useHistory();

  function handleClick({ target: { name } }) {
    history.push(name);
  }

  function btn(name, src, idTest) {
    return (
      <button onClick={ handleClick } type="button">
        <img
          alt={ name }
          name={ `/${name}` }
          src={ src }
          data-testid={ `${idTest}-bottom-btn` }
          className="d-flex btn btn-link btn-floating m-1"
        />
      </button>
    );
  }

  return (
    <footer
      data-testid="footer"
      className="bg-light p-1 fixed-bottom d-flex justify-content-between footer w-100"
    >
      {btn('bebidas', drinkIcon, 'drinks')}
      {btn('explorar', exploreIcon, 'explore')}
      {btn('comidas', foodIcon, 'food')}
    </footer>
  );
}
