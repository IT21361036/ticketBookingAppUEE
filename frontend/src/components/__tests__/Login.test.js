import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Register from '../Register.jsx'; // Adjust the path as needed
import axios from "axios";

// Mock Axios and Axios Singleton
jest.mock('axios', () => {
  return {
    create: jest.fn(() => ({
      post: jest.fn((url, data) => {
        if (url === '/auth/login') {
          if (data.email === 'success@example.com') {
            return Promise.resolve({ data: 'Login successful' });
          } else {
            return Promise.reject(new Error('Registration failed'));
          }
        }
      }),
    })),
  };
});

describe('Register Component', () => {
  it('renders the login form', () => {
    render(
      <BrowserRouter> {/* Wrap your component with BrowserRouter */}
        <Register />
      </BrowserRouter>
    );
    // ...
  });

  // Rest of your test cases...
});
