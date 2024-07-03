"use client";

import React from 'react';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>Buy Fresh And Organic Grocery Food</h1>
                <p>Discount up to 20%</p>
                <button className="banner-button">Shop Now</button>
                <div className="stats">
                    <div>
                        <h2>35k +</h2>
                        <p>Users</p>
                    </div>
                    <div>
                        <h2>18k +</h2>
                        <p>Products</p>
                    </div>
                </div>
            </div>
            <div className="banner-image">
                <img src="/Banner.png" alt="Banner Image" />
            </div>
        </div>
    );
};

export default Banner;
