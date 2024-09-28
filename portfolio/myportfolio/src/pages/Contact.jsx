import React, { useState } from 'react';
import './Contact.css';

/*
File name: Contact.jsx
Student Name: Ethan Micciola
Student ID: 301259110
Date: 2024-09-27
*/

// Contact Component
const Contact = () => {
  //hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  
    alert('Form submitted!');
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        {/* First Name Input */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        
        {/* Last Name Input */}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        
        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        
        {/* Message Textarea */}
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        
        {/* Submit Button */}
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
