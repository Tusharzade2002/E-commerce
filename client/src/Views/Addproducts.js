import React from 'react'
import produtsimg from "../Assets/Productpresentation-rafiki.png"
function Addproducts() {
  return (
    <div className='bg-blue-100 flex flex-col justify-center  md:flex-row  md:justify-evenly items-center '>
        <div className=' w-[50vw] '>
            <img className='h-[100%] w-[100%]' src={produtsimg}/>
        </div>
        <form>
            <div className='flex flex-col justify-center mb-7 items-center h-[100%] w-[100%]'>

              <div className="mb-4 flex  justify-center items-center ">    
                <label className="block text-gray-700 text-lg me-5 font-bold mt-0.3 " htmlFor="productName">
                    Product Name :
                </label>
                <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Product Name" />        
              </div>

              <div className="mb-4 flex  justify-center items-center ">    
                <label className="block text-gray-700 text-lg me-5 font-bold mt-0.3" htmlFor="productName">
                   Short Description :
                </label>
                <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shortDescription" type="text" placeholder="Short Description" />        
              </div>

              <div className="mb-4 flex  justify-center items-center">    
                <label className="block text-gray-700 text-lg me-5 font-bold mt-0.3" htmlFor="productName">
                    long Description :
                </label>
                <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="longDescription" type="text" placeholder="long Description" />        
              </div>

              <div className="mb-4 flex  justify-center items-center">    
                <label className="block text-gray-700 text-lg me-5 font-bold mt-0.3" htmlFor="productName">
                    Price :
                </label>
                <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="price" />        
              </div>

              <div className="mb-4 flex  justify-center items-center">    
                <label className="block text-gray-700 text-lg me-5 font-bold mt-0.3" htmlFor="productName">
                    Current Price :
                </label>
                <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="currentPrice" type="text" placeholder="Current Price" />        
              </div>

              <div className="mb-4 flex  justify-center items-center">    
                <label className="block text-gray-700 text-lg me-5 font-bold mt-0.3" htmlFor="productName">
                Category :
                </label>
                <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category" type="text" placeholder="Category " />        
              </div>

              <div className="mb-4 flex  justify-center items-center">    
                <label className="block text-gray-700 text-lg me-5 font-bold mt-0.3" htmlFor="productName">
                    tags :
                </label>
                <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tags" type="text" placeholder="tags" />        
              </div>
              <div className="mb-4 flex  justify-center items-center">    
                <label className="block text-gray-700 text-lg me-5 font-bold mt-0.3" htmlFor="productName">
                    images :
                </label>
                <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="images" type="text" placeholder="Images" />        
              </div>
            </div>
        </form>
    </div>
  )
}

export default Addproducts