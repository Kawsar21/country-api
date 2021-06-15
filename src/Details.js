import React from 'react';
import './Details.css';

function Details(props) {
    const { name, capital, flag, region, subregion, timezones } = props.cout;
    const makeStyles = {
        maxWidth: '150px',
        maxHeight: '150px',
    }
    return (
        <div>
            <div className="content">
            <img style={ makeStyles } src={ flag } alt="Flag" />
            <h4>Country: { name }</h4>
            <p>Capital: { capital }</p>
            <p>Region: { region }</p>
            <p>Sub-Region: { subregion }</p>
            <p>Time-Zones: { timezones }</p>
            </div>
        </div>
    )
}

export default Details
