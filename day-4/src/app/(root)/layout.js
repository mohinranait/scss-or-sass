import Footer from '@/shared/Footer';
import Header from '@/shared/Header';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />   
        </>
    );
};

export default MainLayout;