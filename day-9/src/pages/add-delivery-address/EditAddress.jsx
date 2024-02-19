import { useLocation, useNavigate } from "react-router-dom"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const EditAddress = () => {


    const location = useLocation();
    const address = location.state;
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const { name, street, state, city, country, phone, note, _id } = address;


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const street = form.street.value;
        const city = form.city.value;
        const country = form.country.value;
        const phone = form.phone.value;
        const note = form.note.value;

        const newAddress = { name, street, city, country, phone, note };

        axiosSecure.put(`/api/address?id=${_id}`, newAddress)
            .then(res => {
                if (res?.data?.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Address updated successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(-1);
                }
            })
    }


    return (
        <form onSubmit={handleSubmit} className="pt-10 container mx-auto px-5">
            <h1 className="text-xl font-bold mb-6">Edit existing address</h1>
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="pb-2">Name</label>
                    <input type="text" defaultValue={name} name="name" placeholder="Full name" className="input mt-2 input-bordered w-full " required />
                </div>
                <div>
                    <label className="pb-2">Phone Number</label>
                    <input type="text" defaultValue={phone} name="phone" placeholder="Enter phone number" className="input mt-2 input-bordered w-full " required />
                </div>
            </div>
            <div className="grid pt-6 md:grid-cols-2 gap-4">
                <div>
                    <label >State</label>
                    <input type="text" defaultValue={state} name="state" placeholder="Enter state" className="input mt-2 input-bordered w-full " required />
                </div>
                <div>
                    <label >Street</label>
                    <input type="text" defaultValue={street} name="street" placeholder="Enter Street address" className="input mt-2 input-bordered w-full " required />
                </div>
            </div>
            <div className="grid pt-6 items-center md:grid-cols-2 gap-4">
                <div>
                    <label >City</label>
                    <input type="text" name="city" defaultValue={city} placeholder="Enter city" className="input mt-2 input-bordered w-full " required />
                </div>
                <div>
                    <label >Country</label>
                    <input type="text" name="country" defaultValue={country} placeholder="Enter country" className="input mt-2 input-bordered w-full " required />
                </div>
            </div>

            <div className="pt-6">
                <label className="br" >Additional note</label>
                <textarea defaultValue={note} className="textarea textarea-bordered w-full mt-2 h-32 resize-none" name="note" placeholder="Leave a additional note for identifying your address better"></textarea>

            </div>

            <div className="text-center py-8">
                <button type="submit" className="bg-orange-600 text-white rounded-lg btn hover:text-black  py-3">Update Address</button>
            </div>

        </form>
    )
}

export default EditAddress