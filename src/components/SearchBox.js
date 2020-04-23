import React from 'react';
import './SearchBox.css';

const searchBox = ({ searchChange }) => {
    return (
        <div className='container'>
            <input className='searchbox' type='search' placeholder='Enter state' onChange={searchChange} />
        </div>
    )
}

export default searchBox;
