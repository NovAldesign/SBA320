import React from 'react'
import './Navbar.css'
import logo from '../../assets/gfcLogo.png'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="Grown Folks Collective logo, navy blue and gold, with white background." />
        <ul>
        <li>Home</li>
        <li>Events</li>
        </ul>
    </nav>
  )
}

export default Navbar
