import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Timer = ({ time, addTomato }) => {
	const [ timeRemaining, setTimeRemaining ] = useState(time * 60);
	const [ isPaused, setIsPaused ] = useState(true);
	const timeRemainingRef = useRef(timeRemaining);
	const isPausedRef = useRef(isPaused);

	let navigate = useNavigate();
	let minutes = Math.floor(timeRemaining / 60).toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false
	});
	let seconds = Math.floor(timeRemaining % 60).toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false
	});

	function timer() {
		if (isPausedRef.current) return;
		if (timeRemainingRef === 0) {
			addTomato();
			navigate("/trackodoro/break/");
		}
		timeRemainingRef.current --;
		setTimeRemaining(timeRemainingRef.current)
	}

	useEffect( //maybe i dont wanty to use useeffect
		() => {
			const myTimer = setInterval(timer, 1000);
			return () => clearInterval(myTimer); //when I pause, it doesnt count down to next number
		},
		[] // why does this stop working on an inactive page after ~ 5 minutes?!
	);

	const pauseTimer = () => {
		isPausedRef.current = !isPausedRef.current
		setIsPaused(isPausedRef.current);
	};

	const resetTimer = () => {
		!isPausedRef.current && pauseTimer();
		setTimeRemaining(time * 60);
	}

	return (
		<div>
			<h1>
				{minutes}:{seconds}
			</h1>
			<button className="btn btn-block" onClick={pauseTimer}>
				{isPaused && timeRemaining === time * 60 ? 'Start' : isPaused ? 'Resume' : 'Pause'}
			</button>
			<button className="btn btn-block" onClick={resetTimer}>
				Reset
			</button>
		</div>
	);
};

export default Timer;
