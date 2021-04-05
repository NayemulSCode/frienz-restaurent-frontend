import React from 'react';
import './NavBar.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
const NavBar = () => {
    return (
        <>
        <nav className="nav">
            <div className="nav__header">
                <Link to="/"><img className="nav__logo" src="https://i.postimg.cc/J7vL1cbY/logo2.png" alt=""/></Link>
            </div>
            <div className="nav__link">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/about">Login</Link>
                    </li>
                    <li>
                        <Link to="/about">SignUp</Link>
                    </li>
                </ul>
                </div>
            </nav>
        </>
    );
};

export default NavBar;