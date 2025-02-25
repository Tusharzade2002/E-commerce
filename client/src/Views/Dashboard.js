import React, { useEffect, useState } from 'react'
import {GetCurrentUser,Logout} from '../Util/Common'
import {Mail as MainIcon,
  IdCard as IdCardIcon,
  KeySquare as RoleIcon,
  LogOut as  LogOutIcon
} from 'lucide-react'

import toast ,{Toaster} from 'react-hot-toast'

const UseDetailRow =({icon , value})=>{
  return(
    <p className='flex items-center mb-4 text-xl'>
          {icon} <span className='ms-4'>{value}</span>
    </p>
  )
}

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
        <h1 className='text-center text-2xl py-4'>Dashboard</h1>
        <div className='bg-white w-[500px] mx-auto p-10 rounded-lg shadow-lg mt-10'>

               <UseDetailRow icon={<MainIcon/> } value={user.name} />
               <UseDetailRow icon={<IdCardIcon/> } value={user.email} />
               <UseDetailRow icon={<RoleIcon/> } value={user.role} />

           <button type='button' className='bg-red-500 p-1 rounded-full px-3 m-auto block' 
            onClick={()=>{
              toast.success("Logout successfully..")
              Logout()
            }}
           > Logout 
           <LogOutIcon  className='inline mx-2'/>
           </button>
        </div>
        <Toaster/>
    </div>
  )
}

export default Dashboard