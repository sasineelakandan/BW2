import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[tasks,setTasks]=useState([])
  const[task,setTask]=useState('')

  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem('tasks'))||[]
    setTasks(data)
  },[])
  
  useEffect(()=>{
    if(tasks.length>0){
      localStorage.setItem('tasks',JSON.stringify(tasks)) 
    }

  },[tasks])

  const addtask=()=>{

    if(task.trim()!=''){
      setTasks([...tasks,{text:task,itemChecked:false}])
      setTask('')
    }
  }

 

  function handledelete(index){
    setTasks(
      tasks.filter((val,i)=>index!=i)
    )
  }
 function handleedit(index){
   
   const editedtask= tasks.find((val,i)=>i===index)

   const newTask=prompt(editedtask.text)

  
    
     if(newTask!=null){
      const updatedData=tasks.map((val,i)=>{
        return i===index?{...val,text:newTask}:val
      })
      setTasks(updatedData)
     }

    
   
   
 }
  return (
    <>
    
    </>
  )
}

export default App
