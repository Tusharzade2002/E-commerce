import  order from '../Models/Orders.js'
const PostOrder=async(req,res)=>{
    //  console.log(req.user);
      const {products,DelivaryAddress,phone,PaymentMode}=req.body;
// console.log("product", products);

if(!products || !DelivaryAddress || !phone || !PaymentMode ){
    return res.status(400).json({
        success:false,
        message:"all fields are required"
    })
}
let Totalbill = 0;
 
  
 products.forEach((product) => {
    console.log("product" ,product);
     console.log(product.productId);
    if(product.price && product.quatity){
        Totalbill += product.price * product.quatity
        console.log(Totalbill);
        
    }else{
        return res.status(400).json({
            success:false,
            message:"invalid product data"
        })
    }
 });
    //  console.log(product.productId);
    // if(product.price && product.quatity){
    //     Totalbill += product.price * product.quatity
    //     console.log(Totalbill);
        
    // }else{
    //     return res.status(400).json({
    //         success:false,
    //         message:"invalid product data"
    //     })
    // }
   
    
     try{
       
     const neworder = new order({
            userID:req.user._id,
            products,
            Totalbill,
            DelivaryAddress,
            phone,
            PaymentMode
     })

     const savedOrder = await neworder.save();

    res.json({
        success:true,
        data:savedOrder,
        message:"order placed successfully"
    })
}catch(e){
    return res.status(400).json({
        success:false,
        message:e.message
    })
}
}
export default  PostOrder