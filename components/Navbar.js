"use client";

import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span>Go FOOD</span>
            </div>
            <div className="navbar-center">
                <a href="#">Home</a>
                <a href="#">Groceries</a>
                <a href="#">Pages</a>
            </div>
            <div className="navbar-right">
                <a href="#">Connect with us</a>
                <span className="icon">🔍</span>
                <span className="icon">👤</span>
                <span className="icon">❤</span>
                <span className="icon">🛒</span>
            </div>
        </nav>
    );
};

export default Navbar;
