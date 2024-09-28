import React from 'react';
import './Services.css';

/*
File name: Services.jsx
Student Name: Ethan Micciola
Student ID: 301259110
Date: 2024-09-27
*/

const Services = () => {
  return (
    <div className="services">
      <h1>My Services</h1>
      <div className="services-grid">
        <div className="service-container">
          <div className="service">
            <img src="/images.jpg" alt="Web Development" />
            <h3>Web Development</h3>
          </div>
        </div>
        <div className="service-container">
          <div className="service">
            <img src="/mobiledev.jpg" alt="Cyber Security" />
            <h3>Cyber Security</h3>
          </div>
        </div>
        <div className="service-container">
          <div className="service">
            <img src="/prog.jpg" alt="General Programming" />
            <h3>General Programming</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
