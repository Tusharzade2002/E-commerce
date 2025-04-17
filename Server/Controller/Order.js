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
  if (user.role !== "user") {
    if (order.status == "delivered") {
      return res.status(400).json({
        message: false,
        message: "order has already been delivered",
      });
    }
    if (req.body.status == "cancelled") {
      order.status == "cancelled";
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

  const getOrderById =async (req,res)=>{
    const user =req.user;
    const {id} =req.params;
    let order ;
    try{
        order =await Order.findById(id)
        .populate("userId","name email")
        .populate(
            "product.productId",
            "-shortDescription -longDescription -images -category -tags -__v -createdAt -updateAt"
        )
        .populate("payment" ,"-__v -createdAt -updateAt");
        if(!order){
            return res.json({
                success:false,
                message:"order not found",
                data:""
            })
        }
    }catch(error){
        return res.json({
            success:false,
            message:error.message
            
        })
    }
  }
};
export { PostOrder, putOrder };
