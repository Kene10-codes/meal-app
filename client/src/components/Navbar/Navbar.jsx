import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets.js'
import { Link } from 'react-router-dom'

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState('home')
    return (
        <div className="navbar">
            <img src={assets.logo} alt="Tomato" className="navbar_logo" />
            <ul className="navbar_items">
                <Link
                    to={'/'}
                    onClick={() => setMenu('home')}
                    className={menu == 'home' ? 'active' : 'null'}
                >
                    Home
                </Link>
                <a
                    href="#menu"
                    onClick={() => setMenu('menu')}
                    className={menu == 'menu' ? 'active' : 'null'}
                >
                    Menu
                </a>
                <a
                    href="#contact"
                    onClick={() => setMenu('contact')}
                    className={menu == 'contact' ? 'active' : 'null'}
                >
                    Contact
                </a>
            </ul>

            <div className="search">
                <img src={assets.search_icon} alt="Search Icon" />
                <div className="navbar_search_icon">
                    <img src={assets.basket_icon} alt="Cart Icon" />
                    <div className="dot"></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar
