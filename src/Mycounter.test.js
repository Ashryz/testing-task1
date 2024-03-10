import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import Counter from './Mycounter';

test('Counter component renders correctly', () => {
  render(<Counter />);
  
  expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
});

test('Increment and decrement buttons work correctly', () => {
  render(<Counter />);
  

  expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();

 
  fireEvent.click(screen.getByText(/Increment/i));


  expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();

 
  fireEvent.click(screen.getByText(/Decrement/i));

 
  expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
});


