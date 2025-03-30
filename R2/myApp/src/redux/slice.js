import {createSlice} from '@reduxjs/toolkit'

const initialState={
    name:null,
    age:null
}


const userSlice=createSlice({
  name:'userSlice',
  initialState:initialState,
  reducers:{
    setUser:(state,action)=>{
        
      state.name=action.payload.name
      state.age=action.payload.age
    }
  }

})

export const {setUser}=userSlice.actions

export default userSlice.reducer