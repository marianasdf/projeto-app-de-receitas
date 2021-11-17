import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function ExploreMeals() {
  return (
    <div>
      <Header title="Explorar Comidas" />
      <Link to="/explorar/comidas/area">
        Explorar por origem
      </Link>
      <Footer />
    </div>
  );
}

export default ExploreMeals;
