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
 export {jwtVerifyMiddleware}