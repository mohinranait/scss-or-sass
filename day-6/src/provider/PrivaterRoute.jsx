'use client'
import { useRouter } from 'next/navigation';

import { useSelector } from 'react-redux';

const PrivaterRoute = ({children}) => {
    const router = useRouter()
    const {user}  = useSelector(state => state.user);
    if(user?.email) {
       return  children
    }
    router.push('/login')
};

export default PrivaterRoute;