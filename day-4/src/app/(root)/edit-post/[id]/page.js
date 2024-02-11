
'use client';
import PostForm from '@/app/components/form/PostForm';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const UpdatePost =  ({params}) => {
    const {id} = params;
    const [post,setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const res = await fetch(`/api/post/${id}`);
            const data = await res.json();
            setPost(data?.post);
        }
        getPost()
    },[id])

    return (
    <section>
        <div className='container'>
            <div className='bg-white lg:w-[800px] mx-auto p-10 rounded'>
                <div className='flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-5'>
                        <p className='text-2xl font-medium'>Update psot</p>
                    </div>
                    <div>
                        <Link href={'/'} className='px-4 py-2 rounded bg-green-600 text-white'>Post lists</Link>
                    </div>
                </div>
                <PostForm post={post} />
            </div>
        </div>
    </section>   
    );
};

export default UpdatePost;