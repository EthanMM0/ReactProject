/*
File name: App.test.js
Student Name: Ethan Micciola
Student ID: 301259110
Date: 2024-09-27
*/

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
