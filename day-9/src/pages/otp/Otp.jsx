import { Link } from "react-router-dom";


const Otp = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="hero min-h-screen px-12 bg-base-200">
                    <div className="hero-content gap-16 flex-col lg:flex-row-reverse">
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="">
                                    <h1 className="text-4xl text-center pb-5 font-bold">OTP</h1>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">put your otp</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full mt-10">
                                    <Link to="/"><button className="btn w-full btn-primary">Confirm</button></Link>
                                </div>
                            </form>
                        </div>
                        <div className="text-center w-full items-center flex gap-4 lg:text-left">
                            <img src="https://i.ibb.co/8b3mhtJ/image-887-1.png" alt="" />
                            <h1 className="text-5xl font-bold">Online Shop</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Otp;