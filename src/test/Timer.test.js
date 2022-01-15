import { act, render, screen } from '@testing-library/react';
import Timer from '../components/Timer'

describe('timer',() => {
  beforeEach(() => {
    jest.useFakeTimers();
  })

  afterEach(() => {
    jest.useRealTimers();
  })

  test('Shows shows 24:59 after one second', () => {
    render(<Timer time={25}/>);
    act(() => jest.advanceTimersByTime(1000))
    const linkElement = screen.getByText(/24:59/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Shows shows 00:00 when timer runs out', () => {
    render(<Timer time={0.5} />);
    for (let i = 0; i < 30; i++) {
      act(() => jest.advanceTimersByTime(1000))
    }
    const linkElement = screen.getByText(/00:00/i);
    expect(linkElement).toBeInTheDocument();
  });
})

