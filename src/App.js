import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';
import 'aos/dist/aos.css';
import { fetchData, worldTotalData } from './api/';
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';
import About from './container/About/About';
import Symptoms from './container/Symptoms/Symptoms';
import Protection from './container/Protection/Protection';
import Prevention from './container/Prevention/Prevention';
import Steps from './container/StepsForProtection/Steps';
import Footer from './components/Footer/Footer';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Hero from './container/HeroBanner/Hero';


class App extends Component {

  state = {
    data: {},
    WorldTotalData: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();
    const WorldTotalData = await worldTotalData()   
    
    this.setState({ data, WorldTotalData });    
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }
  render(){
    const { data, country ,WorldTotalData } = this.state;
    return (
      <Router>
        <div className="page-wraper">
          <Header/>
  
          <div className="main-wrapper">

            <Route path="/" exact> 
              <Hero WorldTotalData={WorldTotalData}/>
              <Counter data={data}/>
              <CountryPicker handleCountryChange={this.handleCountryChange} />         
              <Chart data={data} country={country} />
              <About/>
            </Route>

            <Route path="/symptoms">
              <Symptoms/>
              <Protection/>
            </Route>

            <Route path="/prevention">
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
