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
        if (url === '/cart') {
          if (data.create === '19') {
            return Promise.resolve({ data: 'Booking Seat successful' });
          } else {
            return Promise.reject(new Error('Booking Seat unsuccessful'));
          }
        }
      }),
    })),
  };
});

describe('SeatBook Component', () => {
  it('renders the SeatBook form', () => {
    render(
      <BrowserRouter> {/* Wrap your component with BrowserRouter */}
        <Register />
      </BrowserRouter>
    );
    // ...
  });

  // Rest of your test cases...
});
