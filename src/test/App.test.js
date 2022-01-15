import { act, render, screen } from '@testing-library/react';
import App from '../App'

describe('Page',() => {
  test('Shows header', () => {
    render(<App />);
    const linkElement = screen.getByText(/trackodoro/i); //ignores case
    expect(linkElement).toBeInTheDocument();
  });

  test('Shows 25:00 on the screen', () => {
    render(<App />);
    const linkElement = screen.getByText(/25:00/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Shows pause button', () => {
    render(<App />);
    const linkElement = screen.getByText(/pause/i);
    expect(linkElement).toBeInTheDocument();
  });
})

