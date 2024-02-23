
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className='min-h-screen'>
            <Outlet /> 
            </main>  
        </>
    );
};

export default MainLayout;