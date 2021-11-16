import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { fetchRecipes } from '../../services';

function Explore() {
  return (
    <div>
      <Header title="Explorar" />
      <div className="d-flex p-2 bd-highlight">
        <Link to="/explorar/comidas">
          <button
            type="button"
            data-testid="explore-food"
            className="btn btn-warning shadow rounded"
          >
            Explorar Comidas
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button
            type="button"
            data-testid="explore-drinks"
            className="btn btn-danger shadow rounded"
          >
            Explorar Bebidas
          </button>
        </Link>
        <Link to="/explorar/origem">
          <select
            data-testid="explore-by-area-dropdown"
          >
            {/* {fetchRecipes().meals.map(() => {})} */}
          </select>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
