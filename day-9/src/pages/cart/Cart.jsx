import { useNavigate } from "react-router-dom";
import useCartItems from "../../hooks/useCartItems"
import CartCard from "./CartCard";

const Cart = () => {
    const navigate = useNavigate();

    const { cartItems, isPending, refetch } = useCartItems();

    const subtotal = cartItems?.reduce((acc, products) => products.price + acc, 0);

    const productIds = cartItems?.map(product => product?._id);
    console.log(productIds);

    return <div className="min-h-screen container mx-auto px-5 ">

        {
            isPending ?

                <div className='text-center my-20 text-7xl'>
                    <span className="loading loading-spinner text-orange-600 w-[80px]"></span>
                </div>

                : cartItems?.length > 0 ? <div className="my-14 ">

                    <div className="flex items-center justify-center">
                        <ul className="steps steps-horizontal ">
                            <li className="step step-primary "></li>
                            <li className="step "></li>
                            <li className="step"></li>
                        </ul>
                    </div>


                    <div className="flex justify-between items-center mt-10">
                        <h3 className=" text-xl md:text-3xl font-medium"><span className="text-[#BABBBE]">1.</span> My Cart</h3>
                        <p className="font-medium">{cartItems?.length} {cartItems?.length > 1 ? "Items" : "Items"}</p>
                    </div>


                    <div className=" mt-14">
                        {
                            cartItems?.map(product => <CartCard key={product?._id} product={product} refetch={refetch} />)
                        }
                    </div>


                    <div >
                        <h3 className="text-3xl font-medium">Price Details</h3>

                        <div className="flex justify-between items-center my-6">
                            <p className="font-semibold">Subtotal</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="900" height="2" viewBox="0 0 900 2" fill="none">
                                <path d="M0 1L900 0.999921" stroke="#D2D2D2" stroke-dasharray="13 13" />
                            </svg>

                            <p className="font-semibold">${subtotal?.toFixed(2)}</p>
                        </div>

                    </div>


                    <div className=" w-2/5 mx-auto mt-20">
                        <button onClick={() => navigate("/deliveryAddress", { state: { products: cartItems, totalPrice: subtotal, productIds } })} className="bg-[#444852] w-full text-white rounded-lg btn hover:text-black  py-3">Next</button>
                    </div>



                </div>

                    : <div className="my-32">
                        <h3 className="text-3xl text-center font-semibold text-gray-400">Your cart is empty!</h3>
                    </div>
        }







    </div>
}

export default Cart