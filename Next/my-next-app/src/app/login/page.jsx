import React from 'react'
import { useForm } from 'react-hook-form'
const login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });
  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center',marginTop:'100px'}}>
    
   
    <div style={{border:'2px solid black',width:'300px',display:'flex',flexDirection:'column',gap:'20px',padding:'20px',borderRadius:'10px'}}>
<form onSubmit={handleSubmit(onsubmit)}>
    <h1 style={{textAlign:'center',fontWeight:'bold',height:'10px'}}> Sign up</h1>
      <label style={{  display:'flex',flexDirection:'column',gap:'5px'}}>
        Name:
         <input  {...register('name',{required:'name is requird'})} style={{padding:'10px',display:'flex',flexDirection:'column',gap:'5px',borderRadius:'10px', border:'2px solid black'}}  type="text" />
         </label>
         <label style={{  display:'flex',flexDirection:'column',gap:'5px'}}>
        Email:
         <input {...register('email',{required:'email is requird'})} style={{padding:'10px',display:'flex',flexDirection:'column',gap:'5px',borderRadius:'10px', border:'2px solid black'}}  type="text" />
         </label>
         <label style={{  display:'flex',flexDirection:'column',gap:'5px'}}>
        Phone:
         <input {...register('phone',{required:'phone is requird'})} style={{padding:'10px',display:'flex',flexDirection:'column',gap:'5px',borderRadius:'10px', border:'2px solid black'}}  type="text" />
         </label>
         <label style={{  display:'flex',flexDirection:'column',gap:'5px'}}>
        password:
         <input {...register('password',{required:'password is requird'})}style={{padding:'10px',display:'flex',flexDirection:'column',gap:'5px',borderRadius:'10px', border:'2px solid black'}}  type="text" />
         </label>
         <label style={{  display:'flex',flexDirection:'column',gap:'5px'}}>
        confirmPassword:
         <input {...register('confirmPassword',{required:'confirmPassword is requird'})} style={{padding:'10px',display:'flex',flexDirection:'column',gap:'5px',borderRadius:'10px', border:'2px solid black'}}  type="text" />
         </label>

         <div  style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
         <button style={{backgroundColor:'black',padding:'10px',cursor:'pointer',borderRadius:'10px', border:'2px solid black',color:'white',fontSize:'16px', fontWeight: "bold"}}>Signup</button>
         </div>
         </form>
      </div>
  
      
    </div>
   
  )
}

export default login