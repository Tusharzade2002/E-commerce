import React, { useState } from 'react'
import Input from '../Component/Input'
function Signup() {
       const [SignupData,setSignupData]=useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        password:"",
        repassword:""
       })


  return (
    <div className='bg-zinc-100 min-h-screen flex flex-col items-center  justify-center'>
    <h1 className=''>Signup</h1>
    <div className='w-[400px] h-[500px] bg-white rounded-2xl shadow-lg hover:shadow-2xl px-4 py-4 my-6 delay-150'>
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
      text={"number"}
      placeholder={"Phone"}
      val={SignupData.phone}
      onChange={(val)=>{
       setSignupData({...SignupData,phone:val})
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
       val={SignupData.password}
       onChange={(val)=>{
        setSignupData({...SignupData,password:val})
       }}
      />
            <Input label={"Re-password"}
       placeholder={"Re-password"}
       val={SignupData.repassword}
       onChange={(val)=>{
        setSignupData({...SignupData,repassword:val})
       }}
      />
   </div>
   </div>
  )
}

export default Signup