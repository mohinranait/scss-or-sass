import React from 'react';
import { useGetCommentsQuery } from '../redux/features/api/baseApi';
import CommentCard from '../components/card/CommentCard';

const Comments = () => {
    const {data:comments,isLoading} = useGetCommentsQuery();
    if(isLoading){
        return <div className='text-center text-2xl font-bold text-red-600 mt-4'>Loading...</div>
    }
    return (
        <>
            <section>
                <div className="container gap-5 grid grid-cols-4">
                    {
                        comments?.map(comment => <CommentCard key={comment?.id} comment={comment} />)
                    }
                </div>
            </section>   
        </>
    );
};

export default Comments;