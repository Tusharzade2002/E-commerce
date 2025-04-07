import React from 'react'
import productimage from '../Assets/51fXuiChdJL._AC_UF1000,1000_QL80_.jpg'
function Productcard({name,price,currentprice,shortDescription}) {
  
   const shortText=(text,maxlength=30)=>{
        if(!text){
          return""
        }
        if(text<=maxlength){
          return text;
        }
        let textshort = text.substring(0,maxlength-3)
          textshort += "...";
          return textshort;
        
   }

  return (
    <div className="bg-white shadow-lg rounded-lg  m-5 px-10 py-5 max-w-[270px] relative">
      <img className='w-full h-40 object-contain object-center' src={productimage}/>
        <h1 className='text-2xl font-bold'>{shortText(name)}</h1>
        <h1 className='text-sm'>{shortDescription}</h1>
      </div>
  )
}

export default Productcard