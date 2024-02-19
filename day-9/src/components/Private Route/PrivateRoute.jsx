import { useContext } from "react"
import { UserContext } from "../../context/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(UserContext);


    if (loading) {

        return <div className='text-center my-20 text-7xl'>
            <span className="loading loading-spinner text-orange-600 w-[80px]"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location?.pathname} to="/signin"></Navigate>
}

export default PrivateRoute