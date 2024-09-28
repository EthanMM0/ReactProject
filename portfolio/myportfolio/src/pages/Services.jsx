import React from 'react';
import './Services.css';

/*
File name: Services.jsx
Student Name: Ethan Micciola
Student ID: 301259110
Date: 2024-09-27
*/

// Services Component
const Services = () => {
  return (
    <div className="services">
      <h1>My Services</h1>
      {/* Services Grid */}
      <div className="services-grid">
        {/* Service Item: Web Development */}
        <div className="service-container">
          <div className="service">
            <img src="/images.jpg" alt="Web Development" />
            <h3>Web Development</h3>
          </div>
        </div>
        {/* Service Item: Cyber Security */}
        <div className="service-container">
          <div className="service">
            <img src="/mobiledev.jpg" alt="Cyber Security" />
            <h3>Cyber Security</h3>
          </div>
        </div>
        {/* Service Item: General Programming */}
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
