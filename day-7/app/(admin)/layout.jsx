import Link from 'next/link';
import React from 'react';

const AdminLayout = ({children}) => {
    return (
        <div>
            <ul className='flex py-3 border-b items-center justify-center gap-3'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/admin'}>Admin</Link></li>
                <li><Link href={'/admin/product'}>Product</Link></li>
                <li><Link href={'/admin/category'}>Category</Link></li>
            </ul>
            <div className='container mt-4'>
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;