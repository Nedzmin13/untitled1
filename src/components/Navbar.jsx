import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleLogoClick = () => {
        closeMenu();

        if (window.location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };


    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { label: "Home", path: "/" },
        { label: "Servizi", path: "/servizi" },
        { label: "Portfolio", path: "/portfolio" },
        { label: "Perché Scegliere Me", path: "/perche-scegliere-me" },
        { label: "Contatti", path: "/contatti" }
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
                    CodeNed
                </Link>

                <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                </button>

                <ul className={isMenuOpen ? "navbar-menu active" : "navbar-menu"}>
                    {menuItems.map((item, index) => (
                        <li
                            key={item.label}
                            style={{ transitionDelay: isMenuOpen ? `${index * 0.08 + 0.3}s` : '0s' }}
                        >
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => isActive ? 'nav-link-active' : ''}
                                onClick={closeMenu}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;