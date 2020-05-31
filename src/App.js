import React, { Component } from 'react';
import './App.css';
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
      <div className="page-wraper">
        <Header/>
        <div className="main-wrapper">
          <Counter data={data}/>
          <CountryPicker handleCountryChange={this.handleCountryChange} />         
          <Chart data={data} country={country} />
          <About/>
          <Symptoms/>
          <Protection/>
          <Prevention/>
          <Steps/>
        </div>
        <Footer/>
      </div>
    );
  }

}

export default App;
