import './App.css';
import SearchForm from './Components/SearchForm';
import SearchResults from './Components/SearchResults';
import { useEffect, useState } from 'react'
import Card from './Components/UI/Card';

function App() {

  const USERNAME = 'weknowit';
  const [errorMessage, setErrorMessage] = useState('')
  const [searchResults, setSearchResults] = useState();
  const [resourceType, setResourceType] = useState();
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    if(!resourceType) {
      return
    };
    setIsLoading(true);
    const url = (`http://api.geonames.org/searchJSON?${resourceType.query}=${resourceType.name}&featureClass=P&featureCode=PPL&featureCode=PPLA&featureCode=PPLA2&featureCode=PPLC&orderby=population&maxRows=${resourceType.count}&username=${USERNAME}`)
    fetch(url)
      .then(response => {
        if(!response.ok){
          throw new Error(`An error has occured: ${response.status}`);
          }
          return response.json();
        })
      .then(data => {
        if (data.totalResultsCount === 0) {
          throw new TypeError(`Can't find any ${resourceType.type.replace('y', 'ies')} with the name "${resourceType.name}"`);
        }
        const filteredResults = data.geonames.filter(item => data.geonames[0].countryCode === item.countryCode);
        filteredResults.splice(10);
        setSearchResults(filteredResults);
        setIsLoading(false);
        setErrorMessage('');
      })
      .catch((err) => {
          setErrorMessage(err.message);
          setSearchResults();
          setIsLoading(false);
      })
  },[resourceType]);

  const queryCity = (name) => {
    setUserInput(name);
    setResourceType({name: encodeURIComponent(name), count: '1', type: 'city', query: 'name'})
  }

  const queryCountry = (name) => {
    setUserInput(name);
    setResourceType({name: encodeURIComponent(name), count: '50', type: 'country', query: 'q'})
  }

  return (
    <div className="App container">
      <SearchForm onCitySearch={queryCity} onCountrySearch={queryCountry}/>
      <Card>
        {searchResults && <h4>Displaying results for "{userInput}"</h4>}
        {errorMessage && <h4>{errorMessage}</h4>}
        {searchResults && !isLoading && searchResults.map((item, index)  => (
        <SearchResults
          key={Math.random(Math.floor() * 10)} 
          countryName={item.countryName}
          population={item.population}
          cityName={item.toponymName}
          type={resourceType.type}
          position={index + 1}
          />  
          ))}
      </Card>
    </div>
  );
}

export default App;
