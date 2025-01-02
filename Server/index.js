import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app =express();
dotenv.config();
app.use(express.json());
app.use(cors());
import User from './Models/Users.js'

// connect to mongoDB
const connectDB  =async()=>{
    const conn=await mongoose.connect(process.env.MONGO_URl);
    if(conn){
        console.log("MongoDB is connected successfully");
    }
}

app.get("/health",(req,res)=>{
    res.json({
        success:true,
        message:"server is running",
    })
})

app.post("/signup" ,async(req,res)=>{
    const {name ,email,phoneNo,address,password,repassword} =req.body;
      
     if(password !== repassword){
        return res.status(400).json({
            success:false,
            message:"password does not match",
        })
     }

     if(!name){
        return res.status(400).json({
            success:false,
            message:"name is required",
        })
     }

     if(!email){
        return res.status(400).json({
             success:false,
             message:"email is required",
        })
     }

     if(!phoneNo){
        return res.status(400).json({
            success:false,
            message:"Phone number is required",
        })
     }
     if(!address){
        return res.status(400).json({
            success:false,
            message:"address is required"
        })
     }
   try{
         const newUser = new User({
        name,
        email,
        phoneNo,
        address,
        password,
        repassword,
        })
           const SavedUser = await newUser.save();
           return res.json({
            success:true,
            message:"signup successfully",
            data:SavedUser
           })
    }   
    catch(error){
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }

})

app.get("*",(req,res)=>{
    res.status(404).json({
        success:false,
        message:"Route Not Found"
    })
})
const PORT=process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
})