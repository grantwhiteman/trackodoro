import Header from "./components/Header";
import Timer from "./components/Timer";
// import Button from "./components/Button";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';

const App = () => {
  const [ newTimeRemaining, setNewTimeRemaining ] = useState(25);
  const [ buttonType, setButtonType ] = useState('Pause');

  return (
    <div>
      <Header />
      <Timer time={newTimeRemaining} />  
      {/* <Button type={buttonType} />   */}
    </div>


  );
}

export default App;
