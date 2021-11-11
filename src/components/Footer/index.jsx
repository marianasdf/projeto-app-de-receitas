import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import foodIcon from '../../images/mealIcon.svg';

function Footer() {
  return (
    <footer
      data-testid="footer"
      className="bg-light p-1 fixed-bottom d-flex justify-content-between footer"
    >
      <Link
        to="/bebidas"
        className="d-flex btn btn-link btn-floating m-1"
      >
        <img src={ drinkIcon } alt="drinks" data-testid="drinks-bottom-btn" />
      </Link>
      <Link
        to="/explorar"
        className="d-flex btn btn-link btn-floating m-1"
      >
        <img src={ exploreIcon } alt="drinks" data-testid="explore-bottom-btn" />
      </Link>
      <Link
        to="/comidas"
        className="d-flex btn btn-link btn-floating m-1"
      >
        <img src={ foodIcon } alt="drinks" data-testid="food-bottom-btn" />
      </Link>
    </footer>
  );
}

export default Footer;
