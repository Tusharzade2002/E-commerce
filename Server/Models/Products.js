import {model ,schema} from 'mongoose'

const  productschema = new schema({
   name:{
        type:String,
        required:ytrue,
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