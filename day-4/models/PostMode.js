import {model, models, Schema } from "mongoose";

const postSchema = new Schema({
    title : {
        type : String,
    },
    description : {
        type : String,
    },
    author : {
        type : String,
    },
    avater : {
        type : String,
    },
},{timestamps:true})

const Post = models.Post || model("Post", postSchema);

export default Post;