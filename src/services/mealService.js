// src/services/mealService.js
export const fetchCategories = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    return response.json();
  };
  
  export const fetchMealsByCategory = async (category) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    return response.json();
  };
  