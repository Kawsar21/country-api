import React, { useEffect, useState } from 'react'
import Country from './Country';

function Home() {
    const [countries, setCountries] = useState([]);
    const first15 = countries.slice(0, 15);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))   
    }, []);
    return (
        <div className="home">
                {
                    first15.map((country, idx) => <Country key={idx} country={country}></Country>)
                }
        </div>
    )
}

export default Home
