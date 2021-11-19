import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchSurpriseMeal } from '../../services';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function ExploreMeals() {
  const [idMeal, setIdMeal] = useState('');
  const history = useHistory();

  useEffect(() => {
    (async () => setIdMeal(await fetchSurpriseMeal()))();
  }, []);

  function handleClick({ target: { value } }) {
    history.push(value);
  }

  return (
    <div>
      <Header title="Explorar Comidas" />
      <div>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          value="/explorar/comidas/ingredientes"
          onClick={ handleClick }
        >
          Por Ingredientes
        </button>
        <button
          type="button"
          data-testid="explore-by-area"
          value="/explorar/comidas/area"
          onClick={ handleClick }
        >
          Por Local de Origem
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          value={ `/comidas/${idMeal}` }
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
