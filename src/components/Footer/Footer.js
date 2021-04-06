import React from 'react';
import './Footer.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer__uperSide">
                <div className="footer__logo">
                    <Link to="/"><img className="nav__logo" src="https://i.postimg.cc/J7vL1cbY/logo2.png" alt=""/></Link>
                </div>
                <div className="footer__info">
                    <ul>
                        <li>
                            <Link>About Online Food</Link>
                        </li>
                        <li>
                            <Link>Read Our Blog</Link>
                        </li>
                        <li>
                            <Link>Sign up to Deliver</Link>
                        </li>
                        <li>
                            <Link>Add Your Restaurant</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__info">
                <ul>
                        <li>
                            <Link>Get Help</Link>
                        </li>
                        <li>
                            <Link>Read FAQs</Link>
                        </li>
                        <li>
                            <Link>View All Cities</Link>
                        </li>
                        <li>
                            <Link>Restaurant Near Me</Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="footer__down">
                <div className="copywrite">
                    <p>Copyright&#xA9; frienz restaurant</p>
                </div>
                <div className="policy">
                    <ul>
                        <li>
                            <Link>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link>Terms of Use</Link>
                        </li>
                        <li>
                            <Link>Pricing</Link>
                        </li>
                            
                    </ul>
                </div>
            </section>   
        </footer>
    );
};

export default Footer;