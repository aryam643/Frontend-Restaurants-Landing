// src/App.js
import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import CategoryList from './components/CategoryList';
import MealList from './components/MealList';
import { fetchCategories, fetchMealsByCategory } from './services/mealService';
import './App.css';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      setCategories(data.categories);
    };

    loadCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const loadMeals = async () => {
        const data = await fetchMealsByCategory(selectedCategory);
        setMeals(data.meals);
      };

      loadMeals();
    }
  }, [selectedCategory]);

  return (
    <div className="app">
      <Banner />
      <CategoryList categories={categories} onSelectCategory={setSelectedCategory} />
      <MealList meals={meals} />
    </div>
  );
};

export default App;
