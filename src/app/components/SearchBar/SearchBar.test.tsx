import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './index';

describe('SearchBar Component', () => {
    test('renders the input field', () => {
        const setSearchQuery = jest.fn();
        render(<SearchBar searchQuery="" setSearchQuery={setSearchQuery} />);

        const inputElement = screen.getByPlaceholderText(/search products/i);
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveValue('');
    });

    test('calls setSearchQuery on input change', () => {
        const setSearchQuery = jest.fn();
        render(<SearchBar searchQuery="" setSearchQuery={setSearchQuery} />);

        const inputElement = screen.getByPlaceholderText(/search products/i);
        
        // Simulate input change
        fireEvent.change(inputElement, { target: { value: 'laptop' } });

        expect(setSearchQuery).toHaveBeenCalledTimes(1);
        expect(setSearchQuery).toHaveBeenCalledWith('laptop');
    });

    test('renders with existing search query', () => {
        const setSearchQuery = jest.fn();
        const existingQuery = 'tablet';
        
        render(<SearchBar searchQuery={existingQuery} setSearchQuery={setSearchQuery} />);
        
        const inputElement = screen.getByPlaceholderText(/search products/i);
        expect(inputElement).toHaveValue(existingQuery);
    });
});
