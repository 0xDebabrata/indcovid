import React from 'react';
import './Card.css';

const card = ({ state, active, confirmed, deaths, recovered }) => {
    return (
        <div className='card'>
            <div>
                <div>
                  <h1 className='state'>{state}</h1><span className='confirmed'>{confirmed}</span>
                </div>
                <p className='active'>{active}</p>
                <p className='deaths'>{recovered}/{deaths}</p>
            </div>
        </div>
    )
}

export default card;
