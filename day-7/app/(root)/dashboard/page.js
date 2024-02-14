'use client'
import { useSession } from 'next-auth/react';
import React from 'react';

const Dashboard = () => {
    const {data:session} = useSession();

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 bg-white rounded-lg border-t-4 border-green-400">
                <h1 className="text-xl font-semibold my-4">Name: <span className='text-gray-600'>{session?.user?.name}</span> </h1>
                <h1 className="text-xl font-semibold my-4">Email: <span className='text-gray-600'>{session?.user?.email}</span> </h1>

            </div>
        </div>
    );
};

export default Dashboard;