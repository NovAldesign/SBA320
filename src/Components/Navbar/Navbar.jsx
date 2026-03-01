import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/gfcLogo.png';

const Navbar = () => {
  return (
    <nav className='container'>
   
      <Link to="/">
        <img 
          src={logo} 
          className="nav-logo" 
          alt="Grown Folks Collective logo, navy blue and gold, with white background." 
        />
      </Link>

      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Home
          </NavLink>
        </li>
        
      
        <li>
          <Link to="/events" className="btn">
            Events
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
