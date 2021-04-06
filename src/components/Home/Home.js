import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData.json'
import BreakFirst from '../BreakFirst/BreakFirst';
import Category from '../Category/Category';
import './Home.css'

const allCategories = ['all', ...new Set(fakeData.map(item => item.category))]
console.log(allCategories, new Set);
const Home = () => {
    const [meals, setMeals] = useState(fakeData);
    // category
    const [categories, setCategories] = useState(allCategories);
    const filterItem = (categories) =>{
        if(categories === 'all'){
            setMeals(fakeData)
            return 
        }
        const newItems = fakeData.filter((item) => item.category === categories)
        setMeals(newItems)
    }
    return (
        <div className="homeContainer">
            <Category category= {categories} filterItems={filterItem} />
            <section id="mealsSection">
                {
                    meals.map( meal => <BreakFirst key={meal.id} meal = {meal} />)
                }
            </section>
        </div>
    );
};

export default Home;