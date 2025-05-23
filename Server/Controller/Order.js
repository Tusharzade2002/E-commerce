import Order from "../Models/Orders.js";
const PostOrder = async (req, res) => { 
  const { products, DelivaryAddress, phone, PaymentMode } = req.body;

  console.log(req.user.id);

  if (!products || !DelivaryAddress || !phone || !PaymentMode) {
    return res.status(400).json({
      success: false,
      message: "all fields are required",
    });
  }
  let Totalbill = 0;

   products.forEach((product) => {
          Totalbill += product.price * product.quatity;
          });

  try {
    const neworder = new Order({
      userId: req.user.id,
      products,
      Totalbill,
      DelivaryAddress,
      phone,
      PaymentMode,
    });

    const savedOrder = await neworder.save();

    return res.json({
      success: true,
      data: savedOrder,
      message: "order placed successfully",
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

const putOrder = async (req, res) => {
  console.log(req.user);
  let user = req.user;
  const { id } = req.params;
  let order;

  try {
    order = await Order.findById(id);

    if (!order) {
      return res.json({
        success: false,
        message: "order not found",
      });
    }
  } catch (e) {
    return res.json({
      success: false,
      message: e.message,
    });
  }

  // user can only update his own order
  if (user.role == "user" && order.userId != user.id) {
    return res.status(400).json({
      success: false,
      message: "you are not authorize to update the order",
    });
  }
     //user can only cancel the order if it is not delivered
  if (user.role == "user" && req.body.status == "cancelled") {
    if (order.status == "delivered") {
      return res.status(400).json({
        success: false,
        message: "order has already been delivered",
      });
    }else{
      order.status ="cancelled";
      await order.save();
    }
   
  }

  if (req.body.phone) {
    order.phone = req.body.phone;
  }

  if (req.body.DelivaryAddress) {
    order.DelivaryAddress = req.body.DelivaryAddress;
  }

  if (user.role == "admin") {
    order.status = req.body.status;
    order.timelines = req.body.timelines;
    
  }
 await order.save();
  const updateOrder = await Order.findById(id);
  return res.json({
    success: true,
    message: "order updated sucesssfully..",
    data: updateOrder,
  });
};
 const getOrderById= async(req,res)=>{
   const user =req.user;
   const {_id} =req.params;
   console.log(_id);
   

   let order;
   try{
                
    order =await Order.findById(_id).populate("products.productId","-shortDescription -longDescription -images -category -__v").populate("PaymentID","-updatedAt -createdAt -__v")
    console.log(order)
    if(!order){
      return res.status(404).json({
        success:true,
        message:"Order Not Found"
      })
    }else{
      return res.status(200).json({
        success:true,
        data:order
      })
    }
   }catch(err){
    return res.status(400).json({success:false,message:"errroe"});
   }


 }

const getOrdersByUserId = async (req, res) => {
  const { id } = req.params;
  const user = req.user;

  if (user.role != "admin" && user._id != id) {
    return res.status(401).json({
         success:false,
         message:"you are not awthorized to view this order"
    });
  }

  const orders = await Order.find({ userId: id })
    return res.json({
      success:true,
      message:"order fetched successfully",
      data:orders
    })
};
export { PostOrder, putOrder ,getOrderById,getOrdersByUserId };
