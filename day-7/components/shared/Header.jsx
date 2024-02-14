'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    const {data:session} = useSession();
    return (
        <header className='bg-white'>
        <div className="container lg:min-h-[60px] flex items-center justify-center gap-1">
            <Link href="/" className="px-3 py-2">Home</Link>
            {
                session ? <>
                  <Link href="/dashboard" className="px-3 py-2">Dashboard</Link>
                  <button onClick={() => signOut()} className="px-3 py-2">Logout</button>
                  </> : <>
                  <Link href="/login" className="px-3 py-2">Login</Link>
                    <Link href="/register" className="px-3 py-2">Register</Link>
                  </>
            }

          
        </div>
    </header>
    );
};

export default Header;