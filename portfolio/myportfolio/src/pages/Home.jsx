import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/*
File name: Home.jsx
Student Name: Ethan Micciola
Student ID: 301259110
Date: 2024-09-27
*/

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Innovating Programming and cybersecurity for a safer future.</p>
      <Link to="/About" className="btn">Learn More About Me</Link>
      <Link to="/Projects" className="btn">View My Projects</Link>
    </div>
  );
}

export default Home;
