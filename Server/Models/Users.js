import {model , Schema} from 'mongoose';

const UserSchema = new Schema({
    name:{
           Type :String,
           required:true
    },
    email:{
             Type:String,
             unique:true
    },
    phoneNo:{
                Type:Number,
                unique:true
    },
    address:{
                Type : String,
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