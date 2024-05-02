import { useState } from 'react'

import './App.css'

function App() {

  let [counter,setCounter] = useState(0);
  function increaseCount(){
    setCounter(counter++);
    console.log(counter);
  }
  function decreaseCount(){
    setCounter(counter--);
    console.log(counter);
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
