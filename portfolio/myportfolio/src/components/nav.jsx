/*
File name: nav.jsx
Student Name: Ethan Micciola
Student ID: 301259110
Date: 2024-09-27
*/

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About Me</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="./Services">Services</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
