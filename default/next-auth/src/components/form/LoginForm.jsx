'use client'
import React from 'react';
import {signIn} from "next-auth/react"
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const LoginForm = () => {
    const route = useRouter();
    const handleSubmit = async e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const res = await signIn('credentials',{
                email, password, redirect:false,
            })

            if(res.error){
                toast.error("Invalid credentials")
                return;
            }

            route.push('/')

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <p className='text-center text-2xl font-semibold mb-4'>Login</p>
            <div className='flex flex-col gap-4'>
               
                <div>
                    <label htmlFor="" className='text-sm font-medium'>Email</label>
                    <input type="email" name="email" className='px-3 py-2 rounded border focus-visible:outline-none w-full' />
                </div>
                <div>
                    <label htmlFor="" className='text-sm font-medium'>Password</label>
                    <input type="password" name="password" className='px-3 py-2 rounded border focus-visible:outline-none w-full' />
                </div>
                <div className='mt-5'>
                    <button type='submit' className='px-4 w-full py-2 bg-green-700 text-white rounded'>Login</button>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;