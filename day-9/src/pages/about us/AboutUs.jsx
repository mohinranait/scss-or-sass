import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div>
            <div className="md:w-[1240px] grid  md:grid-cols-2 items-center">
                <div className=" text-center ">
                    <h1 className="text-3xl font-bold pb-2">Welcome to In Our <span className="text-orange-600">About Us</span> </h1>
                    <Link to="/">
                        <button className="bg-orange-400 w-[200px] px-8 py-3 hover:bg-orange-600 text-white rounded-lg">Got to Home</button>
                    </Link>
                </div>
                <video className="h-96 w-full my-12" src="https://player.vimeo.com/external/406219400.sd.mp4?s=2b1972bcc84bd7ced679bbad1ce62af8acd99d53&profile_id=164&oauth2_token_id=57447761" muted autoPlay loop >
                </video>

            </div>

            <div>
                <div className="bg-[#020211] py-6 my-12">
                    <div className="hero-content px-16 grid gap-16 md:grid-cols-2">
                        <img  src="https://i.ibb.co/9nkb8yz/Group-427320669-1.png" className="  rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-2xl font-medium text-orange-600 pb-2">Smart Life</h1>
                            <h1 className="text-5xl text-white font-bold">With Smart Shoes</h1>
                            <p className=" text-[#ffffffcd] py-6">Smart shoes often come with built-in sensors that can track various activities such as steps taken, distance traveled, and calories burned. This data is usually synced with a mobile app or other devices for comprehensive health tracking. Smart shoes are powered by batteries, and users need to recharge them periodically. The battery life varies depending on the features and usage patterns.</p>
                            <button className="btn w-[220px] hover:bg-orange-600 hover:border-orange-600 hover:text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;