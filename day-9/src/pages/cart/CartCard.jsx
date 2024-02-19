import ReactStars from "react-rating-stars-component";
import { FaRegHeart } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

import Swal from 'sweetalert2';
import useAxiosSecure from "../../hooks/useAxiosSecure";


const CartCard = ({ product, refetch }) => {


    const { image, name, quantity, averageReview, totalReviewers, size, price, _id } = product;

    const axiosSecure = useAxiosSecure();


    //Remove the cart item
    const handleRemoveCartItem = (id) => {
        Swal.fire({
            title: "Remove?",
            text: "Are you sure to remove this item?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/cart?id=${id}`)
                    .then(res => {
                        if (res.data?.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Item has been removed!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }



    return <div className="mb-8 border-b border-b-[#DEDEDF] pb-7 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
        <div className="flex items-center flex-col md:flex-row gap-6">
            <img className=" h-44 w-44 rounded-md" src={image} alt="" />

            <div className=" space-y-3">
                <h3 className="text-2xl font-medium">{name}</h3>
                <p className="font-medium text-gray-500">Quantity: <span className="text-black">0{quantity}</span></p>

                <div >
                    {totalReviewers > 0 ? <div className="flex items-center ">

                        <ReactStars
                            count={5}
                            edit={false}
                            value={averageReview}
                            size={24}
                            activeColor="#F49F00"
                        /> <span>({totalReviewers})</span>
                    </div> : <p className="text-sm text-gray-400 font-medium mb-6 mt-2">Not reviewed yet</p>}
                </div>

                <div >
                    <span className="font-medium text-gray-500">Size: </span>
                    {
                        <button className={` px-3 ml-4 py-1 bg-[#444852] rounded-full text-white  font-medium`} >{size}</button>
                    }
                </div>



            </div>
        </div>

        <div>
            <p className="text-[#41454F] text-xl font-semibold">${price?.toFixed(2)}</p>
            <div className="flex gap-3 mt-6">
                <button className="text-[#BABBBE] bg-[#F4F4F4] p-2 rounded-full"><FaRegHeart /></button>
                <button onClick={() => handleRemoveCartItem(_id)} className="text-[#BABBBE] bg-[#F4F4F4] p-2 rounded-full"><FaRegTrashCan /></button>
            </div>
        </div>
    </div>
}

export default CartCard