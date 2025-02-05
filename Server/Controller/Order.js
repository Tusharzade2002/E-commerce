import  order from '../Models/order.js'
const PostOrder=async(req,res)=>{
     console.log(req.user);
      const {products,DelivaryAddress,phone,PaymentMode}=req.body;

if(!products  || !DelivaryAddress || !phone || !PaymentMode ){
    return res.status(400).json({
        success:false,
        message:"all fields are required"
    })
}
let Totalbill = 0;

products.forEach(product => {
    console.log(product);})

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