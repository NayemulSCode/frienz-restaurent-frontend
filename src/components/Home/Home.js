import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData.json'
import BreakFirst from '../BreakFirst/BreakFirst';
import './Home.css'

const Home = () => {
    const [meals, setMeals] = useState([]);
    useEffect(()=>{
        setMeals(fakeData);
        console.log(fakeData);
    },[])
    return (
        <div className="homeContainer">
            <h1>Home component</h1>
            <section id="mealsSection">
                {
                    meals.map( meal => <BreakFirst key={meal.id} meal = {meal} />)
                }
            </section>
        </div>
    );
};

export default Home;