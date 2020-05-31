import React from 'react';
import Hero from '../HeroBanner/Hero';
import Logo from '../../Logos/logo-dark.png';

function Header() {
    return (
        <header className="header clearheader" id="banner">
            <div className="navbar-bar navbar-wt" id="active-sticky">
                <div className="container">
                    <div className="navbar-innr ml-0">
                        <div className="navbar-base">
                            <a className="navbar-logo-wt" href="./"><img src={Logo} alt="logo"/></a>
                            <ul className="navbar-tools d-lg-none">
                                <li><a href="#" className="navbar-toggle"><i className="fas fa-bars"></i></a></li>
                            </ul>
                        </div>
                        <div className="navbar-content navbar-content-wt navbar-toggle-content mr-0">
                            <a href="#" className="navbar-toggle navbar-close"><i className="fas fa-times"></i></a>
                            <ul className="navbar-menu">
                                <li>
                                    <a className="menu-link" href="index.html">Home</a>
                                    <ul className="navbar-dropdown dropdown-content">
                                        <li><a href="index-2.html">Home 2</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="menu-link" href="#about">COVID-19</a>
                                </li>
                                <li>
                                    <a className="menu-link" href="#prevention">Prevention</a>
                                </li>
                                <li>
                                    <a className="menu-link" href="#symptoms">Symptoms</a>
                                </li>
                                <li>
                                    <a className="menu-link" href="#faq-section">FAQ</a>
                                    <ul className="navbar-dropdown dropdown-content">
                                        <li><a href="faq.html">FAQ Page</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="menu-link" href="#blog">Blog</a>
                                    <ul className="navbar-dropdown dropdown-content">
                                        <li><a href="blog.html">Blog Standard</a></li>
                                        <li><a href="blog-details.html">Blog Details</a></li>
                                        <li><a href="blog_post_2column.html">Blog Post 2 Columnn</a></li>
                                        <li><a href="blog_post_3column.html">Blog Post 3 Columnn</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="menu-link" href="#footer">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="top-symptoms">
                            <a className="btn" href="#">+ Symptoms</a>
                        </div>
                    </div>
                </div>
            </div>
            <Hero/>
        </header>
    )
}

export default Header;