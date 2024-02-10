import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
            <Outlet />
            </main>
            <Footer />   
        </>
    );
};

export default MainLayout;