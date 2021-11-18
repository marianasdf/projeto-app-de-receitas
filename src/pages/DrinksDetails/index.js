import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DrinksRecipeDetails from '../../components/RecipeDetails/DrinksRecipeDetails';
import { fetchDetails } from '../../services';

function DrinksDetails() {
  const [recipe, setRecipe] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams('');
  useEffect(() => {
    async function getDetails() {
      const details = await fetchDetails('drinks', id);
      console.log(details);
      setRecipe(details.drinks[0]);
      setLoading(false);
    }
    getDetails();
  }, [id]);

  return (
    <div className="d-flex justify-content-center">
      {loading ? 'Carregando' : <DrinksRecipeDetails recipe={ recipe } />}
    </div>
  );
}

export default DrinksDetails;
