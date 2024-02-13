'use client'
import { addUser } from '@/redux/auth/authSlice';
import { useRouter } from 'next/navigation';

import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if(!email) toast.error("Email is required");
        if(!password) toast.error("Password is required");
        dispatch(addUser({
            email, password,
        }))
        e.target.reset();
        router.push('/')
    }
    return (
        <form onSubmit={handleLogin}>
            <p className='text-2xl font-semibold'>Login</p>
            <div className='flex flex-col gap-4 mt-4'>
                <div>
                    <label htmlFor="" className='text-sm font-normal text-gray-600'>Email</label>
                    <input type="email" name='email' className='px-3 py-3 w-full focus-visible:outline-none border border-gray-200 rounded' placeholder='Email' />
                </div> 
                <div>
                    <label htmlFor="" className='text-sm font-normal text-gray-600'>Password</label>
                    <input type="password" name='password' className='px-3 py-3 w-full focus-visible:outline-none border border-gray-200 rounded' placeholder='Password' />
                </div> 
                <div className='w-full mt-3'>
                    <button type='bubmit' className='px-3 py-2 rounded bg-green-700 w-full text-white font-medium'>Login</button>
                </div> 
            </div>
        </form>
    );
};

export default LoginForm;