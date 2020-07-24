import React from 'react';
import './Card.css';

const card = ({ state, active, confirmed, deaths, recovered }) => {
    return (
        <div className='card'>
            <div>
                <h1 className='state'>{state}</h1>
                <p className='confirmed'><span>Confirmed</span>{confirmed}</p>
                <p className='active-class'><span>Active</span>{active}</p>
                <p className='deaths'><span>Recovered/Deaths</span>{recovered}/{deaths}</p>
            </div>
        </div>
    )
}

export default card;
