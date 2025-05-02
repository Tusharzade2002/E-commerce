import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CircleUserRound,ShoppingCart } from "lucide-react";
import Productcard from "../Component/Productcard";
import { Link } from "react-router-dom";
import ShowProduts from "./ShowProduts";
function Home() {
  const [products, setproducts] = useState([]);
  const [search, setSearch] = useState("");
  const loadproducts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/products?limit=100&search=${search}`
      );
      // console.log(response.data.data)
      setproducts(response.data.data);
      // console.log(response.data);
    } catch (error) {
     console.log(error);
     
      
    }
  };
  useEffect(() => {
    loadproducts();
  }, [search]);
  const images = [
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/544c2e1eca31c88c.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/47267594f95ee09b.jpeg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/7defc0ec271994c1.jpg?q=20"
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

   const [isopen,setisopen]=useState(false);

   const handleopen=()=>{
       setisopen(!isopen)
   }


  return (
 
    <div className="relative">
<nav class="bg-blue-600 shadow-md px-4 py-3 fixed w-full z-10 ">
  <div class="max-w-7xl mx-auto flex items-center justify-between">
    
    <div class="text-xl font-bold text-white">
      Ecommerce
    </div>

    <div class="flex-1 mx-4 hidden sm:block relative">
      <span class="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
        </svg>
      </span>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
            onChange={(e) => setSearch(e.target.value)}
        class="w-[80%] pl-10  py-2  rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
      />
    </div>

    <div class="flex items-center space-x-4">
    <Link to="/user/cart">
      <button class="text-white">
        <ShoppingCart />
      </button>
      </Link>
      {
        isopen && (
                 <div className="bg-white flex flex-col absolute right-[35px] top-[50px] rounded-md me-6">
                   <Link to="/login" className="text-center text-xl px-5 m-1 hover:text-purple-700"> <button>Login</button></Link>
                   <hr></hr> 
                   <Link to="/signup" className="text-center text-xl px-5 m-1 hover:text-purple-700"> <button>Registration</button></Link> 
                 </div>
        )
      }
      <Link to="">
     
      <button class="text-white" onClick={handleopen}>
        <CircleUserRound />
      </button>
      
      </Link>
    </div>
    
  </div>
</nav>
 <ShowProduts/>

      <div >
      <img
        src={images[currentIndex]}
        alt="header"
        className="w-full h-[250px] object-contain object-center block mx-auto"
      />
      </div>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => {
          return <Productcard key={product._id} {...product} />;
        })}
      </div>

      <Toaster />
    </div>
  );
}

export default Home;
