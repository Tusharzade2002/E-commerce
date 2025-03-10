import {model ,Schema} from 'mongoose'


const orderschema = new Schema({
    userId:{ 
        type:Schema.Types.ObjectId,
        ref :'user',
       required:true,   
     },
     products:[
        {
            productId:{
                type:Schema.Types.ObjectId,
                ref:"product",
               required:true,
            },
            quantity:{
                type:String,
                required:true,
            },
            price:{
                type:Number,
                required:true,
            }
        }
     ],
     totalbill:{
                type:String,
             },
    DelivaryAddress: {
                type:String,
                required:true
     },
     phone:{
        type:Number,
        required:true,
     },
     PaymentMode:{
        type:String,
        required:true
     },
    PaymentID: {
           type:Schema.Types.ObjectId,
           ref:"Payment",
     },
     status:{
        type:String,
        default:"pending"
     },
     timelines:[
        {
            status:{
                type:String,
                required:true
            }
            // date:{
            //     type:date,
            //     default:Date.now,
            // }
        }
     ]
},{timestamps:true})
const Order = model("order" ,orderschema);
export default Order