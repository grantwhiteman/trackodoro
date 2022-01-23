import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { differenceInSeconds, set } from 'date-fns';
import toTwoSigFigs from './toTwoSigFigs';

const Timer = ({ time, addTomato }) => {
	const [ timeRemaining, setTimeRemaining ] = useState(time * 60);
	const [ isPaused, setIsPaused ] = useState(true);
	const timeRemainingRef = useRef(timeRemaining);
	const expireDateRef = useRef(Date.now() + timeRemaining * 1000);
	const isPausedRef = useRef(isPaused);

	let navigate = useNavigate();

	let minutes = toTwoSigFigs(timeRemainingRef.current / 60);
	let seconds = toTwoSigFigs(timeRemainingRef.current % 60);

	function timer() {
		setIsPaused(isPausedRef.current)
		if (isPausedRef.current) return;
		if (timeRemainingRef.current === 0) {
			addTomato();
			navigate("/trackodoro/break/");
			return
		}
		timeRemainingRef.current = differenceInSeconds(expireDateRef.current, Date.now())
		document.title = `${toTwoSigFigs(timeRemainingRef.current / 60)}:${toTwoSigFigs(timeRemainingRef.current % 60)} Trackodoro`;
		setTimeRemaining(timeRemainingRef.current)
	}

	const pauseTimer = () => {
		isPausedRef.current = !isPausedRef.current
		expireDateRef.current = (Date.now() + timeRemainingRef.current * 1000)
	};

	const resetTimer = () => {
		!isPausedRef.current && pauseTimer();
		setTimeRemaining(time * 60);
		timeRemainingRef.current = (time * 60)
		document.title = `${toTwoSigFigs(timeRemainingRef.current / 60)}:${toTwoSigFigs(timeRemainingRef.current % 60)} Trackodoro`;
	}

	useEffect(() => {
			const myTimer = setInterval(timer, 1000);
			return () => clearInterval(myTimer); //when I pause, it doesnt count down to next number
		}
	);
		


	return (
		<div>
			<h1 className='digitize'>
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
