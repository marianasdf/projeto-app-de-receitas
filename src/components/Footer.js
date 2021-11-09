import React from 'react';
import { Redirect } from 'react-router';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import foodIcon from '../images/mealIcon.svg';

export default function Footer() {
  function handleClick({ target: { name } }) {
    switch (name) {
    case 'drink':
      return <Redirect to="/bebidas" />;
    case 'explore':
      return <Redirect to="/explorar" />;
    case 'food':
      return <Redirect to="/comidas" />;
    default:
      break;
    }
  }
  return (
    <footer
      data-testid="footer"
      className="bg-light p-1 fixed-bottom d-flex justify-content-between"
    >
      <button
        name="drinks"
        type="button"
        onClick={ handleClick }
        data-testid="drinks-bottom-btn"
        className="d-flex btn btn-link btn-floating m-1"
      >
        <img src={ drinkIcon } alt="drinks" />
      </button>
      <button
        name="explore"
        type="button"
        onClick={ handleClick }
        data-testid="explore-bottom-btn"
        className="d-flex btn btn-link btn-floating m-1"
      >
        <img src={ exploreIcon } alt="drinks" />
      </button>
      <button
        name="food"
        type="button"
        onClick={ handleClick }
        data-testid="food-bottom-btn"
        className="d-flex btn btn-link btn-floating m-1"
      >
        <img src={ foodIcon } alt="drinks" />
      </button>
    </footer>);
}
