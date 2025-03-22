import express from 'express'
import cors from 'cors'
import User from './model/user.js'
import dotenv from 'dotenv'
import { connectDb } from './db.js'


dotenv.config()

const app=express()
const router=express.Router()
app.use(cors('*'))

connectDb()
app.use(express.json())

router.post('/login',async(req,res)=>{
  try{
     const {email,password}=req.body

     const user=await User.create({
        email,
        password
     })

     await user.save()

     const findUser=await User.findOne({email})
     res.status(200).send(findUser)

  }catch(err){
    console.log(err)
  }
})

app.use('/api/user',router)


app.listen(8001,()=>{console.log('server Strart')})