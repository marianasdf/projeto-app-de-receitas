import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchSurpriseDrink } from '../../services';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function ExploreMeals() {
  const [idDrink, setIdDrink] = useState('');
  const history = useHistory();

  useEffect(() => {
    (async () => setIdDrink(await fetchSurpriseDrink()))();
  }, []);

  function handleClick({ target: { value } }) {
    history.push(value);
  }

  return (
    <div>
      <Header title="Explorar Bebidas" />
      <div>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          value="/explorar/bebidas/ingredientes"
          onClick={ handleClick }
        >
          Por Ingredientes
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          value={ `/bebidas/${idDrink}` }
          onClick={ handleClick }
        >
          Me Surpreenda!
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreMeals;
