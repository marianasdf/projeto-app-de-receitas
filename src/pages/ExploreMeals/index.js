import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchRandomRecipe } from '../../services';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function ExploreMeals() {
  const [idMeal, setIdMeal] = useState('');

  useEffect(() => {
    (async () => setIdMeal(await fetchRandomRecipe()))();
  }, []);

  console.log(idMeal);

  return (
    <div>
      <Header title="Explorar Comidas" />
      <div>
        <Link to="/explorar/comidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button
            type="button"
            data-testid="explore-by-area"
          >
            Por Local de Origem
          </button>
        </Link>
        <Link to={ `/comidas/:${idMeal}` }>
          <button
            type="button"
            data-testid="explore-surprise"
          >
            Me Surpreenda!
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreMeals;
