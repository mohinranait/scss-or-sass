import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import useAxiosSecure from '../../hooks/useAxiosSecure';

const PaymentForm = () => {

    const location = useLocation();
    const deliveryInfo = location.state;
    const productPrice = deliveryInfo?.totalPrice;

    console.log(deliveryInfo);

    const shippingFee = productPrice * 0.05;

    const axiosSecure = useAxiosSecure();


    const handlePayment = () => {
        const deliveryDetails = {
            name: deliveryInfo?.selectedAddress?.name,
            phone: deliveryInfo?.selectedAddress?.phone,
            products: deliveryInfo?.products,
            street: deliveryInfo?.selectedAddress?.street,
            state: deliveryInfo?.selectedAddress?.state,
            city: deliveryInfo?.selectedAddress?.city,
            country: deliveryInfo?.selectedAddress?.country,
            email: deliveryInfo?.selectedAddress?.email,
            subtotal: productPrice,
            productIds: deliveryInfo?.productIds
        }


        axiosSecure.post("/api/sslInit", deliveryDetails)
            .then(res => {
                if (res?.data?.url) {
                    window.location.replace(res?.data?.url);

                }
            })

    }



    return <div className='container mx-auto px-5 min-h-screen'>


        <div className="flex items-center justify-center my-14">
            <ul className="steps steps-horizontal ">
                <li className="step step-primary "></li>
                <li className="step step-primary"></li>
                <li className="step step-primary"></li>

            </ul>
        </div>

        <h1 className="text-3xl text-black font-medium"><span className="text-gray-300">03.</span>Make payment</h1>

        <div className="flex justify-between items-center my-10">
            <p className="font-semibold">Shipping Fee</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="900" height="2" viewBox="0 0 900 2" fill="none">
                <path d="M0 1L900 0.999921" stroke="#D2D2D2" stroke-dasharray="13 13" />
            </svg>

            <p className="font-semibold">${shippingFee?.toFixed(2)}</p>
        </div>

        <div className="flex justify-between items-center my-6">
            <p className="font-semibold">Product Price</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="900" height="2" viewBox="0 0 900 2" fill="none">
                <path d="M0 1L900 0.999921" stroke="#D2D2D2" stroke-dasharray="13 13" />
            </svg>

            <p className="font-semibold">${productPrice?.toFixed(2)}</p>
        </div>

        <div className="flex justify-between items-center mt-10">
            <p className="font-semibold">Subtotal</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="900" height="2" viewBox="0 0 900 2" fill="none">
                <path d="M0 1L900 0.999921" stroke="#D2D2D2" stroke-dasharray="13 13" />
            </svg>

            <p className="font-semibold">${(productPrice + shippingFee)?.toFixed(2)}</p>
        </div>


        <div>
            <button onClick={handlePayment} className="bg-[#444852] my-10 text-white w-full rounded-lg btn hover:text-black  py-3">Pay now</button>
        </div>



    </div>

}

export default PaymentForm