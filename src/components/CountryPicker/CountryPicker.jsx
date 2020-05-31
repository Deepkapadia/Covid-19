import React, { useState, useEffect } from 'react';
// import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (

    <div class="container">
    <div class="row">
        <div class="col-lg-12">
            <div class="row space-y-40 justify-content-center">
            
                <div class="sec-link text-center mt-5">
                <form className={styles.formControl}>
      <select defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </select>
    </form>
                </div>
                
                  </div></div></div></div>
    
  );
};

export default Countries;