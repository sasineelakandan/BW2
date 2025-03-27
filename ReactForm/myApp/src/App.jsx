import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useForm} from'react-hook-form'
import './App.css'

function App() {
  const {register,handleSubmit,formState:{errors},setFocus}=useForm({mode:'onBlur'})

  const onsubmit=(data)=>{
    console.log(data)
  }

  return (
    <>
    <form onSubmit={handleSubmit(onsubmit)}>
    <div style={{flexDirection:'column',padding:'20px',gap:'10px', display:'flex'}}>
     <label style={{flexDirection:'column',padding:'10px',gap:'5px'}} htmlFor="">
      email:
     <input {...register('email',{required:'email is required'})} type="email" />
     {errors.email && <p style={{color:'red'}} >{errors.email.message}</p>}
     </label>
     <label style={{flexDirection:'column',padding:'10px',gap:'5px'}} htmlFor="">
      password:
     <input {...register('password',{required:'password is required'})} type="password" />
     {errors.password && <p style={{color:'red'}} >{errors.password.message}</p>}
     </label>
     </div>
     <button type='submit'>login</button>
    </form>
    </>
  )
}

export default App
