import {model,Schema}from 'mongoose'

const PaymentSchema=new Schema({
   PaymentMode: {
         type:String,
         required:true
    },
    amount:{
        type:Number,
        required:true
    },
    transitionID:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    }
},{timestamps:true})
const Payment = model("Payment" ,PaymentSchema);
export default Payment;