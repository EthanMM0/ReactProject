import React from 'react';
import './About.css';

/*
File name: About.jsx
Student Name: Ethan Micciola
Student ID: 301259110
Date: 2024-09-27
*/

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src="me.png" alt="Ethan Micciola" className="profile-pic" />
      <p>Hello! I'm Ethan Micciola, a software engineering student with a focus on cybersecurity <br></br>
        and a passion for data analytics and security frameworks. Skilled in Python, C#, and SQL, <br></br>
        I have a foundational understanding of machine learning and hands-on experience with security audits, <br></br>
        SIEM tools, and Agile practices. I'm constantly exploring new ways to leverage technology to solve real-world problems.
        <br></br>
        </p>
      <a href="Resume.pdf" className="btn" download>Download My Resume</a>
    </div>
  );
}

export default About;
