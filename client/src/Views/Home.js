import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast,{Toaster} from 'react-hot-toast';
import Productcard from '../Component/Productcard';


function Home() {
  const [products ,setproducts]=useState([]);
    const loadproducts=async()=>{
try{ 
      const response=await axios.get(`${process.env.REACT_APP_API_URL}/products`);
      console.log(response.data.data)
      setproducts(response.data.data)
    }catch(error){
      toast.error(error.response.data.message)
    }
  }
    useEffect(()=>{
      loadproducts()
    },[])
  return (
    <div>
      Home
      <div className='flex flex-wrap justify-center'>
      {products.map((product)=>{
        return (<Productcard key={product._id} {...product}/>)
      })}
        </div>
      
      <Toaster/>
    </div>
  )
}

export default Home