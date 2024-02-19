import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from './useAxiosPublic'



const useGetPublic = (queryKey, url) => {

    const axiosPublic = useAxiosPublic();

    const { data, refetch, isPending, isError } = useQuery({
        queryKey: queryKey,
        queryFn: async () => {
            const result = await axiosPublic.get(url);
            return result.data;
        }
    });


    return { data, refetch, isPending, isError }

}

export default useGetPublic