import Header from '@/components/shared/Header';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Header />
            <main className='min-h-screen'>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;