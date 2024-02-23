import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    endpoints: (builder) => ({
        getPosts : builder.query({
            query: () => "/posts",
        }),
        getSinglePostsById : builder.query({
            query: (id) => `/posts/${id}`
        }),
        getUsers : builder.query({
            query: () => "/users",
        }),
        getUserById : builder.query({
            query: (id) => `/users/${id}`,
        }),
        getComments : builder.query({
            query: () => "/comments",
        }),
        getCommentById : builder.query({
            query: (id) => `/comments/${id}`,
        }),
    })
})

export const {useGetCommentsQuery,useGetCommentByIdQuery,useGetPostsQuery,useGetSinglePostsByIdQuery, useGetUsersQuery, useGetUserByIdQuery} = baseApi;


export default baseApi