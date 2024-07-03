"use client";

import React from 'react';

const ProductList = ({ meals }) => {
    return (
        <div className="product-list">
            {meals.map(meal => (
                <div key={meal.idMeal} className="product-item">
                    <img src={meal.strMealThumb} alt={meal.strMeal} className="product-image" />
                    <div className="product-info">
                        <h3>{meal.strMeal}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac semper odio.</p>
                    </div>
                    <button className="shop-now-button">Shop Now</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
