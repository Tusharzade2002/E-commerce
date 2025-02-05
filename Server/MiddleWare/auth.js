import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken'
const jwtVerifyMiddleware =async(req,res,next)=>{
    const jwtToken = req?.headers?.authorization?.split(" ")[1];
 
    if(!jwtToken){
     return res.json({
         success:false,
         message:"token is missing"
     })
    }

    try{
     const decoded = await jwt.verify(jwtToken , process.env.JWT_SECRET);
     req.user =decoded;
     next();
    }catch(error){
      res.status(400).json({
         success:false,
         message:error.message
     })
    }
 }

 const CheckRoleMiddleware =async(req,res,next)=>{
       const userRole =req?.user?.role;
       const Method =req.method;
       const path = req.path;
       console.log(userRole);
       console.log(path);
       console.log(Method);
    
       if(Method==='POST' && path=='/product'&& userRole!="admin"){
      return  res.status(403).json({
            success:false,
            message:"you are not authorize to add the products" 
        })
       }
           next();
 }
 export {jwtVerifyMiddleware,CheckRoleMiddleware}