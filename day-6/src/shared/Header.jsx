'use client'
import { logOut } from '@/redux/auth/authSlice';
import { searchProducts } from '@/redux/product/productSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const {carts} = useSelector(state => state.carts);
    const {user} = useSelector(state => state.user);
    console.log(user);
    const {productsCopy} = useSelector(state => state.products);

    const [search, setSearch] = useState('');
    const router = useRouter();
    const dispatch = useDispatch()
    const handleSearch =  () => {
        router.push('/')
        const filter = productsCopy?.filter(x => {
           const val = x.name.toLowerCase();
           return val.includes(search.toLowerCase())
        })
        if(!search){
            dispatch(searchProducts('reset'))
        }else{
            dispatch(searchProducts(filter))
        }
    }

    return (
        <header className='bg-white shadow-sm'>
            <div className="container py-2 md:py-1 md:h-[60px] gap-3 flex flex-col md:flex-row items-center justify-between ">
                <div>
                    <div className='flex'>
                        <input type="text" onChange={(e) => setSearch(e.target.value)} defaultValue={search} className='px-3 py-2 w-full rounded-l focus-visible:outline-none border ' placeholder='Search...' />
                        <button onClick={handleSearch} className='px-2 bg-gray-100 rounded-r'>Search</button>
                    </div>
                </div>
                <ul className='flex items-center justify-center gap-2'>
                    <li><Link href="/" className='px-3 py-2 inline-block'>Home</Link></li>
                    <li><Link href="/product/create" className='px-3 py-2 inline-block'>Add Product</Link></li>
                    {
                        user?.email ? <>
                         <li><button onClick={() => {dispatch(logOut()); router.push('/login')}} className='px-3 py-2 inline-block'>Logout</button></li>
                         </>:<> <li><Link href="/login" className='px-3 py-2 inline-block'>Login</Link></li>
                         </>
                    }
                   
                    <li><Link href="/cart" className='px-3 py-1 rounded-md inline-block bg-gray-200'>Cart ({carts?.length || 0})</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;