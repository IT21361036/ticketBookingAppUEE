import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import SeatBook from './SeatBook'; // Adjust the path as needed

// Mock Axios
jest.mock('axios');

describe('SeatBook Component', () => {
  it('renders the seat booking page and handles an error during data fetch', async () => {
    // Mock the localStorage items
    const mockLocalStorage = {
      item: JSON.stringify({ _id: 'busId' }),
      user: JSON.stringify({ _id: 'userId', token: 'userToken' }),
    };
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: (key) => mockLocalStorage[key],
        setItem: (key, value) => (mockLocalStorage[key] = value),
      },
    });

    // Mock the axios.get request to simulate a failure
    axios.get.mockRejectedValue(new Error('Failed to fetch seat data'));

    render(
      <BrowserRouter>
        <SeatBook />
      </BrowserRouter>
    );

    // Assertions for rendering the seat booking page
    expect(screen.getByText('Seat Available')).toBeInTheDocument();

    // Wait for an error message to appear
    await waitFor(() => {
      expect(screen.getByText('Failed to fetch seat data')).toBeInTheDocument();
    });

    // Assertions and expectations based on the component's behavior
  });
});
