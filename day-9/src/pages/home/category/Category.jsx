
import shoes from '../../../assets/images/shoes.png';
import tshirt from '../../../assets/images/tshirt.png';
import shirt from '../../../assets/images/shirt.png';
import pant from '../../../assets/images/pant.png';
import { useNavigate } from 'react-router-dom';

const Category = () => {

    const navigate = useNavigate();



    return (
        <div className="px-2">
            <div className=" py-28 " style={{ backgroundImage: 'url(https://i.ibb.co/qWHyd05/Group-427320657.png)' }}>
                <div className=" text-center ">
                    <h1 className="text-3xl pb-2 font-bold text-[#000000]">Shop by Category</h1>
                    <p className="text-gray-950">Shop by category like your mind.</p>
                </div>

                <div className="flex justify-between md:justify-evenly flex-wrap items-center mt-14">

                    <div>
                        <div onClick={() => navigate("/shop")} className=" w-36 h-36 rounded-full border-2 hover:scale-105 transition-all duration-200 cursor-pointer shadow border-white bg-[#CDE9EF] flex items-center justify-center p-6">
                            <img src={shoes} />
                        </div>
                        <h3 className="text-[#1B202E] font-medium text-xl text-center mt-4">Shoes</h3>
                    </div>

                    <div>
                        <div onClick={() => navigate("/shop")} className=" w-36 h-36 rounded-full bg-[#DBDFE5] cursor-pointer border-2 hover:scale-105 transition-all duration-200 shadow border-white flex items-center justify-center p-6">
                            <img src={tshirt} />
                        </div>
                        <h3 className="text-[#1B202E] font-medium text-xl text-center mt-4">T-Shirt</h3>
                    </div>


                    <div>
                        <div onClick={() => navigate("/shop")} className=" w-36 h-36 rounded-full bg-[#F0E3D4] border-2 shadow border-white  cursor-pointer hover:scale-105 transition-all duration-200 flex items-center justify-center p-6">
                            <img src={shirt} />
                        </div>
                        <h3 className="text-[#1B202E] font-medium text-xl text-center mt-4">Shirt</h3>
                    </div>

                    <div>
                        <div onClick={() => navigate("/shop")} className=" w-36 h-36 rounded-full bg-[#FFFFFF] border-2 cursor-pointer hover:scale-105 transition-all duration-200 border-white shadow flex items-center justify-center p-6">
                            <img src={pant} className="h-full" />
                        </div>
                        <h3 className="text-[#1B202E] font-medium text-xl text-center mt-4">Pant</h3>
                    </div>



                </div>

            </div>


        </div>
    );
};

export default Category;


