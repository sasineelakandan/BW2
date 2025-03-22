import mongoose from 'mongoose'

import dotenv from 'dotenv'

dotenv.config()

export const connectDb=async()=>{
   try{
     const response= await mongoose.connect(process.env.MONGO_URI)
     if(response){
        console.log('mongodb atlas connected')
     }else{
        console.log('connecting proplem from db')
     }
   }catch(error){
    console.log(error)
   }
}