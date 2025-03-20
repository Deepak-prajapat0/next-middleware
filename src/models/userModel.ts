import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },

})


const User = mongoose.models.users || mongoose.model("users",UserSchema)

export default User