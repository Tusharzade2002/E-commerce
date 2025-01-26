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
          type:[String],
    }
},)
const Product =model('product',productschema);
export default Product;
// const Products={
//     name:"lenovo laptop i5 12th gen 1235u",
//     shortDescription:"Thanks to its lightweight body with up to 19.9 mm thinness, the Lenovo IdeaPad Slim 3 Laptop makes it easy to carry it wherever you want.",
//     longDescription:"This laptop gives you a month of Game Pass subscription along with access to multiple high-quality PC games. And, since there are new games added frequently, you won’t run out of games to apply. To do so, you will need a permanent subscription and you can continue using it and cancel it whenever you want. Also, its game catalogue keeps changing over time. Moreover, you will need Windows 11 and an app to play PC games. For more details, you can visit the Xbox website.",
//     Price:51290,
//     currentPrice:85000,
//     category:"laptop",
//     images:[
//         "https://store.lenovo.com/media/catalog/product/cache/413be408f1eeb8de804bc921cbd9e1d3/8/2/82SF008YIN-0_7_3.webp",
//         "https://store.lenovo.com/media/catalog/product/cache/413be408f1eeb8de804bc921cbd9e1d3/8/2/82SF008YIN-1_7_3.webp",
//         "https://store.lenovo.com/media/catalog/product/cache/413be408f1eeb8de804bc921cbd9e1d3/8/2/82SF008YIN-2_7_3.webp",
//         "https://store.lenovo.com/media/catalog/product/cache/413be408f1eeb8de804bc921cbd9e1d3/8/2/82SF008YIN-3_7_3.webp",
//         "https://store.lenovo.com/media/catalog/product/cache/413be408f1eeb8de804bc921cbd9e1d3/8/2/82SF008YIN-4_7_3.webp"
//     ],
//     tags:["new arrival","best offer"]
// }