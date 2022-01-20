import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Set = ({ pomodoro, breakodoro, onSet }) => {
	const [ subject, setSubject ] = useState('');
	const [ studyTime, setStudyTime ] = useState(pomodoro);
	const [ breakTime, setBreakTime ] = useState(breakodoro);
	const [ autoBreak, setAutoBreak ] = useState(false);

	// const onSubmit = () => {
	// 	onSet(subject, studyTime, breakTime, autoBreak);
	// };
	let navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault()
		onSet(subject, studyTime, breakTime);
		navigate("/trackodoro/timer/");
	};

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<div className="form-control">
				<label>Subject</label>
				<input type="text" placeholder="e.g Physics" onChange={e => setSubject(e.target.value)} required />
			</div>
            <div className="form-control">
				<label>Study time</label>
                <input type="number" value={studyTime} onChange={e => setStudyTime(e.target.value)} />
			</div>
			<div className="form-control">
				<label>Break time</label>
				<input type="number" value={breakTime} onChange={e => setBreakTime(e.target.value)} />
			</div>
			<div className="form-control form-control-check">
				<label>Automatically start break</label>
				<input
					type="checkbox"
					checked={autoBreak}
					value={autoBreak}
					onChange={e => setAutoBreak(e.currentTarget.checked)}
				/>
			</div>
			<input type="submit" value="Set timer" className="btn btn-block" />
		</form>
	);
};

export default Set;
