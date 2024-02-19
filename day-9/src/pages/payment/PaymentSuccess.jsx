import { useNavigate, useParams } from "react-router-dom";

import Confetti from 'react-confetti'

import thumbs from '../../assets/images/thumbs.png';


const PaymentSuccess = () => {

    const navigate = useNavigate();

    const tranId = useParams().id;


    return (
        <div>

            <Confetti
                width={window.innerWidth || 500}
                height={window.innerHeight || 500}
            />

            <div className="flex items-center justify-center h-screen bg-[#A9A9A9]">
                <div className="bg-white p-8 rounded shadow-lg text-center">
                    <img src={thumbs} className="h-16 w-16 mx-auto" alt="" />
                    <h2 className="text-2xl font-semibold mb-4">Order placed!</h2>
                    <p className="text-gray-600">
                        Thank you for your purchase. <br /> <span className="text-xs"> Your transaction was successful with transaction id: {tranId}.</span>
                    </p>
                    <button className="bg-[#444852] my-10 text-white w-full rounded-lg btn hover:text-black  py-3">Track your order</button>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
