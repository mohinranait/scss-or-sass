import PostForm from '@/app/components/form/PostForm';
import Link from 'next/link';
import React from 'react';

const AddPost = () => {
    return (
    <section>
        <div className='container'>
            <div className='bg-white lg:w-[800px] mx-auto p-10 rounded'>
                <div className='flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-5'>
                        <p className='text-2xl font-medium'>Add new psot</p>
                    </div>
                    <div>
                        <Link href={'/'} className='px-4 py-2 rounded bg-green-600 text-white'>Post lists</Link>
                    </div>
                </div>
                <PostForm />
            </div>
        </div>
    </section>   
    );
};

export default AddPost;