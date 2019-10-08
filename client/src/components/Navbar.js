import React from 'react';
import useDarkMode from '../hooks/darkMode';

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <nav data-testid='nav' className="navbar">
            <h1>Women's Football Players</h1>
            <div className="dark-mode__toggle">
                <div
                    data-testid='navButton'
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    )
}

export default NavBar;