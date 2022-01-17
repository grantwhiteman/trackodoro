import { useState } from 'react';

const SetTimer = ({ onSet }) => {
	const [ subject, setSubject ] = useState('');
	const [ studyTime, setStudyTime ] = useState(25);
	const [ breakTime, setBreakTime ] = useState(5);
	const [ autoBreak, setAutoBreak ] = useState(false);

	// const onSubmit = () => {
	// 	onSet(subject, studyTime, breakTime, autoBreak);
	// };

	const onSubmit = (e) => {
        e.preventDefault()
		onSet(studyTime);
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Subject</label>
				<input type="text" placeholder="e.g Physics" onChange={e => setSubject(e.target.value)} />
                {subject}
			</div>
            			<div className="form-control">
			<label>Study time</label>
                <input type="number" value={studyTime} onChange={e => setStudyTime(e.target.value)} />
			</div>
			<div className="form-control">
				<label>Break time</label>
				<input type="number" value={5} onChange={e => setBreakTime(e.target.value)} />
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

export default SetTimer;
