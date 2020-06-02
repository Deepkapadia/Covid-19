import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-dark.png';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { showNav: true };
        this.toggleNav = this.toggleNav.bind(this);
    }
    closeMenu() {
        this.setState({ showNav: false })
      }
    
    toggleNav() {
        this.setState({ 
            showNav: !this.state.showNav
        })
    }
    
    render() {
        const { showNav } = this.state
        return (
            <header class="header clearheader" id="banner">
                <div class="navbar-bar navbar-wt" id="active-sticky">
                    <div class="container">
                        <div class="navbar-innr ml-0">
                            <div class="navbar-base">
                                <a class="navbar-logo-wt" href="./"><img src={Logo} srcset={Logo} alt="logo"/></a>
                                <ul class="navbar-tools d-lg-none">
                                    <li><a href="/#" onClick={this.toggleNav} class="navbar-toggle "><i class="fas fa-bars"></i></a></li>
                                </ul>
                            </div>
                            <div className={(showNav ? 'inActive' : 'navbar-mobile active') + 'navbar-content navbar-content-wt navbar-toggle-content mr-0 '} >
                                <a href="/#"  onClick={this.toggleNav} class="navbar-toggle navbar-close"><i class="fas fa-times"></i></a>
                                <ul class="navbar-menu">
                                    <li class="active">
                                        <Link to="/" onClick={this.toggleNav} class="menu-link" href="/#">Home</Link>
                                    </li>
                                    <li>
                                        <a onClick={this.toggleNav} className="menu-link" href="#about">COVID-19</a>
                                    </li>
                                    <li>
                                        <Link to="/symptoms" onClick={this.toggleNav} className="menu-link" >Symptoms</Link>
                                    </li>
                                    <li>
                                        <Link to="/prevention" onClick={this.toggleNav} className="menu-link" >Prevention</Link>
                                    </li>
                                    <li>
                                        <a onClick={this.toggleNav} className="menu-link" href="#footer">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="top-symptoms">
                                <Link to="/symptoms" class="btn" href="#">+ Symptoms</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;