import {model , Schema} from 'mongoose';


const UserSchema = new Schema({
    name:{
           type :String,
           required:true
    },
    email:{
             type:String,
             unique:true 
    },
    phoneNo:{
                type:Number,
                unique:true
    },
    address:{
                type : String,
    },
    role:{
             type:String,
             default:'User'
    },
    password:{
        type:String,
        required:true
    }
 
},{timestamps:true})
const User =model('User',UserSchema);
export default User