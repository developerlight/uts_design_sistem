"use client";

import styles from './stylemodule/layout.module.css';
import { useState } from 'react';

const Layout = ({ children }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (showDropdown) setShowDropdown(false); // Tutup dropdown jika burger terbuka
    };

    return (
        <div className={styles.layout}>
            <header className={styles.navbar}>
                <div className={styles.logo}>
                    <img src="#" alt="Logo" />
                    <span>AR</span>
                </div>
                <div className={styles.burger} onClick={toggleMenu}>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                </div>
                <nav className={`${styles.navItems} ${menuOpen ? styles.navOpen : ''}`}>
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li className={styles.dropdownContainer}>
                            <a href="#" onClick={toggleDropdown}>Componen</a>
                            {showDropdown && (
                                <div className={styles.dropdown}>
                                    <li><a href="container">Container</a></li>
                                    <li><a href="navbar">Navbar</a></li>
                                    <li><a href="button">Button</a></li>
                                    <li><a href="card">Card</a></li>
                                    <li><a href="footer">Footer</a></li>
                                </div>
                            )}
                        </li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
