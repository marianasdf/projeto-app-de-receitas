import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

function Header({ title, buttonSearch }) {
  const [SearchBar, setSearchBar] = useState(false);
  return (
    <header>
      <Link to="/perfil">
        <button
          type="button"
        >
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="Ícone do perfil"
          />
        </button>
      </Link>
      <h1 data-testid="page-title">{ title }</h1>
      { buttonSearch
        && (
          <button
            type="button"
            onClick={ () => setSearchBar(!SearchBar) }
          >
            <img
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="Ícone de pesquisa"
            />
          </button>
        )}
      { SearchBar && (
        <input
          type="text"
          data-testid="search-input"
        />
      )}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  buttonSearch: PropTypes.bool,
};

Header.defaultProps = {
  buttonSearch: false,
};

export default Header;
