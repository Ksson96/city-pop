import { render, screen } from '@testing-library/react';
import SearchResults from './SearchResults';
describe('Search results component', () => {
    test('Renders search results',  () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
          json: async () => [{}]
        });
        render(<SearchResults />);
        const listItemElements = screen.getAllByRole('heading');
        expect(listItemElements).not.toHaveLength(0);
      });
})

