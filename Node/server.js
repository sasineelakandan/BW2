

import express from 'express'
import fs from 'fs'

const app=express()


app.get('/',async(req,res,next)=>{
  try{

  const error= new Error('somthiing went wrong')
  error.status=400
  next(error)
     
  }catch(err){
    console.log('new',err)
    next(err)
  }
})
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
});

app.listen(8001,()=>{
    console.log('server start')
})
