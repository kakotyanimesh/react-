import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // useState hook 

  const [counter, setCounter] = useState(15)  // default value of my counter

  // let counter = 5

  const addValue = () =>{
    // console.log("clicked", counter);
    // counter = counter + 1
    // if (counter === 20) {
    //   setCounter(counter + 0)
    // } else {
    //   setCounter(counter + 1)
    // }
    if (counter < 100) {
      // setCounter(counter + 1)
      // there is an arrow function inside the setCounter or inside the setName

      setCounter(prevCount => prevCount + 1)
      // setCounter(prevCount => prevCount + 1)
      // setCounter(prevCount => prevCount + 1) 
      // setCounter(prevCount => prevCount + 1) // if we write like this then it would take first the previous value and do the work 
    }
    
  }

  const removeValue = ()=>{
    // if (counter === 0) {
    //   setCounter(counter - 0)
    // } else {
    //   setCounter(counter - 1)
    // }
    if (counter > 0) {
      setCounter(prevCount => prevCount - 1)
      // setCounter(prevCount => prevCount - 1)
      // setCounter(prevCount => prevCount - 1)

      // setCounter(prevCount => prevCount - 1) // here also happening the same as like using the pevious value 
      
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
