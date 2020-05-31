import React, { Component } from 'react';
import Hero from '../HeroBanner/Hero';
import Logo from '../../Logos/logo-dark.png';

class Header extends Component {
    render() {
        return (
            <header className="header clearheader" id="banner">
                <div className="navbar-bar navbar-wt" id="active-sticky">
                    <div className="container">
                        <div className="navbar-innr ml-0">
                            <div className="navbar-base">
                                <a className="navbar-logo-wt" href="./"><img src={Logo} alt="logo"/></a>
                                <ul className="navbar-tools d-lg-none">
                                    <li></li>
                                </ul>
                            </div>
                            <div className="navbar-content navbar-content-wt navbar-toggle-content mr-0">
                                <a href="/#" className="navbar-toggle navbar-open"><i className="fas fa-times"></i></a>
                                <ul className="navbar-menu">
                                    <li>
                                        <a className="menu-link" href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <a className="menu-link" href="#about">COVID-19</a>
                                    </li>
                                    <li>
                                        <a className="menu-link" href="#symptoms">Symptoms</a>
                                    </li>
                                    <li>
                                        <a className="menu-link" href="#prevention">Prevention</a>
                                    </li>
                                    <li>
                                        <a className="menu-link" href="#footer">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="top-symptoms">
                                <a className="btn" href="/#">+ Symptoms</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Hero/>
            </header>
        )
    }
}

export default Header;