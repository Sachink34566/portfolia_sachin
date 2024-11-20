import React, { useState, useEffect } from "react";
import { FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import './styles.css';

const data = [
    { label: 'HOME', to: '/' },
    { label: 'ABOUT', to: '/about' },
    { label: 'RESUME', to: '/resume' },
    { label: 'SKILLS', to: '/skills' },
    { label: 'PORTFOLIO', to: '/portfolio' },
    { label: 'CONTACT', to: '/contact' },
];

const Navbar = () => {
    const styles = {
        logoContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.8em',
            fontWeight: '600',
            textTransform: 'uppercase',
        },
        icon: {
            fontSize: '2em',
            color: '#61dafb', // A color inspired by React's logo or your branding color
        },
    };
    const [toggleIcon, setToggleIcon] = useState(false);
    const location = useLocation(); // To track location changes

    // Handle toggle click
    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    // Close menu on link click (for mobile view)
    const closeMenu = () => {
        setToggleIcon(false);
    };

    // Reset the toggle state when the route changes (e.g., navigating to a different page)
    useEffect(() => {
        setToggleIcon(false); // Reset the toggle state when navigating to a new page
    }, [location]); // This effect runs every time the location (route) changes

    return (
        <div className="navbar">
            <div className="navbar_container">
                <Link to={'/'} className="navbar_container_logo">
                    <div style={styles.logoContainer}>
                        <span style={styles.icon}>{"<>"}</span>
                        <span></span> {/* Replace 'YN' with your initials */}
                    </div>
                </Link>
                <ul className={`navbar_container_menu ${toggleIcon ? 'active' : ''}`}>
                    {data.map((item, key) => (
                        <li key={key} className="navbar_container_menu_item">
                            <Link 
                                className="navbar_container_menu_item_links" 
                                to={item.to} 
                                onClick={closeMenu}  // Close the menu when a link is clicked
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
