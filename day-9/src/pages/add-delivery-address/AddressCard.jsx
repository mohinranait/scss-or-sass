
import Swal from 'sweetalert2';
import { GoAlert } from "react-icons/go";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddressCard = ({ address, refetch }) => {

    const navigate = useNavigate();

    const { name, street, state, city, country, phone, note, _id } = address;
    const primaryAddress = JSON.parse(localStorage.getItem("primary-address")) || {};


    const isMatch = address._id === primaryAddress?._id || false;

    const axiosSecure = useAxiosSecure();


    //Handle primary address selection
    const handlePrimaryAddress = address => {
        localStorage.setItem("primary-address", JSON.stringify(address));
        window.location.reload();
        scrollTo(0, 0);
    }


    //Handle address edit
    const handleAddressEdit = data => {
        navigate("/deliveryAddress/edit", { state: data });
    }





    //Handle address delete
    const handleAddressDelete = id => {
        Swal.fire({
            title: "Delete?",
            text: "Are you sure to delete the address?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/address?id=${id}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0) {
                            if (primaryAddress?._id === id) {
                                localStorage.removeItem("primary-address");
                            }
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Address deleted successfully!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }

                    })
                    .catch(error => {
                        Swal.fire({
                            icon: "error",
                            title: "Error!",
                            text: error.message
                        })
                    })

            }
        });
    }


    return (
        <div onClick={() => handlePrimaryAddress(address)} className={`border-[1px] mt-4 p-3 cursor-pointer rounded-xl ${isMatch ? "bg-[#fff9ed] border-orange-200" : "bg-white border-[#dadada]"}   h-full overflow-y-auto`}>
            {isMatch && <h3 className=" w-fit text-orange-500 bg-orange-100 rounded-xl flex items-center gap-4 font-medium px-3 py-2 mb-4">Deliver by this address <GoAlert /></h3>}
            <h3 className="font-bold ">{name}</h3>
            <p className=" my-1">{street}, {state}, {city}, {country}</p>
            <p className=" font-semibold">Phone: <a className="font-normal" href={`tel:${phone}`}>{phone}</a></p>
            {note && <p className=" font-semibold">Additional Note: <span className="font-medium">{note}</span></p>}

            <div className="flex gap-3 mt-3">
                <button onClick={(e) => {
                    e.stopPropagation();
                    handleAddressDelete(_id);

                }} className={`border-[2px] ${isMatch ? "bg-orange-500 text-white" : "bg-white text-black"} p-0 px-4 rounded-md`}>Delete</button>
                <button onClick={(e) => {
                    e.stopPropagation();
                    handleAddressEdit({ name, street, state, city, country, phone, note, _id });
                }}
                    className={`border-[2px] ${isMatch ? "bg-orange-500 text-white" : "bg-white text-black"} p-0 px-4  rounded-md`}>Edit</button>
            </div>






        </div >
    )
}

export default AddressCard