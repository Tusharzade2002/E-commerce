import React from 'react'

function Input({label,onChange,placeholder="",val,type="text"}) {
   const inputid=`input-${label}`

  return (
    
        <div>
            <label htmlFor={inputid}>{label}:</label>
            <input type={type} 
              placeholder={placeholder}
              id={inputid}
              className='px-2 py-1 mb-2 border border-gray-300 rounded-md w-full focus:outline-none'
               value={val}
               onChange={(e)=> onChange(e.target.value)}
            />
        </div>
    
  )
}

export default Input