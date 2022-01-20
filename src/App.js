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
	// const [ tomatoes, setTomatoes ] = useState(0);
	const [ subject, setSubject] = useState('');
	const [ subjectTomatoes, setSubjectTomatoes ] = useState({});
	
	const SetTimer = (subject, studyTime, breakTime) => {
		setPomodoroTimer(studyTime)
		setBreakTimer(breakTime)
		setSubject(subject)
	}

	const addTomato = () => {
		if (subject in subjectTomatoes) setSubjectTomatoes({...subjectTomatoes, [subject] : subjectTomatoes[subject] + 1 })
		else setSubjectTomatoes({...subjectTomatoes, [subject] : 1 })
	}

	return (
		<Router>
			<div className="container">
				<Header />
				<Navbar />
				<Routes>
					<Route path='trackodoro/set' element = {<Set pomodoro={pomodoroTimer} breakodoro={breakTimer} onSet={SetTimer} />} />
					<Route path='trackodoro/timer' element = {<Timer time={pomodoroTimer} addTomato={addTomato} />} />
					<Route path='trackodoro/break' element = {<Break time={breakTimer} />} />
				</Routes>
				<div>
					{Object.keys(subjectTomatoes).map(function(key) {
						return <div key={key}>Subject: {key}, Tomatoes: {subjectTomatoes[key]}</div>;
					})}
				</div>
			</div>
		</Router>
	);
};

export default App;
