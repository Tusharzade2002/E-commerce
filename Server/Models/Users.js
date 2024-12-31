import {model , Schema} from 'mongoose';

const UserSchema=new Schema({
    name:{
           Type :String,
           required:true,
    },
    email:{
             Type:String,
             unique:true,
    },
    phoneNo:{
                Type:Number,
                unique:true,
    },
    address:{
                Type :  String,
    },
    role:{
             type:String,
             default:'user',
    }
 
},{timestamps:true})
const User =model('user',UserSchema);
export default User