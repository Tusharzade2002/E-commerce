import React from 'react'

function Navbar() {
  return (
    <div>
        <div className="flex justify-center py-10">
                <input
                  type="text"
                  placeholder="Search products"
                  className="w-2/3 p-2 border border-gray-300 rounded-md text-2xl active:outline-none focus:outline-none"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
    </div>
  )
}

export default Navbar