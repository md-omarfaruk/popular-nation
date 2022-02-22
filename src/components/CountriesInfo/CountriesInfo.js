import React from 'react';

const CountriesInfo = (props) => {
    const countriesInfo = props.countriesInfo;

    // let totalPopulation = 0;
    //     for (let i = 0; i < countriesInfo.length; i++) {
    //         const countries= countriesInfo[i];
    //             totalPopulation = totalPopulation + countries.population;          
    //     }

const totalPopulation = countriesInfo.reduce((total, newAdded) => total+ newAdded.population, 0);


    return (
        <div>
            <h4>Country Added: {countriesInfo.length}</h4>
            <h5>Added countries total population: {totalPopulation}</h5>
        </div>
    );
};

export default CountriesInfo;