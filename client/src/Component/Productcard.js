import React, { useState } from "react";

import {
  ChevronLeft ,
  Minus as MinusIcon,
  Plus as PlusIcon,
  ChevronRight as RightArrow,
} from "lucide-react";
import Button from "./Button";
import toast, { Toaster } from "react-hot-toast";
function Productcard({
  id,
  name,
  currentPrice,
  price,
  images,
  shortDescription,
  tags,
}) {
  

  const shortText = (text, maxLength = 1) => {
    if (!text) {
      return " ";
    }
    if (text.length <= maxLength) {
      return text;
    }
    let shortText = text.substring(0, maxLength - 3);

    shortText += "...";

    return shortText;
  };
  const [currentImage, setCurrentImage] = useState(images[0]);
  const handleleft = () => {
    const currentindex = images.indexOf(currentImage);
    const newIndex = currentindex > 0 ? currentindex - 1 : images.length-1;
    console.log(newIndex);
    setCurrentImage(images[newIndex]);
  };
  const handleright = () => {
    const currentIndex = images.indexOf(currentImage);
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentImage(images[newIndex]);

  };
  const getBackgroundColor = (value) => {
    if (value = "New launches") return 'bg-red-300';
    if(value = "Bestseller") return 'bg-teal-300';
  };

   const handleAddtocart=()=>{
            const cart=JSON.parse(localStorage.getItem("cart") || "[]");
             const product ={
              productId:id,
              name:name,
              image:currentImage,
              quantity:quantity,
              price:currentPrice,
             };

             let exitingProductIndex=-1;

             cart.forEach((item,index) => {
                     if(item.productId === id){
                              exitingProductIndex =index
                     }
             });

             if(exitingProductIndex>-1){
              cart[exitingProductIndex].quantity = quantity;
             }else{
              cart.push(product);
             }
             
              localStorage.setItem("cart",JSON.stringify(cart))
              toast.success("Product added to cart")
   }

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden py-3 px-3  m-5 relative max-w-[270px] z-1">
        <div className="relative h-40">
        <ChevronLeft
         width={64}
          size={64}
          className="absolute top-1/3 -left-4 cursor-pointer"
          onClick={handleleft}
        />
        <img
          src={currentImage}
          alt="product"
          className="w-full h-40 object-contain object-center"
        />
        <RightArrow
          size={64}
          className="absolute top-1/3 -right-4 cursor-pointer"
          onClick={handleright}
        />
      </div>
      <p className="absolute top-2 right-4">
        {tags.map((tag,item) => {
         
          return (
            <span className={`${getBackgroundColor(item)} text-white font-bold px-2 py-1 text-xs rounded-full`}>
              {tag}
            </span>
          );
        })}
      </p>
      <div className="my-3">
        <h1 className="text-xl font-bold px-1">{shortText(name, 30)}</h1>
        <h1 className="text-sm mt-1">{shortText(shortDescription, 100)}</h1>
        <p className="mt-2">
          ₹<span className="ms-1 me-2 font-bold">{currentPrice}</span><del>₹ {price}</del>
        </p>
        <div className="flex justify-center items-center">
          <MinusIcon
            className="cursor-pointer"
            onClick={() => setQuantity(quantity - 1)}
          />
          <span className="mx-2 text-xl">{quantity}</span>
          <PlusIcon
            className="cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
        <div className="flex justify-center mt-5">
        <Button label={"Add To Cart"}
           varient={"primary"}
           onClick={handleAddtocart}
         />
      </div>
      </div>
      <Toaster/>
    </div>
  );
}

export default Productcard;
