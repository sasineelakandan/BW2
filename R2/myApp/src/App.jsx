
import {useDispatch,useSelector}from 'react-redux'
import './App.css'
import { setUser } from './redux/slice'

import {lazy,Suspense} from 'react'

const LazyComponent=lazy(()=>import('./Lazy'))

function App() {


  const dispatch=useDispatch()
  const user=useSelector((state)=>state.user)
  
 const data={
  name:'sasi',
  age:'25'
 }
 function saveData(){
   dispatch(setUser(data))
 }
 console.log(user)
  return (
    <>
    <Suspense fallback={<p>loading</p>}>
    <LazyComponent/>
    </Suspense>
    </>
  )
}

export default App
