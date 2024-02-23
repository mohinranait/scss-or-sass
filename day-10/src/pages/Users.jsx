
import { useGetUsersQuery } from '../redux/features/api/baseApi';
import UserCard from '../components/card/UserCard';

const Users = () => {
    const {data:users,isLoading,isError, error} = useGetUsersQuery()
    
    if(isLoading){
        return <div className='text-center text-2xl font-bold text-red-600 mt-4'>Loading...</div>
    }

    return (
        <>
            <section className='mt-4'>
                <div className="container grid grid-cols-4 gap-5">
                    {
                        users?.map(user => <UserCard key={user?._id} user={user} />)
                    }
                </div>
            </section>   
        </>
    );
};

export default Users;