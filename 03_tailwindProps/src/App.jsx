import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  // let myObject = {
  //   username: 'ai',
  //   age: 21
  // }
  // let newArr = [1, 2, 4]

  return (
    <>
      <h1 className='bg-green-400 text-blue-600 p-4 rounded-xl mb-4'>tailwind test</h1>
      <Card username="animesh" btnText="click me"/>
      <Card username="kakoty" btnText="visit me "/>
      <Card username="kakoty" />
     


    </>
  )
}

export default App
