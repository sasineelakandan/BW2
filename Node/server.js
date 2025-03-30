import express from 'express'
import eventEmitter from 'events'
const app=express()
const emitter=new eventEmitter()


app.use((req,res,next)=>{
  if(req.method==='GET'){
    res.send('server blocked')
  }
  next()
})

app.get('/',(req,res)=>{
  console.log(req.query.a)
    console.log(req.query.b)
  res.send('hello world')
})

app.post('/name',(req,res)=>{
  res.send(req.headers.name)
})


app.listen(8001,()=>{
  console.log('server Started')
})