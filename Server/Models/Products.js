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
   category: {
         type:String,
         required:true,
    },
    images:{
        type:[String],
        required:true,
    },
    tags:{
          type:String,
    }
},)
const Product =model('product',productschema);
export default Product;
