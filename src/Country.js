import React from 'react';
import { useHistory } from 'react-router-dom';
import './Country.css';

function Country(props) {
    const makeStyles = {
        maxWidth: '150px',
        maxHeight: '150px',
    }
    const { name, capital, flag, region, subregion, timezones } = props.country;
    const history = useHistory();
    const handleClick = (name) => {
        const url = `/country/${name}`;
        history.push(url);
    }

    return (
        <div className="country">
            <div className="content">
            <img style={ makeStyles } src={ flag } alt="Flag" />
            <h4>Country: { name }</h4>
            <p>Capital: { capital }</p>
            <p>Region: { region }</p>
            <p>Sub-Region: { subregion }</p>
            <p>Time-Zones: { timezones }</p>
            <button onClick={() => handleClick(name)} className="details">Click for more details</button>
            </div>
        </div>
    )
}

export default Country
