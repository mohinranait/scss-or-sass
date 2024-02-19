import { useState } from "react"
import star from '../../../../assets/icons/Star.svg'
import { GoHeart } from "react-icons/go";




const Slider = ({ product }) => {

    const { images, regularPrice, discountedPrice } = product;

    const [currentImage, setCurrentImage] = useState(images[0])

    const priceDiff = ((regularPrice - discountedPrice) / regularPrice) * 100;
    const discountedPercentage = Math.floor((priceDiff * 100) / 100);


    return <div>
        <div className="relative">
            <div className="absolute left-0 top-0 flex justify-between  items-center w-full px-5 pt-5 overflow-hidden ">
                {
                    discountedPercentage > 0 && <div style={{ backgroundImage: `url(${star})` }} className=" w-16 h-16 flex justify-center items-center bg-cover">
                        <span className=" text-white font-semibold">-{discountedPercentage}%</span>
                    </div>
                }

                <div className="w-12 h-12 pt-3 pl-3 rounded-full bg-gray-200 bg-opacity-40">
                    <button>
                        <GoHeart className="text-2xl text-black" />
                    </button>
                </div>
            </div>
            <div className="h-[400px] w-full overflow-hidden shadow-xl rounded-xl">
                <img className="h-full w-full object-contain " src={currentImage} alt="" />
            </div>
        </div>

        <div className=" my-10 grid grid-cols-5 gap-6">
            {
                images?.map(image => <button onClick={() => setCurrentImage(image)} className={`w-full h-full ${currentImage === image && "border-2 border-orange-500"} rounded-lg`} key={image}><img className="w-full h-16 md:h-28 rounded-lg" src={image} alt="" /></button>)
            }
        </div>
    </div>

}

export default Slider