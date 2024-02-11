import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className='flex justify-center items-center bg-white py-5 mb-8'>
            <Link href={'/'} className='text-black text-4xl font-bold inline-block'>CRUD APP</Link>
        </header>
    );
};

export default Header;