import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app =express();
dotenv.config();
app.use(express.json());
app.use(cors());

import {PostSignup,postLogin}  from './Controller/User.js';
import { postProduct ,getProducts} from './Controller/Product.js';
import {jwtVerifyMiddleware,CheckRoleMiddleware} from './MiddleWare/auth.js'
import {PostOrder , putOrder} from './Controller/Order.js';


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

app.post("/signup" ,PostSignup );
app.post("/login",postLogin);
app.post("/products",jwtVerifyMiddleware,CheckRoleMiddleware,postProduct)
app.get("/products",getProducts)
app.post("/order",jwtVerifyMiddleware,PostOrder)
app.put("/order/:id",jwtVerifyMiddleware,putOrder)
// app.get("/test",(req,res)=>{
//       const token =req.headers.authorization;
//       if(!token){
//         return res.status(401).json({
//                 success:false,
//                 message:"unauthorized"
//         })
//       }     

//       const tokenvalue=token.split(" ")[1];

//       try{
//         const decoded =jwt.verify(tokenvalue,process.env.JWT_SECRET);

//         if(decoded){
//             res.json({
//                 success:true,
//                 message:"Authorized",
//                 data:decoded
//             })
//           }
//         }catch(error){
//             res.status(401).json({
//                 success:false,
//                 message:"Unauthorized"
//             })
//         }
// })




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