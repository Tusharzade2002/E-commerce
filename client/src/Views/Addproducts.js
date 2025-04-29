import React, { useState } from "react";
import produtsimg from "../Assets/Productpresentation-rafiki.png";
import axios from "axios";
import toast from "react-hot-toast";
function Addproducts() {
  const [addproduct, setaddproduct] = useState({
    name: "",
    shortDescription: "",
    longDescription: "",
    price: "",
    currentPrice: "",
    category: "",
    tags: "",
    images: [],
  });
  const addproducts = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/products",
        addproduct
      );
      toast.success("Product Addedd");
      return response.data;
      setaddproduct({
        name: "",
        shortDescription: "",
        longDescription: "",
        price: "",
        currentPrice: "",
        category: "",
        tags: "",
        images: [],
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="bg-blue-100 flex flex-col justify-center  md:flex-row  md:justify-evenly items-center ">
      <div className=" w-[50vw] ">
        <img className="h-[100%] w-[100%]" src={produtsimg} />
      </div>
      <form onSubmit={addproducts}>
        <div className="flex flex-col justify-center mb-7 items-center h-[100%] w-[100%]">
          <div className="mb-4 flex  justify-center items-center ">
            <label
              className="block text-gray-700 text-lg me-5 font-bold mt-0.3 "
              htmlFor="productName"
            >
              Product Name :
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Product Name"
              value={addproduct.name}
              onChange={(e)=>{
                 setaddproduct({...addproduct,[e.target.name]:e.target.value})
              }}
            />
          </div>

          <div className="mb-4 flex  justify-center items-center ">
            <label
              className="block text-gray-700 text-lg me-5 font-bold mt-0.3"
              htmlFor="productName"
            >
              Short Description :
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="shortDescription"
              type="text"
              placeholder="Short Description"
              value={addproduct.shortDescription}
              onChange={(e)=>{
                 setaddproduct({...addproduct,[e.target.name]:e.target.value})
              }}
            />
          </div>
               
          <div className="mb-4 flex  justify-center items-center">
            <label
              className="block text-gray-700 text-lg me-5 font-bold mt-0.3"
              htmlFor="productName"
            >
              long Description :
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="longDescription"
              type="text"
              placeholder="long Description"
              value={addproduct.longDescription}
              onChange={(e)=>{
                 setaddproduct({...addproduct,[e.target.name]:e.target.value})
              }}
            />
          </div>

          <div className="mb-4 flex  justify-center items-center">
            <label
              className="block text-gray-700 text-lg me-5 font-bold mt-0.3"
              htmlFor="productName"
            >
              Price :
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="text"
              placeholder="price"
              value={addproduct.price}
              onChange={(e)=>{
                 setaddproduct({...addproduct,[e.target.name]:e.target.value})
              }}
            />
          </div>

          <div className="mb-4 flex  justify-center items-center">
            <label
              className="block text-gray-700 text-lg me-5 font-bold mt-0.3"
              htmlFor="productName"
            >
              Current Price :
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="currentPrice"
              type="text"
              placeholder="Current Price"
              value={addproduct.currentPrice}
              onChange={(e)=>{
                 setaddproduct({...addproduct,[e.target.name]:e.target.value})
              }}
            />
          </div>

          <div className="mb-4 flex  justify-center items-center">
            <label
              className="block text-gray-700 text-lg me-5 font-bold mt-0.3"
              htmlFor="productName"
            >
              Category :
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              type="text"
              placeholder="Category"
              value={addproduct.category}
              onChange={(e)=>{
                 setaddproduct({...addproduct,[e.target.name]:e.target.value})
              }}
            />
          </div>

          <div className="mb-4 flex  justify-center items-center">
            <label
              className="block text-gray-700 text-lg me-5 font-bold mt-0.3"
              htmlFor="productName"
            >
              tags :
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tags"
              type="text"
              placeholder="tags"
              value={addproduct.tags}
              onChange={(e)=>{
                 setaddproduct({...addproduct,[e.target.name]:e.target.value})
              }}
            />
          </div>
          <div className="mb-4 flex  justify-center items-center">
            <label
              className="block text-gray-700 text-lg me-5 font-bold mt-0.3"
              htmlFor="productName"
            >
              images :
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="images"
              type="text"
              placeholder="Images"
            />
          </div>
          <button
            className="bg-blue-600 px-5 py-1 rounded-sm mt-5"
            type="submit"
          >
            {" "}
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addproducts;
