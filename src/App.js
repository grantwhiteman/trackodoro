import Header from './components/Header';
import Timer from './components/Timer';
import SetTimer from './components/SetTimer';
import Navbar from './components/Navbar';
// import Button from "./components/Button";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';

const App = () => {
	const [ timeRemaining, setTimeRemaining ] = useState();
	const [ tomatoes, setTomatoes ] = useState(0);
	const [ showSetTimer, setShowSetTimer ] = useState(true);

	const setTimer = (studyTime) => {
		setTimeRemaining(studyTime)
	}

	return (
		<Router>
			<div className="container">
				<Header />
				<Navbar />
				<Routes>
					<Route path='trackodoro/settimer' element = {showSetTimer && <SetTimer onSet={setTimer} />} />
					<Route path='trackodoro/timer' element = {timeRemaining && <Timer time={timeRemaining} addTomato={() => setTomatoes(tomatoes + 1)} />} />
				</Routes>
					<h1>Tomatoes earned: {tomatoes}</h1>
			</div>
		</Router>
	);
};

export default App;
