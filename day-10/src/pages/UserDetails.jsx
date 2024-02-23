import React from 'react';
import { useGetUserByIdQuery } from '../redux/features/api/baseApi';
import { useParams } from 'react-router-dom';
import UserCard from '../components/card/UserCard';

const UserDetails = () => {
    const {id} = useParams();
    const {data:user,isLoading} = useGetUserByIdQuery(id)
    console.log(user);
    if(isLoading){
        return <div className='text-center text-2xl font-bold text-red-600 mt-4'>Loading...</div>
    }
    return (
        <div>
           <div className='w-[800px] bg-white mt-4 mx-auto'>
            <UserCard user={user} />
           </div>
        </div>
    );
};

export default UserDetails;