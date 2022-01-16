import Header from "./components/Header";
import Timer from "./components/Timer";
// import Button from "./components/Button";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';

const App = () => {
  const [ newTimeRemaining, setNewTimeRemaining ] = useState(1/15);
  // const [ buttonType, setButtonType ] = useState('Pause');
  const [ tomatoes, setTomatoes ] = useState(0);

  return (
    <div>
      <Header />
      <Timer time={newTimeRemaining} addTomato={() => setTomatoes(tomatoes + 1)} />
      {/* <Button type={buttonType} />   */}
      <p>{tomatoes}</p>
    </div>
  );
}

export default App;
