'use client'
import React from 'react';
import ProductCard from '../card/ProductCard';
import { useSelector } from 'react-redux';

const ProductSection = () => {
    const {products} = useSelector(state => state.products);



    return (
        <section className='my-10'>
            <div className="container">
                {/* <div className='md:w-[500px] mx-auto py-8 px-5 bg-white mb-6'>
                    <div className='flex'>
                        <input type="text" onChange={(e) => setSearch(e.target.value)} defaultValue={search} className='px-3 py-3 w-full rounded-l focus-visible:outline-none border ' placeholder='Search...' />
                        <button onClick={handleSearch} className='px-2 bg-gray-100 rounded-r'>Search</button>
                    </div>
                </div> */}
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                    {
                        products?.map(product =>  <ProductCard key={product?._id} product={product} /> )
                    }
                </div>
            </div>
        </section>
    );
};

export default ProductSection;