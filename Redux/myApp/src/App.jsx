import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch,useSelector } from 'react-redux'
import {increment,decrement} from './redux/slice'
import './App.css'

function App() {
  
const count=useSelector((state)=>state.counter.count)
const dispatch=useDispatch()
  return (
    <>
    <button onClick={()=>dispatch(increment())} >inc</button>
    <p>{count}</p>
    <button onClick={()=>dispatch(decrement())} >dec</button>
    </>
  )
}

export default App
