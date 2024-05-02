import { useState } from 'react'

import './App.css'

function App() {

  let [counter,setCounter] = useState(0);
  function increaseCount(){
    if(counter<20){
      setCounter(counter+1);
    }
    // console.log(counter);
  }
  function decreaseCount(){
    if(counter>0){
      setCounter(counter-1);
    }
    // console.log(counter);
  }
  return (
    <>
      <h1>COUNTER APP</h1>
      <h3>Count Value:{counter}</h3>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
      <p>Current Count:{counter}</p>
    </>
  )
}

export default App
