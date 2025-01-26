 import Product from '../Models/Products.js'
 const postProduct = async(req,res)=>{
      const {
        name,
        shortDescription,
        longDescription,
        Price,
        currentPrice,
        category,
        images,
        tags
      }=req.body

      const ManditoryFields =["name","shortDescription","longDescription","Price","category","images",];

      for(const fields of ManditoryFields){
            if(!req.body[fields]){
                return res.status(400).json({
                    succes:false,
                    message:`${fields} are required`
                })
            }
      }
  

      const newproducts =new Product({
                   name,
                   shortDescription,
                   longDescription,
                   Price,
                   currentPrice,
                   category,
                   images,
                   tags
      });
   try{
      const saveproducts = await newproducts.save();
      return res.json({
        succes:true,
        message:"product created successfully",
        data:saveproducts
      })
    }
    catch(e){
      return res.status(400).json({
    succes:false,
    message:e.message
      })
    }
 }
 export {postProduct}

//  {
//   "name":"laptop i5",
//   "shortDescription":"Lenovo IdeaPad Slim 5 Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) 15IAL7 Thin and Light Laptop  (15.6 inch, Storm Grey, 1.85 Kg, With MS Office)",
//   "longDescription":"Lenovo IdeaPad Slim 5 Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) 15IAL7 Thin and Light Laptop  (15.6 inch, Storm Grey, 1.85 Kg, With MS Office) Laptop, Power Adaptor, User Guide, Warranty Documents",
//   "Price":"54345",
//   "category":"laptop",
//   "images":[
//       "https://store.lenovo.com/media/catalog/product/cache/413be408f1eeb8de804bc921cbd9e1d3/8/2/82SF008YIN-0_7_3.webp",
//       "https://store.lenovo.com/media/catalog/product/cache/413be408f1eeb8de804bc921cbd9e1d3/8/2/82SF008YIN-0_7_3.webp",
//       "https://store.lenovo.com/media/catalog/product/cache/413be408f1eeb8de804bc921cbd9e1d3/8/2/82SF008YIN-2_7_3.webp"
//   ]

// }