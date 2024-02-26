"use client";
import { ThemeProvider } from 'next-themes';
import React, { useEffect, useState } from 'react';

const Provider = ({children}) => {

    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    }, [])

    if(!mounted){
        return <>{children}</>;
    }

    return (
        <div>
           <ThemeProvider attribute='class'>{children}</ThemeProvider> 
        </div>
    );
};

export default Provider;