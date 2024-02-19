import { Link, useNavigate } from "react-router-dom";
import image from '../../assets/images/logo.png';
import google from '../../assets/icons/google.png';
import microsoft from '../../assets/icons/microsoft.png';
import { useContext, useState } from "react";
import { UserContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import saveUserToDB from "../../utils/saveUserToDB";

const SignIn = () => {

    const navigate = useNavigate();

    const { logInUser, signInWithGoogle, signInWithMicrosoft } = useContext(UserContext);
    const [isSignIn, setIsSignIn] = useState(false);

    const handleSubmit = (e) => {
        setIsSignIn(true);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then(res => {
                if (res?.user) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        text: "You are successfully signed in!",
                        showConfirmButton: false,
                        timer: 2000,
                        color: "green"
                    });
                    navigate("/");
                    setIsSignIn(false);
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


    //Google login
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(res => {
                if (res?.user) {
                    const user = {
                        name: res?.user?.displayName,
                        email: res?.user?.email,
                        phone: '',
                        role: "user",
                    }

                    saveUserToDB(user);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        text: "You are successfully signed in!",
                        showConfirmButton: false,
                        timer: 2000,
                        color: "green"
                    });
                    navigate("/");
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

    //Microsoft login
    const handleMicrosoftLogin = () => {
        signInWithMicrosoft()
            .then(res => {
                if (res?.user) {
                    const user = {
                        name: res?.user?.displayName,
                        email: res?.user?.email,
                        phone: '',
                        role: "user",
                    }

                    saveUserToDB(user);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        text: "You are successfully signed in!",
                        showConfirmButton: false,
                        timer: 2000,
                        color: "green"
                    });
                    navigate("/");
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
                    <h3 className='text-center text-4xl font-medium '>Login to your <br /> account</h3>
                    <div className="divider">Or sign in with email</div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control mt-3">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered md:w-80" required />
                        </div>

                        <div className="form-control mt-3">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="******" className="input input-bordered md:w-80" required />

                        </div>

                        <div className="form-control mt-6">
                            <button disabled={isSignIn} className="btn btn-neutral text-white">Sign in {isSignIn && <span className="loading loading-spinner loading-xs"></span>}</button>
                        </div>

                    </form>
                    <div className="divider divider-default">or</div>
                    <p className="text-lg font-semibold mb-3">Continue with: </p>
                    <div className="flex items-center  gap-4">
                        <button onClick={handleGoogleLogin} className="flex items-center gap-2 font-semibold border-2 bg-gray-50 w-1/2 py-2 px-5 rounded-lg"><img className="w-5 h-5" src={google} alt="" />Google</button>
                        <button onClick={handleMicrosoftLogin} className="flex items-center gap-2 font-semibold border-2 bg-gray-50 w-1/2 px-5 py-2 rounded-lg"><img className="w-5 h-5" src={microsoft} alt="" />Microsoft</button>
                    </div>
                    <p className='text-center mt-5  text-[#8A9099]'>Don't have an account? <Link to="/signup" className='text-black hover:underline'>Sign up</Link></p>
                </div>


            </div>
        </div>
    );
};

export default SignIn;