import { act, fireEvent, render, screen } from '@testing-library/react';
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
    const timer = screen.getByText(/24:59/i);
    expect(timer).toBeInTheDocument();
  });

  test('Shows shows 00:00 when timer runs out (1s start)', () => {
    render(<Timer time={0.5} />);
    for (let i = 0; i < 30; i++) {
      act(() => jest.advanceTimersByTime(1000))
    }
    const timer = screen.getByText(/00:00/i);
    expect(timer).toBeInTheDocument();
    const tomato = screen.getAllByAltText(/tomato/i)
    expect(tomato).toBeInTheDocument();
  });

  test('Stops counting when pause is hit', () => {
    render(<Timer time={25}/>);
    const pause = screen.getByText('Pause')
    fireEvent.click(pause)
    act(() => jest.advanceTimersByTime(1000))
    act(() => jest.advanceTimersByTime(1000))
    act(() => jest.advanceTimersByTime(1000))
    act(() => jest.advanceTimersByTime(1000))
    const timer = screen.getByText(/24:59/i);
    expect(timer).toBeInTheDocument();
  });
})


