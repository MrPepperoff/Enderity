import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('чтото тестим', () => {
    render(<App />);
    
    const resultElement = screen.getByText(/Home/i);
    expect(resultElement).toBeInTheDocument();
  });
});