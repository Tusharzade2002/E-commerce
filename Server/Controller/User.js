import User from '../Models/Users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const PostSignup =async(req,res)=>{
    const {name ,email,phoneNo,address,password,repassword} =req.body;
      
     if(!password){
        return res.status(400).json({
            success:false,
            message:"password is required"
        })
     }
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

     const salt =bcrypt.genSaltSync(10);
   try{
         const newUser = new User({
        name,
        email,
        phoneNo,
        address,
        password: bcrypt.hashSync(password,salt),
        repassword,
        })
           const SavedUser = await newUser.save();
           return res.json({
            success:true,
            message:"signup successfully",
            data:{
                name:SavedUser.name,
                email:SavedUser.email,
                phoneNo:SavedUser.phoneNo,
                address:SavedUser.address,
            }
           })
    }   
    catch(error){
        console.log(error);
        if(error.message.includes("duplicate key error")){
            return res .status(400).json({
                success:false,
                message:`${Object.keys(error.keyValue)} ${Object.values(error.keyValue)} Already exist`
            })
        }
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }

}

const postLogin =async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
               res.status(400).json({
                 success:false,
                 message:"email and password are required",
               })
    }
  
     const user =await User.findOne({email});

     if(!user){
        return res.status(400).json({
            success:false,
            message:"Please signup first before logging in"
        })
     }

     const ispasswordmatch = bcrypt.compareSync(password,user.password);
     if(ispasswordmatch){
       const jwtToken =jwt.sign({email:user.email,role:user.role,id:user._id},process.env.JWT_SECRET )
        res.setHeader("Authorization",`Bearer ${jwtToken}`)
        return res.json({
            success:true,
            message:"login sucessfully",
            token:jwtToken
        })
     }else{
        return res.status(400).json({
            success:false,
            message:"Invalid Credentials"
        })
     }
}
export  {PostSignup ,postLogin}