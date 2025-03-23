import {createSlice} from '@reduxjs/toolkit'

const storedUser=JSON.parse(localStorage.getItem('user'))||{
   username:null,
   email:null,
   phone:null,

}


const userSlice=createSlice({
    name:'user',
    initialState:storedUser,
    reducers:{setUser:(state,action)=>{
    
      state.username=action.payload.username
      state.email=action.payload.email
      state.phone=action.payload.phone
      localStorage.setItem('user',JSON.stringify(state))
      
    }}
    
    
})

export const{setUser}=userSlice.actions

export default userSlice.reducer