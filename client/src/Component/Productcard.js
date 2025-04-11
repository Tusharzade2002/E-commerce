import React, {  useState } from 'react'

import {
  ChevronLeft as LeftArrow,
  ChevronRight as RightArrow,
} from "lucide-react";
function Productcard({name,tags,currentPrice,Price,images,shortDescription}) {

  console.log(currentPrice);
  
 const shortText = (text, maxLength = 1) => {
  if (!text) {
    return " ";
  }
  if(text.length <= maxLength) {
    return text;
  }
  let shortText = text.substring(0, maxLength - 3);

  shortText += "...";

  return shortText;
};
         const [currentImage ,setCurrentImage]=useState([1])
  const handleleft=()=>{
              const currentindex=images.indexOf(currentImage);
              const newIndex=currentindex > 0 ? currentindex-1 : images.length-1;
              console.log(newIndex)
              setCurrentImage(images[newIndex]);
  }
  const handleright=()=>{
    const currentindex=images.indexOf(currentImage);
    const newIndex= currentImage < images.length-1 ? currentindex + 1  : 0;
    console.log(newIndex)
    setCurrentImage(images[newIndex]);
}

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden py-7  p-5 m-5 relative max-w-[270px] ">
     
        <LeftArrow
          size={54}
          className="absolute top-16 left-0 cursor-pointer p-0 m-0"
         onClick={handleleft}
        />
        <div className='flex justify-center bg-black w-50 my-2 mx-2 '>
        <img
          src={currentImage}
          alt={name}
          className=" w-[230px] object-contain object-center"
        />
        </div>
        <RightArrow
          size={54}
          className="absolute top-16 right-0 cursor-pointer"
         onClick={handleright}
        />
        <p>
        {tags.map((tag) => {
          return (
            <span className="bg-gray-200 text-gray-500 px-3 py-1 text-xs rounded-full mr-2">
              {tag}
            </span>
          );
        })}
      </p>
      <div className='px-3'>
        <h1 className='text-2xl font-bold'>{shortText(name,50)}</h1>
        <h1 className='text-sm'>{shortText(shortDescription,150)}</h1>
        <p className=''>
          ₹<del>{Price}</del><span className='ms-2 font-bold'>{currentPrice}</span>
        </p>
      </div>
      </div>
  )
}

export default Productcard