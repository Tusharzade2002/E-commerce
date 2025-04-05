import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Home() {
  const [product ,setproducts]=useState([]);


    const loadproducts=async()=>{

      const response=await axios.get(`${process.env.REACT_APP_API_URL}/products`);
      console.log(response.data.data)
    }
   
    useEffect(()=>{
      loadproducts()
    },[])
  return (
    <div>Home</div>
  )
}

export default Home