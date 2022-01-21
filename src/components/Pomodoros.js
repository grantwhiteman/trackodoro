const Pomodoros = ({ subjectTomatoes }) => {
  return (
        <div>
      		{Object.keys(subjectTomatoes).map(function(key) {
				return <div key={key}>Subject: {key}, Tomatoes: {subjectTomatoes[key]}</div>;
			})}
        </div>
  )
}

export default Pomodoros;
