import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { useState } from "react";
const App = () => {
  const [disabled, setDisabled] = useState(true)

  // function handleClick() {

  //     setDisabled(true)
  // }
  const[count, SetCount] = useState(1);
const prevClick = () => {
  SetCount(count-5);
  if(count==6){
    setDisabled(true);
  }
}
const nextClick = () => {
  SetCount(count+5);
  setDisabled(false)
}
  return (
    <div id="main">

      <div id="number-display">
        <p>{count}</p>
        <p>{count+1}</p>
        <p>{count+2}</p>
        <p>{count+3}</p>
        <p>{count+4}</p> 
      </div>
      <button id="back-button" disabled={disabled} onClick={prevClick}>Prev Page</button>
      <button id="next-button" onClick={nextClick}  >Next Page</button>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById("root"));
