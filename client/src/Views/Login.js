import React, { useEffect, useState } from 'react'
import toast ,{Toaster} from 'react-hot-toast'
import axios from 'axios'
import Input from '../Component/Input'
import Button from '../Component/Button'
import {Link}from'react-router-dom'
import { GetCurrentUser } from '../Util/Common'
function Login() {
       const [LoginData,setLoginData]=useState({
        name:"",
        email:"",
        phoneNo:"",
        address:"",
        password:"",
        repassword:""
       })

        const [error,setError] = useState("")
             
       const processLogin=async()=>{
        toast.loading("please wait")

        try{
             const response = await axios.post(`http://localhost:8000/login`,LoginData)
             toast.dismiss()
             toast.success("Login successfully")
             setLoginData({
              email:"",
              password:"",
             })

             localStorage.setItem("e-commerce-user-token" , response.data.token)
             localStorage.setItem("e-commerce-user-details" ,JSON.stringify(response.data.data))

     console.log(response);
     
             setTimeout(()=>{
                     window.location.href="/dashboard"
             },3000)
        } catch(err){
          toast.dismiss()
          setError(err?.response?.data?.message)
          toast.error(err?.response?.data?.message)
      
        }
       }

       useEffect(()=>{
        // check if already loged in 
            const currentUser =GetCurrentUser();
          
            if(currentUser){
                        toast.success("You have already loged in ..  Redirecting to dashboard...");
                        setTimeout(() => {
                          window.location.href="/dashboard";
                        }, 3000);
            }
       })
  return (
    <div className='bg-zinc-100 min-h-screen flex flex-col items-center  justify-center px-5'>
    <h1 className='text-3xl text-gray-600 mb-3'>Login</h1>
    <div className='w-full md:w-[400px] bg-white rounded-2xl shadow-lg hover:shadow-2xl px-6 py-2 delay-150'>
     
      <Input label={"Email"}
       placeholder={"email"}
       val={LoginData.email}
       onChange={(val)=>{
        setLoginData({...LoginData,email:val})
        setError("")
       }}
      />      
            <Input label={"Password"}
       placeholder={"Password"}
       type='password'
       val={LoginData.password}
       onChange={(val)=>{
        setLoginData({...LoginData,password:val})
        setError("")
       }}
      />
      <p className='text-red-500 text-sm mt-2'>{error}</p>
      <p>
        Don't have an account ? <Link to="/signup" className='text-blue-500'>Signup</Link>
      </p>

      <div className='flex  justify-around my-2'>
        <Button label={"Cancel"}
           varient={"danger"}
           onClick={()=> window.location.href = "/"}
         />
          <Button label={"Login"}
           varient={"primary"}
           onClick={()=> processLogin()}
         />
      </div>
   </div>
   <Toaster />
   </div>
  )
}

export default Login