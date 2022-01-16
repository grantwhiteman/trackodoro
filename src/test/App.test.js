import { act, render, screen } from '@testing-library/react';
import App from '../App'

describe('Page',() => {
  test('Shows header', () => {
    render(<App />);
    const title = screen.getByText(/trackodoro/i); //ignores case
    expect(title).toBeInTheDocument();
  });

  test('Shows 25:00 on the screen', () => {
    render(<App />);
    const timer = screen.getByText(/25:00/i);
    expect(timer).toBeInTheDocument();
  });

  test('Shows pause button', () => {
    render(<App />);
    const pauseButton = screen.getByText(/pause/i);
    expect(pauseButton).toBeInTheDocument();
  });
})

