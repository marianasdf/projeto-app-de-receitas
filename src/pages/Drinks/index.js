import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CategoryFilter from '../../components/CategoryFilter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RecipeCard from '../../components/RecipeCard';
import RecipesContext from '../../context/RecipesContext';
import { fetchByCategory, fetchCategories, fetchRecipes } from '../../services';

function Drinks() {
  const {
    recipes,
    setRecipes,
    setCategories,
    selectedCategory,
  } = useContext(RecipesContext);

  useEffect(() => {
    const getRecipes = async () => {
      const MAX_VALUE = 12;
      const { drinks } = await fetchRecipes('drinks');
      setRecipes(drinks.slice(0, MAX_VALUE));
    };

    const getCategories = async () => {
      const MAX_VALUE = 5;
      const { drinks } = await fetchCategories('drinks');
      setCategories(drinks.slice(0, MAX_VALUE));
    };

    getCategories();

    const getByCategory = async () => {
      const MAX_VALUE = 12;
      const { drinks } = await fetchByCategory('drinks', selectedCategory);
      setRecipes(drinks.slice(0, MAX_VALUE));
    };

    if (selectedCategory === 'All') {
      getRecipes();
    } else {
      getByCategory();
    }
  }, [setRecipes, setCategories, selectedCategory]);

  return (
    <>
      <Header title="Bebidas" buttonSearch />
      <CategoryFilter />
      { recipes.map((recipe, index) => (
        <Link
          key={ index }
          to={ `/bebidas/${recipe.idDrink}` }
        >
          <RecipeCard page="drinks" index={ index } recipe={ recipe } />
        </Link>
      )) }
      <Footer />
    </>
  );
}

export default Drinks;
