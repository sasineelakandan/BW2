import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [time, setTime] = useState(0)
  const [isRunning,setRunning]=useState(false)

  useEffect(()=>{
    let timer
   
    if(isRunning){
      timer=setInterval(()=>{
        setTime((prev)=>prev+1)
     },1000)
    }
    
    return ()=>clearInterval(timer)
  },[isRunning])

  return (
    <>
      <h1>{time}</h1>
      <button onClick={()=>{setRunning((prev)=>!prev)}} >
        {isRunning?'pause':'start'}
      </button>
      <button onClick={()=>{setRunning(false),setTime(0)}}>reset</button>
    </>
  )
}

export default App
