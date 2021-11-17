import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

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
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
