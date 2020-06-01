import React, { useState, useEffect } from 'react';
// import { NativeSelect, FormControl } from '@material-ui/core';
import Aos from 'aos';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    
    Aos.init({duration:1500});

    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (

    <div className="container">
    <div className="row">
        <div className="col-lg-12">
          <div className="row space-y-40 justify-content-center">
            <div className="sec-link text-center mt-5 width100">
              <form data-aos="fade-up" data-aos-duration="500" className={styles.formControl}>
                <select defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                  <option value="">Global</option>
                  {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Countries;