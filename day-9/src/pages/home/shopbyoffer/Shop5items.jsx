import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Shop5items = () => {

    //Initiate AOS
    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])



    return (
        <div className="px-5 w-full mt-24 grid  lg:grid-cols-4 gap-5  ">
            <div data-aos="fade-right" className="lg:col-span-3">
                <div className="grid md:grid-cols-3 pb-5 gap-5">
                    <div className="text-center md:col-span-2 rounded-[12px] w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/zfJccd1/Rectangle-34624333.png)' }}>
                        <Link to="/shop">
                            <div className="my-20">
                                <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                                <button className="px-4 bg-[#ec711a51] hover:bg-orange-500 text-white py-2 rounded-lg ">Shop Now</button>
                            </div>
                        </Link>
                    </div>
                    <div className="text-center rounded-[12px] w-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/Lv0dpQ9/Rectangle-34624334.png)' }}>
                        <Link to="/shop">
                            <div className="my-20">
                                <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                                <button className="px-4 bg-[#ec711a51] hover:bg-orange-500 text-white py-2 rounded-lg ">Shop Now</button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="grid md:grid-cols-3  gap-5">
                    <div className="text-center rounded-[12px] w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/svYQHdr/Rectangle-34624337.png)' }}>
                        <Link to="/shop">
                            <div className="my-20">
                                <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                                <button className="px-4 bg-[#ec711a51] hover:bg-orange-500 text-white py-2 rounded-lg ">Shop Now</button>
                            </div>
                        </Link>
                    </div>
                    <div className="text-center rounded-[12px] w-full md:col-span-2 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/ZY4WfKw/Rectangle-34624336.png)' }}>
                        <Link to="/shop">
                            <div className="my-20">
                                <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                                <button className="px-4 bg-[#ec711a51] hover:bg-orange-500 text-white py-2 rounded-lg ">Shop Now</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" className="hidden lg:block">
                <div className="text-center rounded-xl w-full h-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/hWjvyh8/Rectangle-34624335.png)' }}>
                    <Link to="/shop">
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                            <button className="px-4 bg-[#ec711a51] hover:bg-orange-500 text-white py-2 rounded-lg ">Shop Now</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Shop5items;