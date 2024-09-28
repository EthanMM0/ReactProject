/*
File name: App.js
Student Name: Ethan Micciola
Student ID: 301259110
Date: 2024-09-27
*/


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
