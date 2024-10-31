import { render, screen } from '@testing-library/react';
import { FavoritesProvider } from '../context/FavoritesContext';
import App from '../App';

test('renders learn react link', () => {
  render(
      <FavoritesProvider>
          <App />
      </FavoritesProvider>
  );
  const linkElement = screen.getByText(/Learn-react/i);
  expect(linkElement).toBeInTheDocument();
});
