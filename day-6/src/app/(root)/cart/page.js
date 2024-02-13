'use client'
import PrivaterRoute from '@/provider/PrivaterRoute';
import { deleteCart } from '@/redux/cart/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const ShoppingCard = () => {
    const {carts} = useSelector(state => state.carts);
    const dispatch = useDispatch();
    return (
    
            <section className='my-10'>
                <div className='container'>
                    <div className='bg-white lg:w-[850px] mx-auto p-3 md:p-10 rounded'>
                        {/* <div className='flex items-center justify-between mb-5'>
                            <div className='flex items-center gap-5'>
                                <p className='text-2xl font-medium'>Post Lists</p>
                            </div>
                            <div>
                                <Link href={'/add-post'} className='px-4 py-2 rounded bg-green-600 text-white'>Add new</Link>
                            </div>
                        </div> */}
                        <div className='overflow-x-auto'>
                            <table className='w-full border-collapse table-auto  min-w-[700px]  border'>
                                <thead>
                                    <tr>
                                        <th className='text-left border py-3 px-3 bg-gray-50'>#</th>
                                        <th className='text-left border py-3 px-3 bg-gray-50'>Image</th>
                                        <th className='text-left border py-3 px-3 bg-gray-50'>Name</th>
                                        <th className='text-left border py-3 px-3 bg-gray-50'>Price</th>
                                        <th className='text-left border py-3 px-3 bg-gray-50'>Rating</th>
                                        <th className='text-left border py-3 px-3 bg-gray-50 w-[100px]'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        carts?.map((cart,index) =>   {
                                            const {name,price,rating,image,_id} = cart;

                                            return <tr key={cart?._id}>
                                                <td className='px-3 py-2 border'>{++index }</td>
                                                <td className='px-3 py-2 border'>
                                                    <Image src={image} className='w-12 h-12 rounded' width={100} height={100} alt='cart' />    
                                                </td>
                                                <td className='px-3 py-2 border'>{name}</td>
                                                <td className='px-3 py-2 border'>$ {price}</td>
                                                <td className='px-3 py-2 border'>{rating}</td>
                                                <td className='px-3 py-2 border'>
                                                    <div className='flex gap-2 items-center'>
                                                        <button onClick={() => {dispatch(deleteCart(_id)); toast.success("Cart removed")}} className='px-3 py-2 bg-red-600 text-white rounded text-sm'>Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        } )
                                    }
                                    
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>  
     
    );
};

export default ShoppingCard;