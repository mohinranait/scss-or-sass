import LoginForm from '@/app/components/form/LoginForm';
import React from 'react';

const LoginPage = () => {
    return (
        <section className='my-10'>
            <div className="container">
                <div className='lg:w-[500px] mx-auto bg-white p-6 rounded'>
                    <LoginForm />
                </div>
            </div>
        </section>
    );
};

export default LoginPage;