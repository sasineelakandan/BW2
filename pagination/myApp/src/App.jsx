import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[data,setData]=useState([])
  const [currentpage,setCurrentPage]=useState(1)
  const itrmperPage=10

  const start=(currentpage-1)*itrmperPage
  const end=start+itrmperPage
  const currentItem=data.slice(start,end)

  useEffect(()=>{
   async function fetchData(){
    try{
      const response=await fetch('https://jsonplaceholder.typicode.com/posts')
      const  data=await response.json()
      setData(data)
    }catch(err){
      console.log(err)
    }
   }
   fetchData()
  },[])



  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px',borderRadius:"20px" ,display:'flex',flexWrap:'wrap',gap:'10px'}}>
  <div >
  {currentItem.map((val)=>{
    return <div key={val.id} style={{border:'2px solid white ',backgroundColor:'white',padding:'10px',textAlign:'center',borderRadius:"20px",margin:'10px',color:'black'}} >
       <p>{val.id}</p>
      <p>{val.title}</p>
      <p>{val.body}</p>
     
  </div>

   })}
  </div>

   <div>
    <button onClick={()=>{setCurrentPage((prev)=>Math.max(prev-1,1))}} disabled={currentpage===1} > prev</button>
    <span>{currentpage}</span>
    <button onClick={()=>{setCurrentPage((prev)=>Math.min(prev+1,data.length/itrmperPage))}}  disabled={currentpage===data.length/itrmperPage} >Next</button>
   </div>
     
    </div>
  )
}

export default App
