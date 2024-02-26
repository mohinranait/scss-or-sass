"use client";
import { useTheme } from 'next-themes';
import  { useEffect, useState } from 'react';

const ThemeSwitcher = () => {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    }, [])

    if(!mounted){
        return null;
    }

    return (
        <div>
            The current theme is : {theme} <br/>
            <button className='p-2 border mr-2' onClick={() => setTheme("light")}>Light Mode</button>
            <button className='p-2 border mr-2' onClick={() => setTheme("dark")}>Dark Mode</button>
        </div>
    );
};

export default ThemeSwitcher;