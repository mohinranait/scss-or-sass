import { Link, NavLink, Outlet } from "react-router-dom"
import image from "../../../public/image/logo.png"
import AdminHome from "./AdminHome";

const Dashboard = () => {

    // TODO: 
    const isAdmin = true;

    return (
        <div className="md:flex container mx-auto">
            <div className="w-64 md:min-h-screen bg-[#e8e8e8]">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <div className='flex pb-2 items-center gap-3 text-black'>
                                <img className=' h-12 rounded-full w-12' src={image} alt="" />
                                <h3 className=' text-xl font-kaushan'>Online Shop</h3>
                            </div>
                            <li className="bg-[#ffffff] dash-item rounded-md mb-2 hover:bg-white font-medium text-[#000000] hover:text-black"><NavLink to="/dashboard/adminhome">Admin Home</NavLink></li>
                            <li className="bg-[#ffffff] dash-item rounded-md mb-2 hover:bg-white font-medium text-[#000000] hover:text-black"><NavLink to="/dashboard/allusers">All Users</NavLink></li>
                            <li className="bg-[#ffffff] dash-item rounded-md mb-2 hover:bg-white font-medium text-[#000000] hover:text-black"><NavLink to="/dashboard/paymenthhistory">Payment History</NavLink></li>
                            <li className="bg-[#ffffff] dash-item rounded-md mb-2 hover:bg-white font-medium text-[#000000] hover:text-black"><NavLink to="/dashboard/manageitems">Manage items</NavLink></li>
                            <li className="bg-[#ffffff] dash-item rounded-md mb-2 hover:bg-white font-medium text-[#000000] hover:text-black"><NavLink to="/dashboard/additems">Add Items</NavLink></li>
                        </> :
                            <>
                                {/*  */}
                            </>
                    }
                    <div className="py-4 pb-6">
                        <hr />
                    </div>
                    <li className="bg-[#ffffff] rounded-md mb-2 hover:bg-white font-medium text-[#000000] hover:text-black"><NavLink to="/">Home</NavLink></li>
                    <li className="bg-[#ffffff] rounded-md mb-2 hover:bg-white font-medium text-[#000000] hover:text-black"><NavLink to="/tours">Shop</NavLink></li>
                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default Dashboard