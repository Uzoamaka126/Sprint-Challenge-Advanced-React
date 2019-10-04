import React, { useEffect, useState } from 'react';
import REACTDOM from 'react-dom';

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useState('dark-mode', initialValue);
//    Create a useeffect for the dark mode
    useEffect(() => {
        if(darkMode) {
            document.body.classList.remove('dark-mode')
        } else {
            document.body.classList.add('dark-mode')
        }
    }, [darkMode])
    
    return [darkMode, setDarkMode]
}

export default useDarkMode;