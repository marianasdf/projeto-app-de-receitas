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

export const fetchSurpriseMeal = async () => {
  const RANDOM_MEAL = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const { meals } = await fetch(RANDOM_MEAL).then((r) => r.json());
  return meals[0].idMeal;
};

export const fetchSurpriseDrink = async () => {
  const RANDOM_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const { drinks } = await fetch(RANDOM_DRINK).then((r) => r.json());
  return drinks[0].idDrink;
};
export const fetchDetails = async (type, id) => {
  const URL_MEALS = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const URL_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

  const response = await fetch(type === 'meals'
    ? `${URL_MEALS}${id}` : `${URL_DRINKS}${id}`);
  const data = response.json();

  return data;
};

export const fetchArea = async () => {
  const requestApi = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const response = requestApi.json();

  return response;
};

export const fetchMealsByArea = async (area) => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
  const response = await fetch(`${URL}${area}`);
  const data = response.json();

  return data;
};

export async function fetchMealIngredients() {
  const URL_MEAL_INGREDIENTS = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const response = await fetch(URL_MEAL_INGREDIENTS);
  const result = await response.json();
  return result;
}

export async function fetchDrinksIngredients() {
  const URL_DRINKS_INGREDIENTS = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  const response = await fetch(URL_DRINKS_INGREDIENTS);
  const result = await response.json();
  return result;
}
