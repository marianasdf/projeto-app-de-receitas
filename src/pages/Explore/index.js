import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { fetchRecipes } from '../../services';

function Explore() {
  // const [loading, setLoading] = useState(true);
  const [origens, setOrigens] = useState([]);
  useEffect(() => {
    async function returnApi() {
      const array = [];
      const mealsOrigens = await fetchRecipes('meals');
      mealsOrigens.meals.map((origem) => (
        array.push(origem.strArea)
      ));
      const filteredArray = array.filter((item, index) => (
        array.indexOf(item) === index
      ));
      setOrigens(filteredArray);
    }
    returnApi();
  }, []);

  console.log(origens);

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
            {origens.map((local, index) => (
              <option data-testid={ `${local}-origem` } key={ index }>{ local }</option>
            ))}
          </select>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
