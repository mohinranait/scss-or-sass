import LoginForm from '@/components/form/LoginForm';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div className='mt-7'>
            <div className='w-[500px] mx-auto p-7 rounded bg-white'>
                <LoginForm />
                <p className='text-center text-sm mt-4'>Create a new account <Link className='underline' href={'/register'}>Register</Link> </p>
            </div>
        </div>
    );
};

export default LoginPage;