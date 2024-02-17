import RegisterForm from '@/components/form/RegisterForm';
import Link from 'next/link';
import React from 'react';

const Registerpage = () => {
    return (
        <div className='mt-7'>
            <div>
                <div className='w-[500px] mx-auto p-7  bg-white  rounded'>
                    <RegisterForm />
                    <p className='text-center text-sm mt-4'>Already have an account <Link className='underline' href={'/login'}>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Registerpage;