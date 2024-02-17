'use client';
import { useSession } from 'next-auth/react';
import React from 'react';

const DashboardPage = () => {
    const {data:session} = useSession();
    console.log(session?.user);
    return (
        <div>
            DashboardPage
        </div>
    );
};

export default DashboardPage;