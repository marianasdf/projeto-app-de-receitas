import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CategoryFilter from '../../components/CategoryFilter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RecipeCard from '../../components/RecipeCard';
import RecipesContext from '../../context/RecipesContext';
import { fetchByCategory, fetchCategories, fetchRecipes } from '../../services';

function Meals() {
  const {
    recipes,
    setRecipes,
    setCategories,
    selectedCategory,
  } = useContext(RecipesContext);

  useEffect(() => {
    const getRecipes = async () => {
      const MAX_VALUE = 12;
      const { meals } = await fetchRecipes('meals');
      setRecipes(meals.slice(0, MAX_VALUE));
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
      { recipes.map((recipe, index) => (
        <Link
          key={ index }
          to={ `/comidas/${recipe.idMeal}` }
        >
          <RecipeCard page="meals" index={ index } recipe={ recipe } />
        </Link>
      )) }
      <Footer />
    </>
  );
}

export default Meals;
