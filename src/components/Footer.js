import React from 'react';
// import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import foodIcon from '../images/mealIcon.svg';

export default function Footer() {
  // function handleClick({ target: { name } }) {
  //   switch (name) {
  //   case 'drink':
  //     return <Redirect to="/bebidas" />;
  //   case 'explore':
  //     return <Redirect to="/explorar" />;
  //   case 'food':
  //     return <Redirect to="/comidas" />;
  //   default:
  //     break;
  //   }
  // }
  return (
    <footer
      data-testid="footer"
      className="bg-light p-1 fixed-bottom d-flex justify-content-between"
    >
      <Link to="/bebidas">
        <button
          name="drinks"
          type="button"
          // onClick={ handleClick }
          data-testid="drinks-bottom-btn"
          className="d-flex btn btn-link btn-floating m-1"
        >
          <img src={ drinkIcon } alt="drinks" />
        </button>
      </Link>
      <Link to="/explorar">
        <button
          name="explore"
          type="button"
          // onClick={ handleClick }
          data-testid="explore-bottom-btn"
          className="d-flex btn btn-link btn-floating m-1"
        >
          <img src={ exploreIcon } alt="drinks" />
        </button>
      </Link>
      <Link to="/comidas">
        <button
          name="food"
          type="button"
          // onClick={ handleClick }
          data-testid="food-bottom-btn"
          className="d-flex btn btn-link btn-floating m-1"
        >
          <img src={ foodIcon } alt="drinks" />
        </button>
      </Link>
    </footer>
  );
}
