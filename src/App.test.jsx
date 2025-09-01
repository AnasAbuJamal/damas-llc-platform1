import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading', { level: 1, name: /DAMAS/i });
    expect(headingElement).toBeInTheDocument();
  });
});
