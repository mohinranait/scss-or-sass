'use client';
import { addProduct } from '@/redux/product/productSlice';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const ProductForm = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    const handleProduct = async e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value || 5;

        if(!name) return toast.error("Name is required")
        if(!price) return toast.error("Price is required")
        

        const obj = {
            name , 
            price,
            category, 
            rating,
            image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        }

        dispatch(addProduct(obj))
        router.push('/')
        toast.success("Create successfull")


    }
    return (
        <form onSubmit={handleProduct}>
            <p className='text-2xl font-semibold'>Product create</p>
            <div className='flex flex-col gap-4 mt-4'>
                <div>
                    <label htmlFor="" className='text-sm font-normal text-gray-600'>Product name</label>
                    <input type="text" name='name' className='px-3 py-3 w-full focus-visible:outline-none border border-gray-200 rounded' placeholder='Name' />
                </div> 
                <div className='w-full '>
                    <label htmlFor="" className='text-sm font-normal text-gray-600'>Price</label>
                    <select name="category" id="" className='px-3 py-3 w-full focus-visible:outline-none border border-gray-200 rounded'>
                        <option value="all">All Category</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Desktop">Desktop</option>
                        <option value="LED TV">LED TV</option>
                    </select>
                </div> 
                <div className='flex gap-4 '>
                    <div className='w-full '>
                        <label htmlFor="" className='text-sm font-normal text-gray-600'>Price</label>
                        <input type="number" name='price' className='px-3 py-3 w-full focus-visible:outline-none border border-gray-200 rounded' placeholder='Price' />
                    </div> 
                    <div className='w-full '>
                        <label htmlFor="" className='text-sm font-normal text-gray-600'>Rating</label>
                        <input type="number" name='rating' className='px-3 py-3 w-full focus-visible:outline-none border border-gray-200 rounded' placeholder='Rating' />
                    </div> 
                </div>
               
                <div className='w-full mt-3'>
                    <button type='bubmit' className='px-3 py-2 rounded bg-green-700 w-full text-white font-medium'>Save</button>
                </div> 
            </div>
        </form>
    );
};

export default ProductForm;