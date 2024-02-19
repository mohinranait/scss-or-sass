import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Shared/navbar/Navbar";
import Footer from "../components/Shared/footer/Footer";



const Root = () => {

    const location = useLocation();



    return (
        <div>
            {
                location?.pathname !== "/signup" && location?.pathname !== "/signin" && <Navbar></Navbar>
            }
            <Outlet></Outlet>
            {
                location?.pathname !== "/signup" && location?.pathname !== "/signin" && <Footer></Footer>
            }
        </div>
    );
};

export default Root;