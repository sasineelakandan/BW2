import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
 email:{
    type:String,
    require:true
 },
 password:{
    type:String,
    require:true
 }

    
},
{timestamps:true})

const user= mongoose.model('User',userSchema)

export default user