import Order from "../Models/Orders.js";
import Payment from '../Models/Payment.js'
const postpayment = async(req,res)=>{
       
     const {orderId,amount,PaymentMode,status,transitionID}=req.body;

      let order;
      try{
         order= await Order.findById(orderId);

      }catch(error){
           return res.status(400).json({
                   sucess:false,
                   message:error.message
           })
      }
      if(!order){
         return res.status(400)({
            sucess:false,
            message:"This order is not found"
         })
      }

      if(order.status == "delivered"  ||  order.status== "cancelled"){
              return res.json({
                  sucess:false,
                  message:"Order is already delivered or cancelled"
              })
      }


      const payment =new Payment({
         PaymentMode,
         amount,
         transitionID,
         status
      })

      try {
    const savedPayment = await payment.save();

    order.paymentId = savedPayment._id;
    order.paymentMode = paymentMode;

    order.timeline.push({ status: "Payment Completed", date: Date.now() });

    await order.save();

    return res.json({
      success: true,
      message: "Payment successful",
      data: savedPayment,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
export {postpayment}