import React, { useEffect, useState } from 'react'
import {GetCurrentUser} from '../Util/Common'
import {Mail as MainIcon,
  IdCard as IdCardIcon,
  KeySquare as RoleIcon
} from 'lucide-react'

function Dashboard() {
  const [user,SetUser]=useState({
    name:"",
    email:"",
    role:""
  })
useEffect(()=>{
 const user= GetCurrentUser();
 if(user){
  SetUser(user)
 }
},[])
  return (
    <div >
        <h1 className='text-center my-3 text-2xl'>Dashboard</h1>
        <div className='bg-white w-[500px] mx-auto p-10 rounded-lg shadow-lg'>
          <p><IdCardIcon className='inline mx-2'/>{user.name}</p>
          <p> <MainIcon className='inline mx-2' />{user.email}</p>
          <p><RoleIcon className='inline mx-2'/>{user.role}</p>
          
        </div>
    </div>
  )
}

export default Dashboard