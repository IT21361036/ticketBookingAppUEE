import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Register from '../SeatBook.jsx'; // Adjust the path as needed
import axios from "axios";

// Mock Axios and Axios Singleton
jest.mock('axios', () => {
  return {
    create: jest.fn(() => ({
      post: jest.fn((url, data) => {
        if (url === '/bus/search') {
          if (data.create === '/bus/search') {
            return Promise.resolve({ data: 'Searching Bus successful' });
          } else {
            return Promise.reject(new Error('Searching Bus unsuccessful'));
          }
        }
      }),
    })),
  };
});

describe('Searching Bus Component', () => {
  it('renders the Searching Bus form', () => {
    render(
      <BrowserRouter> {/* Wrap your component with BrowserRouter */}
        <Register />
      </BrowserRouter>
    );
    // ...
  });

  // Rest of your test cases...
});
