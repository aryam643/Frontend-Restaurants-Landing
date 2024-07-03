// src/components/Banner.js
import React from 'react';
import './Banner.css';

const Banner = () => (
  <div className="banner">
    <div className="banner-content">
      <h1>Buy Fresh And Organic Grocery Food</h1>
      <p>Discount up to 20%</p>
      <p>Lorem ipsum dolor sit amet consectetur. Condimentum sed sed blandit purus nec nibh tortor ipsum. Placerat consequat lorem.</p>
      <button>Shop Now</button>
      <div className="stats">
        <div className="stat">
          <h2>35k+</h2>
          <p>Users</p>
        </div>
        <div className="stat">
          <h2>18k+</h2>
          <p>Products</p>
        </div>
      </div>
    </div>
    <img src="https://via.placeholder.com/500" alt="Banner Image" className="banner-image" />
  </div>
);

export default Banner;
