import React, { useState } from 'react'
import toast ,{Toaster} from 'react-hot-toast'
import axios from 'axios'
import Input from '../Component/Input'
import Button from '../Component/Button'
import {Link}from'react-router-dom'
function Signup() {
       const [SignupData,setSignupData]=useState({
        name:"",
        email:"",
        phoneNo:"",
        address:"",
        password:"",
        repassword:""
       })

        const [error,setError] = useState("")
             
       const processSignup=async()=>{
        toast.loading("please wait")

        try{
             const response = await axios.post(`http://localhost:8000/signup`,SignupData)
             toast.dismiss()
             toast.success("signup successfully,please login")
             setSignupData({
              name:"",
              email:"",
              phoneNo:"",
              address:"",
              password:"",
              repassword:""
             })

             setTimeout(()=>{
                     window.location.href="/login"
             },3000)
        } catch(err){
          toast.dismiss()
          setError(err?.response?.data?.message)
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
        setError("");
       }}
      />
      <Input label={"Email"}
       placeholder={"email"}
       val={SignupData.email}
       onChange={(val)=>{
        setSignupData({...SignupData,email:val})
        setError("")
       }}
      />      
      <Input label={"Phone"}
      placeholder={"Phone"}
      val={SignupData.phoneNo}
      onChange={(val)=>{
       setSignupData({...SignupData,phoneNo:val})
       setError("")
      }}
     />
           <Input label={"Address"}
       placeholder={"Address"}
       val={SignupData.address}
       onChange={(val)=>{
        setSignupData({...SignupData,address:val})
        setError("")
       }}
      />
            <Input label={"Password"}
       placeholder={"Password"}
       type='password'
       val={SignupData.password}
       onChange={(val)=>{
        setSignupData({...SignupData,password:val})
        setError("")
       }}
      />
            <Input label={"Re-password"}
       placeholder={"Re-password"}
       type='password'
       val={SignupData.repassword}
       onChange={(val)=>{
        setSignupData({...SignupData,repassword:val})
        setError("")
       }}
      />

      <p className='text-red-500 text-sm mt-2'>{error}</p>
      <p>
        Already have an account ? <Link to="/login" className='text-blue-500'>Login</Link>
      </p>

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