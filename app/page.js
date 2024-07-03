"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import CategorySelector from '../components/CategorySelector';
import ProductList from '../components/ProductList';

const Home = () => {
    const [meals, setMeals] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    // Fetch categories on initial render
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => {
                const categoryNames = response.data.categories.map(category => category.strCategory);
                setCategories(categoryNames);
                setSelectedCategory(categoryNames[0]);
            });
    }, []);

    // Fetch meals when the selected category changes
    useEffect(() => {
        if (selectedCategory) {
            axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
                .then(response => {
                    console.log(response.data.meals);  // Check the URLs here
                    setMeals(response.data.meals);
                });
        }
    }, [selectedCategory]);

    return (
        <div className="home">
            <Navbar />
            <div className="banner-section">
                <Banner />
            </div>
            <div className="category-section">
                <CategorySelector 
                    categories={categories} 
                    selectedCategory={selectedCategory} 
                    onSelectCategory={setSelectedCategory} 
                />
                <ProductList meals={meals} />
            </div>
        </div>
    );
};

export default Home;
