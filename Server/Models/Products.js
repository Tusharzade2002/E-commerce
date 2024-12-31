import {model ,Schema} from 'mongoose'

const  productschema = new Schema({
   name:{
        type:String,
        required:true,
    },
   shortDescription: {
        type:String,
        requied:true,
    },
    longDescription:{
        type:String,
        requied:true,
    },
    price:{
          type:Number,
          requied:true,
    },
    currentPrice:{
        type:Number,
    },
   cateegory: {
         type:String,
         required:true,
    },
    images:{
        type:[String],
        required:true,
    },
    tags:{
          type:[String],
    }
},{
    times
})
const product =model('product',productschema);
export default product;