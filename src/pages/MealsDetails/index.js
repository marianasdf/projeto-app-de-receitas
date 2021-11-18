import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchDetails } from '../../services';
import MealRecipeDetails from '../../components/RecipeDetails/MealRecipeDetails';

function MealsDetails() {
  const [recipe, setRecipe] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams('');
  useEffect(() => {
    async function getDetails() {
      const details = await fetchDetails('meals', id);
      setRecipe(details.meals[0]);
      setLoading(false);
    }
    getDetails();
  }, [id]);

  return (
    <div className="d-flex justify-content-center">
      {loading ? 'Carregando' : <MealRecipeDetails recipe={ recipe } />}
    </div>
  );
}

export default MealsDetails;
