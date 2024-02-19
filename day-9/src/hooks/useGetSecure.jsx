import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { UserContext } from '../context/AuthProvider';


const useGetSecure = (queryKey, url) => {

    const axiosSecure = useAxiosSecure();
    const { loading } = useContext(UserContext);

    const { data, refetch, isPending, isError } = useQuery({
        queryKey: queryKey,
        enabled: !loading,
        queryFn: async () => {
            const result = await axiosSecure.get(url);
            return result.data;
        }
    });


    return { data, refetch, isPending, isError }
}

export default useGetSecure;