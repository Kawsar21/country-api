import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from './Details';

function CountryDetails() {
    const { name } = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(country => setCountry(country))
    }, []);
    return (
        <div>
            {
                country.map(cout => <Details cout={cout}></Details>)
            }
        </div>
    )
}

export default CountryDetails
