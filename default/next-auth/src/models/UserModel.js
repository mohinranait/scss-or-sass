import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
    },
    password : {
        type : String,
    },
    role : {
        type : String,
        default: "User" // [User , Admin]
    },
},{timestamps:true})

const User = models.User || model("User", userSchema);

export default User;