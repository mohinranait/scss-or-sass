import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../../context/AuthProvider";
import Swal from 'sweetalert2';
import useCartItems from "../../../../hooks/useCartItems";

const User = () => {

    const { user, logOutUser } = useContext(UserContext);
    const navigate = useNavigate();

    const { cartItems } = useCartItems();


    const handleSignOut = () => {
        Swal.fire({
            title: "Sign out?",
            text: "Are you sure want to sign out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sign out"
        }).then((result) => {
            if (result.isConfirmed) {
                logOutUser()
                    .then(() => {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Signed out successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate("/");
                    })

            }
        });
    }


    return <div>

        {
            user ? <div className="flex items-center gap-3">


                <div>
                    <button className="text-lg bg-gray-200 rounded-full p-4"><FaRegHeart /></button>
                </div>




                <div className="indicator">
                    <button onClick={() => navigate("/cart")} className="text-lg bg-gray-200 rounded-full p-4"> <FaCartShopping /></button>
                    <span className="badge badge-sm indicator-item">{cartItems?.length || 0}</span>
                </div>




                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 rounded-full object-contain">
                            <img alt="User" className="object-cover" src={user?.photoURL || "https://i.ibb.co/jyk7NGb/blank-black-white-image-placeholder-icon-design-178700106.jpg"} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <p className="text-center my-3 font-semibold">{user?.displayName}</p>
                        <Link className="mb-3 text-center text-primary hover:underline font-medium" to="/dashboard">Dashboard</Link>
                        <button onClick={handleSignOut} className="w-full bg-red-600 rounded-lg font-semibold btn hover:text-black text-white py-2">Sign out</button>
                    </ul>
                </div>







            </div>
                :
                <div>
                    <NavLink to="/signin" className="lg:text-white font-semibold hidden lg:inline">Sign In</NavLink>
                    <NavLink to="/signin" className="lg:text-white font-semibold lg:hidden text-2xl"><FaUserPlus /></NavLink>
                </div>
        }









    </div>


}

export default User