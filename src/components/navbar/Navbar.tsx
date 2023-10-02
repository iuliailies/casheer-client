import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import './Navbar.sass'

const Navbar = () => {
  return (
    <nav>
        <img src="assets/logo.svg" alt="" className='logo'/>
        <NavLink to="/">
            <FontAwesomeIcon icon={icon({name: 'hand-holding-dollar'})} />
            <FontAwesomeIcon className='icon' icon={icon({name: 'angles-right'})} />
        </NavLink>

        <NavLink to="/debts">
            <FontAwesomeIcon  icon={icon({name: 'handshake'})} />
            <FontAwesomeIcon className='icon' icon={icon({name: 'angles-right'})} />
        </NavLink>

        <NavLink to="/stats">
            <FontAwesomeIcon icon={icon({name: 'chart-column'})} />
            <FontAwesomeIcon className='icon' icon={icon({name: 'angles-right'})} />
        </NavLink>

    </nav>
  );
};

export default Navbar;
