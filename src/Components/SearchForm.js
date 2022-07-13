import React from 'react'
import { useState } from 'react';
import Card from './UI/Card';
import './SearchForm.css';
const SearchForm = (props) => {

  const [cityInput, setCityInput] = useState('');
  const [countryInput, setCountryInput] = useState('');

  const cityInputHandler = (event) => {
    setCityInput(event.target.value);
  }

  const countryInputHandler = (event) => {
    setCountryInput(event.target.value);
  }

  const handleCitySearch = (event) => {
    event.preventDefault();
    if (!cityInput){
      alert('Please enter a valid name (non-empty)')
      return
    }
    props.onCitySearch(cityInput);
    setCityInput('');
  };

  const handleCountrySearch = (event) => {
    event.preventDefault();
    if (!countryInput){
      alert('Please enter a valid name (non-empty)')
      return
    }
    props.onCountrySearch(countryInput);
    setCountryInput('');
  };

  return (
    <Card>
      <h2>CityPop tracker</h2>
      <div className="row mt-3">
        <h4>Search by:</h4>
      <form className="col-md-5 offset-md-1" onSubmit={handleCitySearch}>   
              <label className="form-control-label fw-bold fs-5" htmlFor="city">City:</label>
              <input className="form-control" type="text" id="city" value={cityInput} onChange={cityInputHandler} label="city"/>
              <button type="submit" className="btn btn-dark mt-1">Search</button>
      </form>
      <form className="col-md-5 mt-3 mt-md-0" onSubmit={handleCountrySearch}>
          <label className="form-control-label fw-bold fs-5" htmlFor="country">Country:</label>
          <input className="form-control" type="text" id="country" value={countryInput} onChange={countryInputHandler} label="country"/>
          <button type="submit" className="btn btn-dark mt-1">Search</button>
      </form>
      </div>
    </Card>
  )
}
export default SearchForm;
