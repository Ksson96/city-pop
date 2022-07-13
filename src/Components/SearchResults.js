import React, { useState } from 'react'
import './SearchResults.css';

const SearchResults = (props) => {
  const [showPop, setShowPop] = useState(false);
  const numberFormatter = Intl.NumberFormat('en-US');
  const formatted = numberFormatter.format(props.population);

  if (props.type === 'country') {
      return (
          <div className="row"> 
              <div className="col-md-12">
              <hr />
                  <h5># {props.position} {props.cityName}, ({props.countryName}) {showPop && <span>- Population: {formatted}</span>}</h5> 
              </div>
              <div className="col-md-2 offset-md-5">
                  <button className="btn btn-outline-dark my-2" onClick={() => {setShowPop(!showPop)}}>{showPop ? <>Hide Population</> : <> Show Population</>}</button>
              </div>
          </div>
      )
  } else {
      return (
      <div className="row">
          <hr />
          <div className="col-md-12">
              <h5> {props.cityName}, ({props.countryName}) <span>- Population: {formatted}</span></h5>
          </div>
      </div>
      )}
  
}
export default SearchResults;