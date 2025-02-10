import React, { useState } from 'react'
import toast ,{Toaster} from 'react-hot-toast'
import axios from 'axios'
import Input from '../Component/Input'
import Button from '../Component/Button'
function Signup() {
       const [SignupData,setSignupData]=useState({
        name:"",
        email:"",
        phoneNo:"",
        address:"",
        password:"",
        repassword:""
       })

             
       const processSignup=async()=>{
        try{
             const response = await axios.post(`http://localhost:8000/signup`,SignupData)
             console.log(response);
             toast.success("signup successfully")
        } catch(err){
          console.log(err.response);
          toast.error(err?.response?.data?.message)
        }
       }
  return (
    <div className='bg-zinc-100 min-h-screen flex flex-col items-center  justify-center px-5'>
    <h1 className='text-3xl text-gray-600 mb-3'>Signup</h1>
    <div className='w-full md:w-[400px] bg-white rounded-2xl shadow-lg hover:shadow-2xl px-6 py-2 delay-150'>
     
      <Input label={"Name"}
       placeholder={"name"}
       val={SignupData.name}
       onChange={(val)=>{
        setSignupData({...SignupData,name:val})
       }}
      />
      <Input label={"Email"}
       placeholder={"email"}
       val={SignupData.email}
       onChange={(val)=>{
        setSignupData({...SignupData,email:val})
       }}
      />      
      <Input label={"Phone"}
      placeholder={"Phone"}
      val={SignupData.phoneNo}
      onChange={(val)=>{
       setSignupData({...SignupData,phoneNo:val})
      }}
     />
           <Input label={"Address"}
       placeholder={"Address"}
       val={SignupData.address}
       onChange={(val)=>{
        setSignupData({...SignupData,address:val})
       }}
      />
            <Input label={"Password"}
       placeholder={"Password"}
       type='password'
       val={SignupData.password}
       onChange={(val)=>{
        setSignupData({...SignupData,password:val})
       }}
      />
            <Input label={"Re-password"}
       placeholder={"Re-password"}
       type='password'
       val={SignupData.repassword}
       onChange={(val)=>{
        setSignupData({...SignupData,repassword:val})
       }}
      />
      <div className='flex  justify-around my-2'>
        <Button label={"Cancel"}
           varient={"danger"}
           onClick={()=> window.location.href = "/"}
         />
          <Button label={"Signup"}
           varient={"primary"}
           onClick={()=> processSignup()}
         />
      </div>
   </div>
   <Toaster />
   </div>
  )
}

export default Signup