import { useState, useEffect } from 'react';

const Break = ({ time }) => {
	const [ timeRemaining, setTimeRemaining ] = useState(time * 60);
	const [ isPaused, setIsPaused ] = useState(true);

	let minutes = Math.floor(timeRemaining / 60).toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false
	});
	let seconds = Math.floor(timeRemaining % 60).toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false
	});

	useEffect(
		() => {
			const myTimer = setTimeout(() => {
				if (isPaused) return;
				if (timeRemaining === 0) return;
				setTimeRemaining(timeRemaining - 1);
			}, 1000);
			return () => clearTimeout(myTimer); //when I pause, it doesnt count down to next number
		},
		[ timeRemaining, isPaused ]
	);

	const pauseTimer = () => {
		setIsPaused(!isPaused);
	};
	const resetTimer = () => {
		!isPaused && pauseTimer();
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

export default Break;
