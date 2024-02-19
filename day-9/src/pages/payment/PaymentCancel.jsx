import { useNavigate } from 'react-router-dom';

const PaymentCancel = () => {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md max-w-md">
                <h2 className="text-2xl font-bold mb-4">Purchase Cancelled <span className="text-red-600">!</span></h2>
                <p className="text-gray-600 mb-6">
                    Your purchase has been cancelled. If you have any questions or concerns, please contact our support team.
                </p>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                    onClick={() => {

                        navigate("/");
                    }}
                >
                    Return to Homepage
                </button>
            </div>
        </div>
    )
}

export default PaymentCancel