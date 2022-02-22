import React from 'react';
import "./Country.css"

const Country = (props) => {

    const { name, population, region, flags } = props.country;
    const handleAddedCountry = props.handleAddedCountry;


    const flagStyle = {
        width: "200px",
        height: "150px"
    }
    
    return (
        <div className = "country-style">
            <img src={flags.svg} style={flagStyle} alt="" />
            <h5>Country Name: {name.common}</h5>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <button onClick={() => handleAddedCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;