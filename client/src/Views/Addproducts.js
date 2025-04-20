import React from 'react'

function Addproducts() {
  return (
    <div>
        <form>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
                    Product Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="productName" type="text" placeholder="Product Name" />        
            </div>
        </form>
    </div>
  )
}

export default Addproducts