import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // useState hook 

  let [counter, setCounter] = useState(15)  // default value of my counter

  // let counter = 5

  const addValue = () =>{
    // console.log("clicked", counter);
    // counter = counter + 1
    // if (counter === 20) {
    //   setCounter(counter + 0)
    // } else {
    //   setCounter(counter + 1)
    // }
    if (counter < 20) {
      setCounter(counter + 1)
    }
    
  }

  const removeValue = ()=>{
    // if (counter === 0) {
    //   setCounter(counter - 0)
    // } else {
    //   setCounter(counter - 1)
    // }
    if (counter > 0) {
      setCounter(counter - 1)
      
    }
  }

  // react reacted on variable updation 
  // react control ui updation

  return (
    <>
      <h1>counter app </h1>
      <h2>counter value : {counter}</h2>

      <button
      onClick={addValue}
      >add value</button>
      <br /> 
      <br />
      <button onClick={removeValue}>remove value</button>
     <p>react reacted on variable updation . react control ui updation</p>
    </>
  )
}

export default App
