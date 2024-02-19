import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';



export const axiosSecure = axios.create({
    baseURL: "http://localhost:9000"
});

const useAxiosSecure = () => {

    const { logOutUser } = useContext(UserContext);
    const navigate = useNavigate();

    //Request interceptor
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem("access-token");
        config.headers.authentication = token
        return config;
    }, function (error) {

        return Promise.reject(error);
    });

    //Response interceptor
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (error.response?.status === 401 || error.response?.status === 403) {
            navigate("/signin");
            logOutUser();
        }

    });

    return axiosSecure;
}

export default useAxiosSecure