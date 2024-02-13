import { addCart } from '@/redux/cart/cartSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const {_id,name,price,image,rating} = product;
    return (
        <div className='rounded shadow bg-white p-5'>
            <div>
                <Image width={400} height={400} className='rounded mx-auto' src={image} alt="a" />
            </div>
            <div className='mt-4'>
                <p className='text-base font-semibold text-gray-800'>{name}</p>
                <p className='text-xs font-normal text-gray-600'>Rating: {rating}</p>
                
            </div>
            <div className='mt-3 flex justify-between items-center'>
                <p className='text-xl font-semibold text-gray-900'>$ {price}</p>
                <button onClick={() =>{ dispatch(addCart(product)); router.push('/cart'); toast.success("Cart added") }} className='px-2 py-2 inline-block bg-gray-100 rounded'>Add to card</button>
            </div>
        </div>
    );
};

export default ProductCard;