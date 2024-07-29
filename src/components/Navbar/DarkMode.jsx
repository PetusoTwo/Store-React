import React, { useState, useEffect } from 'react';
import Darkpng from '../../assets/imgsWeb/dark.png';
import Lightpng from '../../assets/imgsWeb/light.png';

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className='relative'>
            <img 
                src={Lightpng}
                alt="LightTheme"
                className={`w-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] transition-all right-0 z-10 absolute hover:scale-110 duration-300 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
                onClick={toggleTheme}
            />
            <img 
                src={Darkpng}
                alt="DarkTheme"
                className={`w-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] duration-300 hover:scale-110 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
                onClick={toggleTheme}
            /> 
        </div>
    );
};

export default DarkMode;
