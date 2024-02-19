import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Discount = () => {

    //Initiate AOS
    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])





    return (

        <div className=" my-20 flex flex-col md:flex-row items-center lg:h-[450px] px-5 lg:space-x-11">
            <div className="w-full lg:w-2/5 bg-cover bg-center h-full" style={{ backgroundImage: 'url(https://i.ibb.co/DbVLCc3/Group-427320575.png)' }}>
                <h1 className="text-3xl p-5 lg:p-0 md:text-6xl lg:text-7xl uppercase font-bold text-[#0A0937] ">THE BIGGEST DISCOUNT JUST FOR YOU</h1>
            </div>

            <div data-aos="fade-left" className="w-full lg:w-3/5 h-full">
                <img className="w-full h-full" src="https://i.ibb.co/Cnf76XP/Group-427320662.png" alt="" />
            </div>
        </div>



    );
};

export default Discount;