import { useEffect } from "react"
import { useRef } from "react"
import { useCallback } from "react"
import { useState } from "react"


function App() {

  const [length, setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null) // for copy the password 
  

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "abcdefghijklmno"
    
    if (characterAllowed) str += '~!@#$%^&*'
    if (numberAllowed) str += "123456789"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
      
    }

    setPassword(pass)
  }, [length, numberAllowed, characterAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  // password copy
  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(password)
    
  }, [password])
  

  return (
    <>
    <div className="w-full max-w-md mx-auto rounded=-xl">
      <h1 className="text-white text-center">Password Generator</h1>
      <div className="flex overflow-hidden mb-4 mt-2">
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        readOnly
        ref={passwordRef}

        />
        <button onClick={copyPasswordToClipboard} 
        className="text-white bg-red-600">copy</button>
      </div>
      <div>
        <div>
          <input 
          type="range"
          min={0}
          max={100}
          className="cursor-pointer"
          value={length}
          onChange={(e) => {setLenght(e.target.value)}}

          />
          <label htmlFor="" className="text-red-700">length: {length}</label>

        </div>
        <div>
          <input 
          type="checkbox"
          defaultChecked= {numberAllowed}
          onChange={() =>{
            setNumberAllowed((prev) => !prev)
          }} 
          />
          <label htmlFor="" className="text-red-700">number</label>

        </div>
        <div>
          <input 
          type="checkbox"
          defaultChecked = {characterAllowed}
          onChange={() =>{
            setCharacterAllowed((prev) => !prev)
          }}
          />
          <label htmlFor="" className="text-red-700">character</label>
        </div>
      </div>

    </div>
    </>
  )
}

export default App




