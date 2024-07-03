// src/components/MealList.js
import React from 'react';
import './MealList.css';

const MealList = ({ meals }) => (
  <div className="meal-list">
    {meals.map(meal => (
      <div key={meal.idMeal} className="meal-item">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <div className="meal-details">
          <h3>{meal.strMeal}</h3>
          <p>$8.45</p>
          <p>Lorem ipsum dolor sit amet quam in lacus risus.</p>
          <button>Shop Now</button>
        </div>
      </div>
    ))}
  </div>
);

export default MealList;
