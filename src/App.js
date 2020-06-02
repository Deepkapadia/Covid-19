import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';
import 'aos/dist/aos.css';
import { fetchData } from './api/';
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';
import About from './components/About/About';
import Symptoms from './components/Symptoms/Symptoms';
import Protection from './components/Protection/Protection';
import Prevention from './components/Prevention/Prevention';
import Steps from './components/StepsForProtection/Steps';
import Footer from './components/Footer/Footer';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Hero from './components/HeroBanner/Hero';


class App extends Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }
  render(){
    const { data, country } = this.state;
    return (
      <Router>
        <div className="page-wraper">
          <Header/>
          
            <div className="main-wrapper">
            <Route path="/" exact>
              <Hero/>
              <Counter data={data}/>
              <CountryPicker handleCountryChange={this.handleCountryChange} />         
              <Chart data={data} country={country} />
              <About/>
            </Route>

            <Route path="/symptoms" component={Symptoms}>
              <Symptoms/>
              <Protection/>
            </Route>

            <Route path="/prevention" component={Prevention}>
              <Prevention/>
              <Steps/>
            </Route>
            
            </div>
          <Footer/>
        </div>
      </Router>
    );
  }

}

export default App;
