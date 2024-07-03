"use client";

import React from 'react';

const CategorySelector = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="category-selector">
            <p className="small-heading">Shop by Category</p>
            <h2>Top Category Of Organic Food</h2>
            <div className="category-buttons">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`category-button ${selectedCategory === category ? 'selected' : ''}`}
                        onClick={() => onSelectCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategorySelector;
