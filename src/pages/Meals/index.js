import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CategoryFilter from '../../components/CategoryFilter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RecipeCard from '../../components/RecipeCard';
import RecipesContext from '../../context/RecipesContext';
import { fetchByCategory, fetchCategories, fetchRecipes } from '../../services';

function Meals() {
  let { search } = useLocation();

  const query = new URLSearchParams(search);

  const {
    recipes,
    setRecipes,
    setCategories,
    selectedCategory,
    fetchSearchBar
  } = useContext(RecipesContext);

  useEffect(() => {

    const getRecipes = async () => {
      const ingredient = query.get('ingredient');
      const MAX_VALUE = 12;
      if (ingredient && ingredient.length > 0) {
        const result = await fetchSearchBar('ingredient', ingredient, '/comidas');
        console.log(result)
        if (result.meals.length > 1) {
          setRecipes(result.meals.slice(0, MAX_VALUE));
        }
      } else {
        const { meals } = await fetchRecipes('meals');
        setRecipes(meals.slice(0, MAX_VALUE))
      };
    };

    const getCategories = async () => {
      const MAX_VALUE = 5;
      const { meals } = await fetchCategories('meals');
      setCategories(meals.slice(0, MAX_VALUE));
    };

    getCategories();

    const getByCategory = async () => {
      const MAX_VALUE = 12;
      const { meals } = await fetchByCategory('meals', selectedCategory);
      setRecipes(meals.slice(0, MAX_VALUE));
    };

    if (selectedCategory === 'All') {
      getRecipes();
    } else {
      getByCategory();
    }
  }, [setRecipes, setCategories, selectedCategory]);

  return (
    <>
      <Header title="Comidas" buttonSearch />
      <CategoryFilter />
      {recipes.map((recipe, index) => (
        <Link
          key={index}
          to={`/comidas/${recipe.idMeal}`}
        >
          <RecipeCard page="meals" index={index} recipe={recipe} />
        </Link>
      ))}
      <Footer />
    </>
  );
}

export default Meals;
