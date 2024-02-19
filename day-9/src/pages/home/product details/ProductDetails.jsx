import { useLoaderData, useNavigate } from "react-router-dom"
import Slider from "./slider/Slider";
import ReactStars from "react-rating-stars-component";
import { useContext, useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Reviews from "./reviews/Reviews";
import Shop5items from "../shopbyoffer/Shop5items";
import ShirtCart from "../shirt cart/ShirtCart";
import { UserContext } from "../../../context/AuthProvider";
import Swal from 'sweetalert2';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCartItems from "../../../hooks/useCartItems";


const ProductDetails = () => {
    const product = useLoaderData().data;

    const { _id, name, description, customerReviews, discountedPrice, regularPrice, sizes, soldQuantity } = product;

    const [selectedSize, setSelectedSize] = useState(sizes?.[0]);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { refetch } = useCartItems();


    const totalReview = customerReviews?.reduce((acc, review) => review.rating + acc, 0);
    const averageReview = Math.floor(totalReview / customerReviews.length);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    //Handle product add to cart
    const handleAddToCart = () => {
        if (user) {
            const price = discountedPrice * selectedQuantity;
            const productDetails = {
                name,
                image: product?.images[0],
                size: selectedSize,
                quantity: selectedQuantity,
                price,
                soldQuantity,
                productId: _id,
                user: user?.email,
                totalReviewers: customerReviews?.length,
                averageReview
            }

            axiosSecure.post("/api/cart", productDetails)
                .then(res => {
                    if (res.data?.user) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} is added to the cart!`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate("/cart");
                        refetch();

                    }
                })


        } else {
            Swal.fire({
                title: "Unavailable!",
                text: "Please sign in to your account for adding a cart item.",
                icon: "error",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sign in"
            }).then((result) => {

                if (result.isConfirmed) {
                    navigate("/signin")

                }
            });
        }


    }






    return <div className="container mx-auto px-5 my-10">

        {/* Product details */}
        <div className=" flex gap-6 flex-col lg:flex-row">

            <div className="flex-1">
                <Slider key={_id} product={product} />
            </div>





            <div className="flex-1">
                <h3 className=" text-4xl font-medium text-slate-700">{name}</h3>
                <p className="my-5 text-[#515151] ">{description}</p>



                <div >
                    {customerReviews.length > 0 ? <div className="flex items-center mb-4">

                        <ReactStars
                            count={5}
                            edit={false}
                            value={averageReview}
                            size={24}
                            activeColor="#F49F00"
                        /> <span>({customerReviews.length})</span>
                    </div> : <p className="text-sm text-gray-400 font-medium mb-6 mt-2">Not reviewed yet</p>}
                </div>

                <p className="my-5">
                    {discountedPrice && <span className="text-[#41454F] text-2xl font-semibold">${discountedPrice}</span>}
                    <span className="text-lg text-[#C3C4C7] ml-4 line-through">${regularPrice}</span>
                </p>

                <div >
                    <span className="text-[#41454F] text-2xl font-semibold">Size: </span>
                    {
                        sizes.map(size => <button onClick={() => setSelectedSize(size)} className={` px-3 ml-4 py-1 ${selectedSize === size ? "bg-[#444852]" : "bg-[#4448524D]"} rounded-full text-white text-lg font-medium`} key={size}>{size}</button>)
                    }
                </div>

                <div className="flex items-center my-8">
                    <span className="text-xl text-[#515151]">Quantity: </span>
                    <div className="  ml-5 border-2 text-center rounded-md">
                        <button onClick={() => {
                            selectedQuantity > 1 && setSelectedQuantity(selectedQuantity - 1)
                        }}
                            className="px-4 py-2 border-r-2 text-xl">-</button> <span className="px-4 py-2  text-xl">{selectedQuantity}</span> <button
                                onClick={() => {
                                    selectedQuantity < 10 && setSelectedQuantity(selectedQuantity + 1)
                                }}
                                className="py-2 px-4 text-xl border-l-2">+</button>
                    </div>
                </div>

                <div className="mt-6 flex gap-6 flex-col md:flex-row">
                    <button onClick={handleAddToCart} className="flex items-center gap-2 py-4 px-11 border-[#DFE0E1] hover:text-white hover:bg-[#444852] rounded-lg border text-[#54575C] text-xl font-medium"><FiShoppingCart /> Add To Cart</button>
                    <button className=" py-4 px-[72px] border-[#DFE0E1] bg-[#444852] text-white hover:bg-transparent rounded-lg border hover:text-[#54575C] text-xl font-medium">Buy Now</button>
                </div>



            </div>

        </div>

        {/* Reviews */}
        {
            customerReviews && <div className=" my-32">
                <Reviews key={product._id} product={product} />
            </div>
        }

        {/* Item grid */}
        <Shop5items />

        {/* Best selling items */}
        <ShirtCart />






    </div>


}

export default ProductDetails