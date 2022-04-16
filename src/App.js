import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Country from './components/Country/Country';
import CountriesInfo from './components/CountriesInfo/CountriesInfo';

function App() {

  const [countries, setCountries] = useState([]);
  const [countriesInfo, setCountriesInfo] = useState([]);

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error));
  }, []);

  const handleAddedCountry = (country) => {
    // console.log("country added", country);
    const newCountriesInfo = [...countriesInfo, country];
      setCountriesInfo(newCountriesInfo);
  }

  return (
    <div className="App">
      <h3>Total Countries: {countries.length}</h3>
      <CountriesInfo countriesInfo = {countriesInfo}></CountriesInfo>

      {
        countries.map(country => <Country country = {country} key = {country.ccn3 + 1} handleAddedCountry= {handleAddedCountry}></Country>)
      }

    </div>
  );
}

export default App;
