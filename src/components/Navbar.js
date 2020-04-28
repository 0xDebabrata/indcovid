import React from 'react';
import './Navbar.css';

const navbar = ({ stateChange }) => {
  return(
    <div>
      <ul className='nav'>
        <li class='data' onClick={stateChange}>Data</li>
        {/*<li class='info'onClick={stateChange}>Information</li>*/}
        <li class='donation' onClick={stateChange}>Donation</li>
      </ul>
    </div>
  )
}

export default navbar;
