import React from 'react'
import { Dashboard } from './componets/Dashboard'
import { Landing } from './componets/Landing'

import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
    <Appbar/>
     <Routes>
      <Route path = "/" element={<Landing/>}/>      
      <Route path = "/Dashboard" element={<Dashboard/>}/>
     </Routes>
    </BrowserRouter>
  )
}

function Appbar() {
  const navigator = useNavigate()

  return (
    <div>
      <button onClick={() => {
        navigator("/")
      }}>Landing</button>
      <button onClick={() => {
        navigator("/Dashboard")
      }}>Dashboard</button>
    </div>
  )
}

export default App




// my mistake is not using the </> when using the route {12 and 13th line }
// always use useNavigate hook for creating navigation in react
// use navigation should also inside the <BrowserRouter></BrowserRouter>
/* 
    <BrowserRouter>
      <Routes>
        <Route path="" elements={<name/>}/>
        <Route path="" elements={<name/>}/>
      </Routes>
    </BrowserRouter>
*/