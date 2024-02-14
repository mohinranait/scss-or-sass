import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import RegisterForm from '@/components/RegisterForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const RegisterPage = async () => {
    const session = await getServerSession(authOptions);

    if (session) redirect("/dashboard");
    return <RegisterForm />;
};

export default RegisterPage;