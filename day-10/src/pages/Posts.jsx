import React from 'react';
import { useGetPostsQuery } from '../redux/features/api/baseApi';
import PostCard from '../components/card/PostCard';

const Posts = () => {
    const {data:posts,isError,isLoading,error}  = useGetPostsQuery();

    if(isLoading){
        return <div className='text-center text-2xl font-bold text-red-600 mt-4'>Loading...</div>
    }

    return (
        <>
            <section className='mt-4'>
                <div className="container grid grid-cols-4 gap-5">
                    {
                        posts?.map(post => <PostCard key={post?._id} post={post} />)
                    }
                </div>
            </section>   
        </>
    );
};

export default Posts;