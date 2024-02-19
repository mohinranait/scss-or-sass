import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";


const TshirtTitle = () => {
    return (
        <div>
            <div className="px-5 pb-10 pt-14 flex justify-between items-center">
                <h1 className="text-xl md:text-[28px] font-bold">New Arrival</h1>
                <Link to="/shop"><button className="text-xs md:text-base bg-[#FAFAFA] py-2 hover:bg-blue-600 hover:text-white px-3 md:px-6 rounded-full border-2 border-[#E7E7E8] flex items-center gap-3">View All<SlArrowRight />
                </button></Link>
            </div>
        </div>
    );
};

export default TshirtTitle;