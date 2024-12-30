import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app =express();
dotenv.config();
app.use(cors());


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

app.get("*",(req,res)=>{
    res.status(404).json({
        success:false,
        message:"Route Not Found"
    })
})
const PORT=process.env.PORT || 5000 
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
})