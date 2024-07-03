// src/components/CategoryList.js
import React from 'react';
import './CategoryList.css';

const CategoryList = ({ categories, onSelectCategory }) => (
  <div className="category-list">
    <h2>Shop by Category</h2>
    <h3>Top Category Of Organic Food</h3>
    <div className="buttons">
      {categories.map(category => (
        <button key={category.idCategory} onClick={() => onSelectCategory(category.strCategory)}>
          {category.strCategory}
        </button>
      ))}
    </div>
  </div>
);

export default CategoryList;
