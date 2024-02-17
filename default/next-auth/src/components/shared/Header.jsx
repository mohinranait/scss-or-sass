import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className='bg-white'>
            <div className="container lg:min-h-[60px] flex items-center justify-center gap-1">
                <Link href="/" className="px-3 py-2">Home</Link>
                <Link href="/login" className="px-3 py-2">Login</Link>
                <Link href="/register" className="px-3 py-2">Register</Link>
                <Link href="/dashboard" className="px-3 py-2">Dashboard</Link>
            </div>
        </header>
    );
};

export default Header;