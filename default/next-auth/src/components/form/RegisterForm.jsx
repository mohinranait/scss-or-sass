'use client';
import React from 'react';

const RegisterForm = () => {
    const handleSubmit = async e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const obj = {name,email,password}
        try {
            const res = await fetch(`/api/register`,{
                method: "POST",
                headers:{
                    "Content-type":"Application/json",
                },
                body: JSON.stringify(obj)
            })
            const data = await res.json();
            console.log(data);
        } catch (error) {
            
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <p className='text-center text-2xl font-semibold mb-4'>Register</p>
            <div className='flex flex-col gap-4'>
                <div>
                    <label htmlFor="" className='text-sm font-medium'>Name</label>
                    <input type="text" name='name' className='px-3 py-2 rounded border focus-visible:outline-none w-full' />
                </div>
                <div>
                    <label htmlFor="" className='text-sm font-medium'>Email</label>
                    <input type="email" name='email' className='px-3 py-2 rounded border focus-visible:outline-none w-full' />
                </div>
                <div>
                    <label htmlFor="" className='text-sm font-medium'>Password</label>
                    <input type="password" name='password' className='px-3 py-2 rounded border focus-visible:outline-none w-full' />
                </div>
                <div className='mt-5'>
                    <button type='submit' className='px-4 w-full py-2 bg-green-700 text-white rounded'>Register</button>
                </div>
            </div>
        </form>
    );
};

export default RegisterForm;