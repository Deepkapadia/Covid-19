import React from 'react';
import Logo from '../../images/logo-dark.png'

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
            <div className="banner banner-wt">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-9">
                            <div className="banner-text banner-text-wt banner-border text-center">
                                <span className="banner-temp banner-temp-wt ">500,000 Cases Worldwide & Continued</span>
                                <h1 className="">Prevention from Corona Virus <span className="text-col-a">(COVID-19)</span> Stay Home, Stay Safe</h1>
                                <div className="banner-btn">
                                    <a href="#" className="btn"><i className="las la-shield-alt"></i> Prevention</a>
                                    <a href="#" className="btn btn-alt"><i className="las la-sync"></i> COVID-19</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;