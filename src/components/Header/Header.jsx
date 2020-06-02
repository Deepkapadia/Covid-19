import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-dark.png';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { showNav: true };
        this.toggleNav = this.toggleNav.bind(this);
        
    }
    
     
    toggleNav() {
        this.setState({ 
            showNav: !this.state.showNav
        })
    }
    
    render() {
        const { showNav } = this.state
        return (
            <header className="header clearheader" id="banner">
            <div className="navbar-bar navbar-wt" id="active-sticky">
                <div className="container">
                    <div className="navbar-innr ml-0">
                        <div className="navbar-base">
                            <a className="navbar-logo-wt" href="./"><img src={Logo} srcset={Logo} alt="logo"/></a>
                            <ul className="navbar-tools d-lg-none">
                                <li><button onClick={this.toggleNav} style={{border:'none', background:'none'}} className="navbar-toggle"><i className="fas fa-bars"></i></button></li>
                            </ul>
                        </div>
                        <div className={(showNav ? '' : 'active') + ' navbar-content navbar-content-wt navbar-toggle-content mr-0 navbar-mobile'} >
                            <a href="/#"  onClick={this.toggleNav} className="navbar-toggle navbar-close"><i className="fas fa-times"></i></a>
                            <ul className="navbar-menu">
                                <li>
                                    <Link to="/" className="menu-link" href="/#">Home</Link>
                                </li>
                                <li>
                                    <a  className="menu-link" href="#about">COVID-19</a>
                                </li>
                                <li>
                                    <Link to="/symptoms"  className="menu-link" href="#symptoms">Symptoms</Link>
                                </li>
                                <li>
                                    <Link to="/prevention"  className="menu-link" href="#prevention">Prevention</Link>
                                </li>
                                <li>
                                    <a className="menu-link" href="footer">Contact Details</a>
                                </li>
                            </ul>
                        </div>
                        <div className="top-symptoms">
                            <Link to="/symptoms" className="btn" href="#">+ Symptoms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        )
    }
}

export default Header;