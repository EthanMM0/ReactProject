import React from 'react';
import './Projects.css';

/*
File name: Projects.jsx
Student Name: Ethan Micciola
Student ID: 301259110
Date: 2024-09-27
*/


const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-grid">
        <div className="project-container">
          <div className="project">
            <img src="port.png" alt="Project 1" />
            <h3>Personal Portfolio</h3>
            <p>React site for the purpose of showcasing my skills through a portfolio.</p>
          </div>
        </div>
        <div className="project-container">
          <div className="project">
            <img src="note.jpg" alt="Project 2" />
            <h3>To Do List App</h3>
            <p>This project allows the user to create a notepad-like list to make a to-do list such as grocery list, medications, or homework.</p>
          </div>
        </div>
        <div className="project-container">
          <div className="project">
            <img src="calc.jpg" alt="Project 3" />
            <h3>Calculator App</h3>
            <p>A basic calculator to use while doing mathematical equations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
