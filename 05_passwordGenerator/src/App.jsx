import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
 
  const [length, setLenght] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')

 
  // useRef hook

  const passwordRef = useRef(null)

  // why we use useCallback()
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%&*(){}[]<>/?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)    //This line generates a random index within the range of the str variable length.
      
      pass += str.charAt(char)
      
    }
    
    setPassword(pass)


  }, [length, numberAllowed, characterAllowed, setPassword ])
  

  // password COPY
  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)    // select only three word
    window.navigator.clipboard.writeText(password)
    // alert("copied")

  }, [password])




  // why we use useEffect()
useEffect(()=>{
  passwordGenerator()
}, [length, numberAllowed, characterAllowed, passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md h-20 mx-auto shadow-md rounded-xl px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center'> password Generator</h1>
      <div className='flex showrounded-lg overflow-hidden mb-4 mt-2'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 '
          placeholder='password'
          readOnly
          ref={passwordRef}
          
          />

          <button  onClick={copyPasswordToClipBoard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-sm'>
            copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={0}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLenght(e.target.value)}}
           />
           <label> length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked = {numberAllowed}
          id='numberInput'
          onChange={() =>{
            setnumberAllowed((prev) => !prev)
          }} />
          <label>Numbers</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" dafaultChecked ={characterAllowed} id="characterInput"
          onChange={()=>{
            setCharacterAllowed((prev) => !prev) // from the interview video

          }} />
          <label htmlFor="">character</label>

        </div>

      </div>
    </div>
    </>
  )
}

export default App
