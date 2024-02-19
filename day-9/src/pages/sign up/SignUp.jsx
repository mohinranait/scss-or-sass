import { Link, useNavigate } from 'react-router-dom'
import image from '../../assets/images/logo.png'
import { useContext, useState } from 'react';
import { UserContext } from '../../context/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import saveUserToDB from '../../utils/saveUserToDB';

const SignUp = () => {

    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);

    const { createUser } = useContext(UserContext);







    const handleSubmit = e => {
        setIsSignUp(true);
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;
        const checkbox = form.checkbox.checked;



        //Check for password length
        if (password.length < 6) {
            return toast.error("Password must be at least 6 character!", { theme: "colored", position: "bottom-right" });
        }

        //Check for agreements
        if (!checkbox) {
            return toast.error("Please accept out terms of use and privacy policy!", { theme: "colored", position: "bottom-right" })
        }

        //Create new user
        createUser(email, password)
            .then(res => {
                if (res?.user) {
                    //Update user profile with name
                    updateProfile(res?.user, { displayName: name })
                        .then(() => {
                            const user = { name, email, phone, role: "user" };
                            saveUserToDB(user);  //Save new user info to the database
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                text: "Your account has been successfully created.",
                                showConfirmButton: false,
                                timer: 2000,
                                color: "green"
                            });
                            navigate("/");
                            setIsSignUp(false);
                        });
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: error.message
                })
            });

    }



    return (
        <div className='min-h-screen bg-base-200 '>
            <div className="  flex flex-col lg:flex-row gap-10 lg:gap-0  items-center justify-evenly container mx-auto px-5 py-10">

                <div onClick={() => navigate("/")} className="text-center cursor-pointer lg:text-left flex items-center ">
                    <img className=' h-14 w-14 rounded-full' src={image} alt="" />
                    <h3 className=' md:text-5xl font-kaushan'>Online Shop</h3>
                </div>

                <div className='md:bg-white py-8 md:px-14 rounded-xl '>
                    <h3 className='text-center text-4xl font-medium '>Create Account</h3>
                    <div className="divider">Or sign in with email</div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control mt-3">
                            <label className="label">
                                <span className="label-text">Full name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered  md:w-80 lg:w-full" required />
                        </div>

                        <div className="form-control mt-3">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered md:w-80 lg:w-full" required />
                        </div>

                        <div className="form-control mt-3">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" placeholder="Phone" name='phone' className="input input-bordered md:w-80 lg:w-full" required />

                        </div>

                        <div className="form-control mt-3">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="******" name='password' className="input input-bordered md:w-80 lg:w-full" required />

                        </div>
                        <div className='mt-4 flex items-center gap-1'>
                            <input type="checkbox" name='checkbox' className="checkbox checkbox-sm border border-slate-700" />
                            <p className='text-xs font-medium'>I agree to Online shop's <a className='font-bold hover:underline' href="">Terms and Use</a> and <a className='font-bold hover:underline' href="">Privacy Policy</a></p>
                        </div>

                        <div className="form-control mt-5">
                            <button disabled={isSignUp} className="btn btn-neutral text-white">Sign up {isSignUp && <span className="loading loading-spinner loading-xs"></span>}</button>
                        </div>

                    </form>

                    <p className='text-center mt-5  text-[#8A9099]'>Already have an account? <Link to="/signin" className='text-black hover:underline'>Sign in</Link></p>
                </div>

                <ToastContainer />
            </div>
        </div>
    )
}

export default SignUp