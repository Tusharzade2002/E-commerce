import React, { useEffect, useState } from 'react'
import {GetCurrentUser,Logout} from '../Util/Common'
import {Link} from 'react-router-dom'
import { ShoppingCart } from "lucide-react";

import {Mail as MainIcon,
  IdCard as IdCardIcon,
  LogOut as  LogOutIcon,
  KeySquare as RoleIcon,
  Truck as TruckIcon,
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
 else{
  toast.error("please login to access this page");
  setTimeout(() => {
     window.location.href="/login"
  }, 3000);
 }
},[])

  return (
    <div >
        <h1 className='text-center text-2xl py-4'>Dashboard</h1>
        <div className='bg-white w-[500px] mx-auto p-10 rounded-lg shadow-lg mt-10'>
        <div className="flex mb-10">
          <Link
            to="/user/orders"
            className="block text-center text-md mx-1 bg-blue-100 p-2"
          >
            <TruckIcon className="mx-auto inline" size={24} />
            <span className="ms-2">My Orders</span>
          </Link>

          <Link
            to="/"
            className="block text-center text-md mx-1 bg-blue-100 p-2"
          >
            <TruckIcon className="mx-auto inline" size={24} />
            <span className="ms-2">Products</span>
          </Link>

          <Link
            to="/user/cart"
            className="block text-center text-md mx-1 bg-blue-100 p-2"
          >
            <ShoppingCart  className="mx-auto inline" size={24} />
            <span className="ms-2">Cart</span>
          </Link>
        </div>

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