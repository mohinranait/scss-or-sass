import ProductForm from '@/app/components/form/ProductForm';
import PrivaterRoute from '@/provider/PrivaterRoute';
import React from 'react';

const CreateProduct = () => {
    return (
        <>
            <section className='my-10'>
                <div className="container">
                    <div className='lg:w-[600px] mx-auto bg-white p-6 rounded'>
                        <ProductForm />
                    </div>
                </div>
            </section>
        </>
        
    );
};

export default CreateProduct;