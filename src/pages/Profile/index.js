import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Profile({ history }) {
  const [localEmail, setLocalEmail] = useState('');

  useEffect(() => setLocalEmail(JSON.parse(localStorage.getItem('user')).email), []);

  return (
    <>
      <Header title="Perfil" />
      <h4 data-testid="profile-email">{localEmail}</h4>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => history.push('/receitas-feitas') }
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/receitas-favoritas') }
      >
        Receitas Favoritas
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ () => {
          localStorage.clear();
          history.push('/');
        } }
      >
        Sair
      </button>
      <Footer />
    </>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Profile;
