import React from 'react';
import './Navbar.css';

const navbar = ({ stateChange, state }) => {

  return(
    <div>
      <ul className='nav'>
        <li className='data' onClick={stateChange}>Data</li>
        {/*<li class='info'onClick={stateChange}>Information</li>*/}
        <li className='donation' onClick={stateChange}>Donation</li>
      </ul>
    </div>
  )
}

export default navbar;
