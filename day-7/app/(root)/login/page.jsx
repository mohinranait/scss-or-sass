import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import LoginForm from '@/components/LoginForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const LoginPage = async () => {
    const session = await getServerSession(authOptions);
    if (session) redirect("/dashboard");
    return (
        <div>
            <LoginForm />
        </div>
    );
};

export default LoginPage;