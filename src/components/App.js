import { useState } from "react";

import React from 'react'
import '../styles/App.css';
const App = () => {
  const [click, setClick] = useState(1);
  const[disabled, setDisabled] = useState(true);
  const prevClick = () => {
  setClick(click-5);
  if(click==6){
    setDisabled(true);
  }
  }
  const nextClick = () => {
  setClick(click+5);
  setDisabled(false);
  }

  return (
    <div id="main">
      <div id="number-display">
      <p>{click}</p>
      <p>{click + 1}</p>
      <p>{click + 2}</p>
      <p>{click + 3}</p>
      <p>{click + 4}</p>
      
      </div>
      <button id="back-button" disabled={disabled} onClick={prevClick}>Prev Page</button>
      <button id="next-button" onClick={nextClick}>Next Page</button>
    </div>
  )
}


export default App;
