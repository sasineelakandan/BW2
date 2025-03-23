import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'
function reducerfn(state,action){
   switch(action.type){
    case 'increment':
      return {count:state.count+1}

    case 'decrement':
      return {count:state.count-1}
    default :
       return state
   }
}

function App() {
  const instialState={count:0}
  const [state, dispatch]=useReducer(reducerfn,instialState)

  return (
    <>
     <button onClick={()=>{dispatch({type:'increment'})}} >inc</button> 
     <p>{Math.max(state.count,0)}</p>
     <button  onClick={()=>{dispatch({type:'decrement'})}}>dec</button>
    </>
  )
}

export default App
