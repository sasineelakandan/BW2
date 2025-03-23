import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slice.js'


const store=configureStore({
   reducer:{
    counter:counterReducer
   }
})


export default store