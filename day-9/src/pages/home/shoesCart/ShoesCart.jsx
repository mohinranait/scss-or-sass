import { GoHeart } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import ShoesTitle from "./ShoesTitle";
import ReactStars from "react-rating-stars-component";

import star from '../../../assets/icons/Star.svg';
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import useGetPublic from "../../../hooks/useGetPublic";


const ShoesCart = () => {
    const navigate = useNavigate();
    const { data: topRated } = useGetPublic(['topProducts'], `/api/topRated`);


    //Initiate AOS
    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])


    return (

        <div className="bg-[#f6f6f6d0] mt-10">
            <ShoesTitle></ShoesTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {
                    topRated?.length > 0 ?

                        topRated.map(product => {

                            const { _id, name, images, customerReviews, regularPrice, discountedPrice } = product;

                            const totalReview = customerReviews?.reduce((acc, review) => review.rating + acc, 0);
                            const averageReview = Math.floor(totalReview / customerReviews.length);
                            const priceDiff = ((regularPrice - discountedPrice) / regularPrice) * 100;
                            const discountedPercentage = Math.floor((priceDiff * 100) / 100);


                            return <div data-aos="fade-up" key={_id} className=" pb-12">
                                <div >
                                    <div className=" relative bg-[#E8E8E8] rounded-lg">
                                        <div className="absolute left-0 top-0 flex justify-between items-center w-full px-5 pt-5 overflow-hidden ">
                                            {
                                                discountedPercentage > 0 && <div style={{ backgroundImage: `url(${star})` }} className=" w-16 h-16 flex justify-center items-center bg-cover">
                                                    <span className=" text-white font-semibold">-{discountedPercentage}%</span>
                                                </div>
                                            }

                                            <div className="w-12 h-12 pt-3 pl-3 rounded-full bg-gray-200 bg-opacity-40">
                                                <button>
                                                    <GoHeart className="text-2xl text-black" />
                                                </button>
                                            </div>
                                        </div>
                                        <img className="w-full h-64 rounded-lg object-cover" src={images?.[0]} alt="" />
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <h1 className="text-xl text-[#25282e] font-medium  py-2">{name}</h1>
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
                                        <div className="flex gap-2">
                                            <h2 className="pb-4 font-bold">${discountedPrice}</h2>
                                            <h2 className="pb-4 text-gray-400 line-through">${regularPrice}</h2>
                                        </div>
                                        <button onClick={() => navigate(`/product/${_id}`)} className="border-2 flex items-center gap-3 py-3 px-16 rounded-xl hover:bg-[#444852] hover:text-white font-medium text-gray-600 w-full"><FiShoppingCart />View Product</button>
                                    </div>
                                </div>
                            </div>
                        })

                        : ''
                }

            </div>
        </div>

    );
};

export default ShoesCart;