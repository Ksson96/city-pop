import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import user from '@testing-library/user-event';
import SearchForm from './SearchForm';

describe('SearchForm Component', () => {
    

    test('renders country form', () => {
        render(<SearchForm />);

        const countryLabel = screen.getByLabelText('Country', { exact: false});
        expect(countryLabel).toBeInTheDocument();

        const countryInput = screen.getByLabelText('Country:', {name: /country:/i});
        expect(countryInput).toBeInTheDocument();
    })

    test('renders city form', () => {
        render(<SearchForm />);

        const cityLabel = screen.getByLabelText('City', { exact: false});
        expect(cityLabel).toBeInTheDocument();

        const cityInput = screen.getByLabelText('City:', {name: /city:/i});
        expect(cityInput).toBeInTheDocument();
    })

    test('renders form buttons', () => {
        render(<SearchForm />);

        const searchButton = screen.getAllByRole('button', {
            name: /search/i
          })
        expect(searchButton).toHaveLength(2);
    })


    
})

