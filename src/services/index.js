export const fetchRecipes = async (type) => {
  const URL_MEALS = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const URL_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  const response = await fetch(type === 'meals' ? URL_MEALS : URL_DRINKS);
  const data = await response.json();
  return data;
};

export const fetchCategories = async (type) => {
  const MEALS_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const DRINKS_CATEGORY = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  const response = await fetch(type === 'meals' ? MEALS_CATEGORY : DRINKS_CATEGORY);
  const data = await response.json();

  return data;
};

export const fetchByCategory = async (type, category) => {
  const MEALS_BY_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  const DRINKS_BY_CATEGORY = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

  const response = await fetch(type === 'meals'
    ? `${MEALS_BY_CATEGORY}${category}` : `${DRINKS_BY_CATEGORY}${category}`);
  const data = await response.json();

  return data;
};
