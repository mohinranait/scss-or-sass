import { Link } from "react-router-dom"
import icon1 from "../../../public/image/icon1.png"
import icon2 from "../../../public/image/icon2.png"
import icon3 from "../../../public/image/icon3.png"
import icon4 from "../../../public/image/icon4.png"


const AdminHome = () => {
    return (
        <div>
            <div className="md:flex m-12 gap-12">
                <div className=" md:mb-0 mb-3 bg-white md:p-6 p-2 rounded-xl shadow-xl text-center justify-center">
                    <img className="text-center justify-center pl-5" src={icon1} alt="" />
                    <h1 className="text-xl pt-1 font-bold">300.00</h1>
                    <h1 className="font-medium">Total Revenue</h1>
                </div>
                <Link to="/dashboard/allusers">
                    <div className=" md:mb-0 mb-3 bg-white p-6 rounded-xl shadow-xl text-center justify-center">
                        <img className="text-center justify-center pl-5" src={icon4} alt="" />
                        <h1 className="text-xl pt-1 font-bold">30</h1>
                        <h1 className="font-medium">Total Users</h1>
                    </div></Link>
                <div className=" md:mb-0 mb-3 bg-white p-6 rounded-xl shadow-xl text-center justify-center">
                    <img className="text-center justify-center pl-5" src={icon2} alt="" />
                    <h1 className="text-xl pt-1 font-bold">20</h1>
                    <h1 className="font-medium">Total items</h1>
                </div>
                <div className=" bg-white p-6 rounded-xl shadow-xl text-center justify-center">
                    <img className="text-center justify-center pl-5" src={icon3} alt="" />
                    <h1 className="text-xl pt-1 font-bold">120.00</h1>
                    <h1 className="font-medium">Total Order</h1>
                </div>
            </div>
        </div>
    )
}

export default AdminHome