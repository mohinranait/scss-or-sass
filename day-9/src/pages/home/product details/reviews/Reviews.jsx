import { useState } from "react";
import ReactStars from "react-rating-stars-component";

const Reviews = ({ product }) => {
    const { customerReviews } = product;

    //Pagination
    const [currentPage, setCurrentPage] = useState(0);
    const itemPerPage = 5;
    const totalItem = customerReviews?.length;

    const numberOfPages = Math.ceil(totalItem / itemPerPage);

    const pages = [...Array(numberOfPages).keys()];
    const skip = currentPage * itemPerPage;

    const currentReviews = customerReviews?.slice(skip, skip + itemPerPage);







    return <div >
        <h3 className='text-[#20252C] text-3xl font-medium'>All Reviews ({customerReviews?.length})</h3>

        <div className=' mt-16'>
            {
                currentReviews?.map(review => {
                    return <div key={review.reviewAt} className='border-b mb-5 pb-8 border-[#D8D8DA] grid md:grid-cols-5 items-center'>
                        <div>
                            <p className='text-lg font-medium'>{review?.name}</p>
                            <p className='text-lg font-medium mt-8'>
                                <span>{review.rating} </span> <span className='text-[#ADADAD]'>/ 5</span>

                                <ReactStars
                                    count={5}
                                    edit={false}
                                    value={parseFloat(review.rating)}
                                    size={24}
                                    activeColor="#F49F00"
                                />
                            </p>
                        </div>

                        <div className="md:col-span-3">
                            <h3 className="text-2xl font-medium mb-3">{review.title}</h3>
                            <p className="text-gray-500">{review.description}</p>
                        </div>

                        <div className=" flex items-end h-full justify-end">
                            <p className="text-gray-500">{review.reviewAt.split("T")[0]}</p>
                        </div>
                    </div>
                })
            }


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





    </div>
}

export default Reviews