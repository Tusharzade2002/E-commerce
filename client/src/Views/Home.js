import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast,{Toaster} from 'react-hot-toast';
import Productcard from '../Component/Productcard';
import ImgHeader from '../Assets/Ecommerce checkout laptop-rafiki.png'

function Home() {
  const [products ,setproducts]=useState([]);
  const [search, setSearch] = useState("");
    const loadproducts=async()=>{
try{ 
      const response=await axios.get(`${process.env.REACT_APP_API_URL}/products?limit=100&search=${search}`);
      // console.log(response.data.data)
      setproducts(response.data.data)
      // console.log(response.data);
    }catch(error){
      toast.error(error.response.data.message)
    }
  }
    useEffect(()=>{
      loadproducts();
    },[search])
  return (
    <div>
      
      
      <img
        src={ImgHeader}
        alt="header"
        className="h-96 object-cover object-center block mx-auto"
      />
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