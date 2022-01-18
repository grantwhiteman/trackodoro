import Header from './components/Header';
import Timer from './components/Timer';
import Set from './components/Set';
import Navbar from './components/Navbar';
import Break from './components/Break';
// import Button from "./components/Button";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';

const App = () => {
	const [ pomodoroTimer, setPomodoroTimer ] = useState(25);
	const [ breakTimer, setBreakTimer ] = useState(5);
	const [ tomatoes, setTomatoes ] = useState(0);
	
	const SetTimer = (studyTime) => {
		setPomodoroTimer(studyTime)
	}

	return (
		<Router>
			<div className="container">
				<Header />
				<Navbar />
				<Routes>
					<Route path='trackodoro/set' element = {<Set time={pomodoroTimer} onSet={SetTimer} />} />
					<Route path='trackodoro/timer' element = {<Timer time={pomodoroTimer} addTomato={() => setTomatoes(tomatoes + 1)} />} />
					<Route path='trackodoro/break' element = {<Break time={breakTimer} />} />
				</Routes>
					<h1>Tomatoes earned: {tomatoes}</h1>
			</div>
		</Router>
	);
};

export default App;
