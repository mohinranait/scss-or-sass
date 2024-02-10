import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const   initialState = {
    posts : [
        {
            _id: 1,
            title: "JavaScript",
            description: "JavaScript is most popular programming language in tha warld",
            author: "Mohin",
        },
        {
            _id: 2,
            title: "PHP Language",
            description: "PHP is a server side language", 
            author: "Mahir",
        },
    ],
    isLoading: false,
    isError : null,
}

const postSlice = createSlice({
    name : "posts",
    initialState ,
    reducers : {
        addPosts : (state,action) => {
            state.isLoading = true;
            const idGenaret = uuidv4();
            state.posts = [...state.posts , {...action.payload, _id: idGenaret}]
            state.isLoading = false;
        },
        updatePost : (state,action) => {
            state.isLoading = true;
            const {_id, title, description} = action.payload;
            const isExists = state.posts?.find(item => item?._id === _id);
            if(isExists){
                isExists.title = title;
                isExists.description = description;
            }
            state.isLoading = false;
        },
        deletePost : (state,action) => {
            state.isLoading = true;
            const filter = state.posts.filter(x => x._id !== action.payload);
            state.posts = filter;
            state.isLoading = false;
        },
    }
})

export const {addPosts,deletePost,updatePost} = postSlice.actions
export default postSlice.reducer;