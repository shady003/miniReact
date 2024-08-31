import React, { useCallback, useEffect, useState } from 'react'

const App = () => {
  const [password,setPassword] = useState("initial")
  const [length , setLenght] = useState(9)
  const [numberAllowed,setnumberAllowed] = useState(false)
  const [alphaAllowed,setAlphaAllowed] = useState(false)
  const generate = useCallback(()=>{
          let pass = ""
          let str = 'ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrst'
          const num = '0123456789'
          const special = '!@#$%^&*_-=+~'
          if (numberAllowed){str += num}
          if (alphaAllowed){str += special}
          for(let i = 1 ; i <= length ; i++){
                  let R = Math.floor((Math.random()*str.length)+1)
                  pass += str.charAt(R)
          }
          setPassword(pass)

  },[length,numberAllowed,alphaAllowed,setPassword])
  useEffect (()=>{
          generate()
  },[length,numberAllowed,alphaAllowed,generate])
  return (
    <>
    <h1 className='text-black bg-green-400  pt-4 text-center text-5xl h-20 font-bold'>Password Generation</h1>
    <div className='max-w-screen-md mx-auto my-10  p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg'>
    <div className='flex'>
    <input className='w-full px-4 py-2 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300'
     type='text'
     value={password}
     readOnly/>
     <button className=' ml-3 flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out'
     onClick={()=>{
      navigator.clipboard.writeText(password).then(()=>{
        alert('copied to clipboard .')
      })}}>
      get</button>
      </div>
      <div className='flex  gap-3 my-4'>
          <input className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
          name='range'
          type='range'
          onChange={(e)=>setLenght(e.target.value)}
          value={length}
          max={25}
          min={9}
          />
          <label htmlFor="range">{length}</label>
          
      <input type='checkbox' defaultChecked={numberAllowed} id="numberInput"
      onChange={()=>{
          setnumberAllowed((prev)=>!prev)
      }}/>
      <label htmlFor='numberInput'>Number</label>
      <input type='checkbox' defaultChecked={alphaAllowed} id="alphaInput"
      onChange={()=>{
          setAlphaAllowed((prev)=>!prev)
      }}
      />
      <label className='h-5' htmlFor='alphaInput'>Symbol</label>
      </div>
    </div>
    </>
  )
}

export default App