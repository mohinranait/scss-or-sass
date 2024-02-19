import { FaFilter } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import ReactStars from "react-rating-stars-component";
import star from '../../assets/icons/Star.svg';
import { GoHeart } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
import useGetPublic from "../../hooks/useGetPublic";
import { useNavigate } from "react-router-dom";


const Shop = () => {

    const navigate = useNavigate();

    const [checkedCategories, setCheckedCategories] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [sortCondition, setSortCondition] = useState('');
    const [searchString, setSearchString] = useState('');

    const categories = ["Pant", "Shirt", "T-shirt", "Shoes", "Others"];
    const priceRanges = [{ from: 5, to: 10 }, { from: 15, to: 25 }, { from: 30, to: 40 }, { from: 50, to: "higher" }]

    const handleCheckboxChange = (category) => {
        setCheckedCategories(prevCategories => (
            checkedCategories.includes(category)
                ? prevCategories.filter(c => c !== category)
                : [...prevCategories, category]
        ));
    };

    //Pagination
    const itemPerPage = 6;
    const { data: totalProduct } = useGetPublic(["total-product"], "/api/productCount");
    const totalData = totalProduct?.total || 0;

    const numberOfPages = Math.ceil(totalData / itemPerPage);
    const pages = [...Array(numberOfPages).keys()];

    const { data: products, refetch, isPending } = useGetPublic(["shop-products"], `/api/products?limit=${itemPerPage}&page=${currentPage}&price=${selectedPrice}&categories=${checkedCategories}&sort=${sortCondition}&search=${searchString}`);


    useEffect(() => {
        refetch();
        window.scrollTo(0, 0);
    }, [currentPage, checkedCategories, selectedPrice, sortCondition, searchString])




    return <div className="container mx-auto px-5">
        <div className="drawer lg:drawer-open my-5  lg:my-16">
            <label htmlFor="my-drawer-2" className="drawer-button lg:hidden text-3xl "><FaFilter /></label>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content ml-14">

                {/* Page contents */}

                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">Product List <span className="text-gray-400">({products?.length})</span> </h3>
                    <div>
                        <label htmlFor="sort" className="font-medium mr-4">Sort by</label>
                        <select onChange={(e) => setSortCondition(e.target.value)} className="py-3 px-5 border-2 rounded-lg cursor-pointer font-semibold">
                            <option value="all">All</option>
                            <option value="low">Price(low to high)</option>
                            <option value="high">Price(high to low)</option>
                            <option value="new">New Arrival</option>
                        </select>
                    </div>
                </div>

                {
                    isPending ? <div className="text-center my-20">
                        <span className="loading loading-ball loading-xs"></span>
                        <span className="loading loading-ball loading-sm"></span>
                        <span className="loading loading-ball loading-md"></span>
                        <span className="loading loading-ball loading-lg"></span>
                    </div> : products?.length > 0 ? <div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

                            {
                                products?.map(product => {


                                    const { _id, name, images, customerReviews, regularPrice, discountedPrice } = product;

                                    const totalReview = customerReviews?.reduce((acc, review) => review.rating + acc, 0);
                                    const averageReview = Math.floor(totalReview / customerReviews.length);
                                    const priceDiff = ((regularPrice - discountedPrice) / regularPrice) * 100;
                                    const discountedPercentage = Math.floor((priceDiff * 100) / 100);

                                    return <div key={_id} className=" pb-12">
                                        <div >
                                            <div className=" relative bg-[#E8E8E8] rounded-lg">
                                                <div className="absolute left-0 top-0 flex justify-between items-center w-full px-5 pt-5 overflow-hidden ">
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
                                                <img className="w-full h-64 rounded-lg object-cover" src={images?.[0]} alt="" />
                                            </div>

                                        </div>
                                        <div>
                                            <div>
                                                <h1 className="text-xl text-[#25282e] font-medium  py-2">{name}</h1>
                                                <div >
                                                    {customerReviews.length > 0 ? <div className="flex items-center mb-4">

                                                        <ReactStars
                                                            count={5}
                                                            edit={false}
                                                            value={averageReview}
                                                            size={24}
                                                            activeColor="#F49F00"
                                                        /> <span>({customerReviews.length})</span>
                                                    </div> : <p className="text-sm text-gray-400 font-medium mb-6 mt-2">Not reviewed yet</p>}
                                                </div>
                                                <div className="flex gap-2">
                                                    <h2 className="pb-4 font-bold">${discountedPrice}</h2>
                                                    <h2 className="pb-4 text-gray-400 line-through">${regularPrice}</h2>
                                                </div>
                                                <button onClick={() => navigate(`/product/${_id}`)} className="border-2 flex items-center gap-3 py-3 px-16 rounded-xl hover:bg-[#444852] hover:text-white font-medium text-gray-600 w-full"><FiShoppingCart />View Product</button>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }






                        </div>

                        <div className="text-center mt-14">
                            <div className="join">
                                <button
                                    onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
                                    className="join-item btn" >«</button>
                                {
                                    pages.map(page => <button onClick={() => setCurrentPage(page)} key={page} className={`join-item btn ${currentPage === page && "bg-orange-600 text-white"}`}>{page}</button>)
                                }
                                <button
                                    onClick={() => currentPage < pages.length - 1 && setCurrentPage(currentPage + 1)}
                                    className="join-item btn">»</button>
                            </div>
                        </div>


                    </div>


                        : <div>
                            <h3 className="text-center my-20 text-gray-400 font-semibold text-4xl">No product found!</h3>
                        </div>
                }










            </div>



            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-72 min-h-full border-r-2 bg-white">
                    <div className="flex items-center gap-6">
                        <p className=" text-4xl bg-[#1514140F] p-4 rounded-full inline-block "><CiFilter /></p>
                        <p className="text-xl font-semibold ">Filter</p>
                    </div>

                    <div>
                        <input onChange={(e) => setSearchString(e.target.value)} type="search" name="shopSearch" id="shopSearch" className="border-2 my-10 border-slate-400 outline-none rounded-md  py-3 px-5 w-full font-semibold text-black placeholder:text-gray-400" placeholder="Search..." />
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold">Product Type</h3>
                        <div className=" mt-5">
                            {
                                categories.map(c => {
                                    return <div key={c} className={`flex items-center gap-2 text-lg mt-5 font-medium ${checkedCategories?.includes(c) ? "text-primary" : "text-[#979797]"}`}>
                                        <input onChange={() => handleCheckboxChange(c)} type="checkbox" className="checkbox checkbox-primary" />
                                        <span>{c}</span>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-2xl font-semibold">Price</h3>

                        <div>
                            {
                                priceRanges.map(prices => {
                                    return <div key={prices.from} className="flex items-center gap-3 text-lg mt-5 font-medium">
                                        <input onChange={() => setSelectedPrice([prices.from, prices.to])} type="radio" name="price" className="radio radio-primary" />
                                        <span>{prices.from} - {prices.to}</span>
                                    </div>
                                })
                            }
                        </div>


                    </div>
                </ul>

            </div>
        </div>
    </div>

};

export default Shop;