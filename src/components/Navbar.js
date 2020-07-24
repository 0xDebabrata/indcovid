import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const navbar = ({ stateChange, state }) => {

  return(
    <div>
      <ul className='nav'>
        <NavLink to='/'><li className='data' >Data</li></NavLink>
        <NavLink to='/donate'><li className='donation'>Donation</li></NavLink>
      </ul>
    </div>
  )
}

export default navbar;
