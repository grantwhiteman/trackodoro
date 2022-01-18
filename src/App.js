import Header from './components/Header';
import Timer from './components/Timer';
import Set from './components/Set';
import Navbar from './components/Navbar';
// import Button from "./components/Button";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';

const App = () => {
	const [ timeRemaining, setTimeRemaining ] = useState();
	const [ tomatoes, setTomatoes ] = useState(0);
	
	const SetTimer = (studyTime) => {
		setTimeRemaining(studyTime)
	}

	return (
		<Router>
			<div className="container">
				<Header />
				<Navbar />
				<Routes>
					<Route path='trackodoro/set' element = {<Set onSet={SetTimer} />} />
					<Route path='trackodoro/timer' element = {timeRemaining && <Timer time={timeRemaining} addTomato={() => setTomatoes(tomatoes + 1)} />} />
				</Routes>
					<h1>Tomatoes earned: {tomatoes}</h1>
			</div>
		</Router>
	);
};

export default App;
