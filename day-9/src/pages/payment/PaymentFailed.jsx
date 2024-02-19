import { useNavigate } from "react-router-dom";


const PaymentFailed = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-red-600">Purchase Failed</h2>
                <p className="text-gray-600 mb-6">
                    Unfortunately, your purchase could not be completed. Please try again or contact our support team for assistance.
                </p>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Retry Purchase
                </button>
            </div>
        </div>
    )
}

export default PaymentFailed