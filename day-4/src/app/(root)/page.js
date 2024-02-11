'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [search,setSearch] = useState('mohin')
    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch(`/api/post?search=${encodeURIComponent(search)}&sort=asc`,{
                method: "GET",
            })
            const posts = await res.json();
            setPosts(posts?.posts);
        }
        getPosts();
    },[])

    // delete post
    const handleDelete = async (id) => {
        const res = await fetch(`/api/post/${id}`,{
            method: "DELETE",
        })
        if(res.ok){
            const filter = posts?.filter(item => item?._id !== id);
            setPosts(filter)
        }
    }
    return (
        <>
            <section>
                <div className='container'>
                    <div className='bg-white lg:w-[800px] mx-auto p-10 rounded'>
                        <div className='flex items-center justify-between mb-5'>
                            <div className='flex items-center gap-5'>
                                <p className='text-2xl font-medium'>Post Lists</p>
                            </div>
                            <div>
                                <Link href={'/add-post'} className='px-4 py-2 rounded bg-green-600 text-white'>Add new</Link>
                            </div>
                        </div>
                        <table className='w-full border-collapse table-auto border'>
                            <thead>
                                <tr>
                                    <th className='text-left border py-3 px-3 bg-gray-50'>#</th>
                                    <th className='text-left border py-3 px-3 bg-gray-50'>Title</th>
                                    <th className='text-left border py-3 px-3 bg-gray-50'>Author</th>
                                    <th className='text-left border py-3 px-3 bg-gray-50 w-[150px]'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts?.map((post,index) =>   {
                                        const {title,author,_id} = post;
                                        return <tr key={post?._id}>
                                            <td className='px-3 py-2 border'>{++index }</td>
                                            <td className='px-3 py-2 border'>{title}</td>
                                            <td className='px-3 py-2 border'>{author}</td>
                                            <td className='px-3 py-2 border'>
                                                <div className='flex gap-2 items-center'>
                                                    <Link href={`/edit-post/${_id}`} className='px-3 py-2 bg-green-600 text-white rounded text-sm'>Edit</Link>
                                                    <button onClick={() => handleDelete(_id)} className='px-3 py-2 bg-red-600 text-white rounded text-sm'>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    } )
                                }
                              
                               
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default HomePage;