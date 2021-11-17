import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { fetchArea } from '../../services';

function ExploreLocalOrigin() {
  const [area, setArea] = useState();

  useEffect(() => {
    async function fetchapi() {
      const data = await fetchArea();
      setArea(data.meals);
      console.log(data);
    }
    fetchapi();
  }, []);

  return (
    <div>
      <Header title="Explorar Origem" buttonSearch />
      <select
        data-testid="explore-by-area-dropdown"
      >
        {area.map(({ strArea }, index) => (
          <option data-testid={ `${strArea}-option` } key={ index }>{ strArea }</option>
        ))}
      </select>
      <Footer />
    </div>
  );
}

export default ExploreLocalOrigin;
