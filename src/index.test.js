import { render, screen } from '@testing-library/react';
import Header from './Components/Header/header';

test('When I open the website', () => {
  render(<Header />);
  const linkElement = screen.getByText("Accueil");
  expect(linkElement).toBeInTheDocument();
});
