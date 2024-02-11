'use client';
import {useRouter} from "next/navigation"
import React from 'react';

const PostForm = ({post}) => {
    const router = useRouter();
    const handleSubmit = async e => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const author = form.author.value;

        
        try {
            if(!post){
                const res = await fetch(`/api/post`,{
                    method: "POST",
                    headers:{
                        "Content-type":"Application/json",
                    },
                    body: JSON.stringify({
                        title,
                        description,
                        author,
                    })
                })
                if(res.ok){
                    router.push('/')
                }
            }else{
                const res = await fetch(`/api/post/${post?._id}`,{
                    method: "PATCH",
                    headers:{
                        "Content-type":"Application/json",
                    },
                    body: JSON.stringify({
                        title,
                        description,
                        author,
                    })
                })
                if(res.ok){
                    router.push('/')
                }
            }
            
            
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div>
                <label htmlFor="" className='text-sm text-gray-600'>Title</label>
                <input type='text' name='title' defaultValue={post?.title || ''} className='border rounded py-2 px-3 w-full' placeholder='Title..' />
            </div>
            <div>
                <label htmlFor="" className='text-sm text-gray-600'>Author</label>
                <input type='text' name='author' defaultValue={post?.author || ''} className='border rounded py-2 px-3 w-full' placeholder='Title..' />
            </div>
            <div>
                <label htmlFor="" className='text-sm text-gray-600'>Description</label>
                <textarea name="description" defaultValue={post?.description || ''} id="" className='border rounded py-2 px-3 w-full' cols="30" rows="2"></textarea>
            </div>
            <div>
                <button type='submit' className='px-3 py-2 rounded bg-green-600 text-white w-full'> {post?._id ? "Update":"Save"}</button>
            </div>
        </form>
    );
};

export default PostForm;