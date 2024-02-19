import { GoCheck } from "react-icons/go";
import { GoAlert } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { UserContext } from "../../context/AuthProvider";


import Swal from 'sweetalert2';
import useGetSecure from "../../hooks/useGetSecure";
import AddressCard from "./AddressCard";

const AddDeliveryAddress = () => {

    const location = useLocation();
    const products = location?.state;
    const navigate = useNavigate();

    const axiosSecure = useAxiosSecure();
    const { user } = useContext(UserContext);

    const { data: addresses, refetch, isPending } = useGetSecure(["delivery-address", user?.email], `/api/address?email=${user?.email}`);
    const selectedAddress = JSON.parse(localStorage.getItem("primary-address")) || {};

    const handleAddressAdd = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const phone = form.phone.value;
        const street = form.street.value;
        const state = form.state.value;
        const city = form.city.value;
        const note = form.note.value;
        const country = form.country.value;

        const deliveryAddress = { name, phone, street, city, state, country, note, email: user?.email };

        axiosSecure.post("/api/address", deliveryAddress)
            .then(res => {
                if (res.data) {
                    form.reset();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Delivery address added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    localStorage.setItem("primary-address", JSON.stringify(res.data));
                    refetch();
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: error.message
                });
            });

    }

    return (
        <div className=" container mx-auto px-5  min-h-screen">

            <div className="flex items-center justify-center my-14">
                <ul className="steps steps-horizontal ">
                    <li className="step step-primary "></li>
                    <li className="step step-primary"></li>
                    <li className="step"></li>

                </ul>
            </div>



            {
                isPending ? <div className="text-center"><span className="loading loading-spinner text-warning"></span></div>
                    : addresses?.length > 0 ? <div >
                        <h1 className="text-3xl text-black font-medium"><span className="text-gray-300">02.</span>Delivery Address</h1>
                        <div className="grid lg:grid-cols-3 gap-6 items-center my-14">



                            {

                                addresses?.length > 3 ? addresses?.slice(0, 3)?.map(address => <AddressCard key={address?._id} address={address} refetch={refetch} />)

                                    : addresses?.map(address => <AddressCard key={address?._id} address={address} refetch={refetch} />)
                            }



                        </div>
                    </div>


                        : ""
            }





            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <div className="text-center ">
                {addresses?.length > 0 && <button className="btn text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-50 bg-white" onClick={() => document.getElementById('my_modal_1').showModal()}>See all address</button>}
                <dialog id="my_modal_1" className="modal overflow-y-auto">
                    <div className="bg-white px-16 py-16 rounded-xl ">
                        <div className="grid lg:grid-cols-2 gap-6 ">
                            {addresses?.map(address => <AddressCard key={address?._id} address={address} refetch={refetch} />)}

                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <div className="text-center">
                                    <button className="btn">Confirm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>


            <form className="pt-10" onSubmit={handleAddressAdd}>
                <h1 className="text-xl font-bold mb-6">Add new address</h1>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="pb-2">Name</label>
                        <input type="text" name="name" placeholder="Full name" className="input mt-2 input-bordered w-full " required />
                    </div>
                    <div>
                        <label className="pb-2">Phone Number</label>
                        <input type="text" name="phone" placeholder="Enter phone number" className="input mt-2 input-bordered w-full " required />
                    </div>
                </div>
                <div className="grid pt-6 md:grid-cols-2 gap-4">
                    <div>
                        <label >State</label>
                        <input type="text" name="state" placeholder="Enter state" className="input mt-2 input-bordered w-full " required />
                    </div>
                    <div>
                        <label >Street</label>
                        <input type="text" name="street" placeholder="Enter Street address" className="input mt-2 input-bordered w-full " required />
                    </div>
                </div>
                <div className="grid pt-6 items-center md:grid-cols-2 gap-4">
                    <div>
                        <label >City</label>
                        <input type="text" name="city" placeholder="Enter city" className="input mt-2 input-bordered w-full " required />
                    </div>
                    <div>
                        <label >Country</label>
                        <input type="text" name="country" placeholder="Enter country" className="input mt-2 input-bordered w-full " required />
                    </div>
                </div>

                <div className="pt-6">
                    <label className="br" >Additional note</label>
                    <textarea className="textarea textarea-bordered w-full mt-2 h-32 resize-none" name="note" placeholder="Leave a additional note for identifying your address better"></textarea>

                </div>

                <div className="text-center py-8">
                    <button type="submit" className="bg-orange-600 text-white rounded-lg btn hover:text-black  py-3">Save Address</button>
                </div>

            </form>

            <button onClick={() => navigate("/payment", { state: { selectedAddress, ...products } })} disabled={addresses?.length < 1 || !selectedAddress} className="bg-[#444852] my-10 text-white w-full rounded-lg btn hover:text-black  py-3">Next</button>

        </div>
    )
}

export default AddDeliveryAddress