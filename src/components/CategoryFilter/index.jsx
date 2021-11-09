import React, { useContext } from 'react';
import RecipesContext from '../../context/RecipesContext';

function CategoryFilter() {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
  } = useContext(RecipesContext);

  function handleClick(categoryName) {
    if (selectedCategory === categoryName) {
      setSelectedCategory('All');
    } if (selectedCategory !== categoryName) {
      setSelectedCategory(categoryName);
    }
  }

  return (
    <>
      <button
        data-testid="All-category-filter"
        type="button"
        onClick={ () => { setSelectedCategory('All'); } }
      >
        All
      </button>
      { categories.map(({ strCategory }, index) => (
        <button
          key={ index }
          data-testid={ `${strCategory}-category-filter` }
          type="button"
          onClick={ () => handleClick(strCategory) }
        >
          { strCategory }
        </button>
      ))}
    </>
  );
}

export default CategoryFilter;
