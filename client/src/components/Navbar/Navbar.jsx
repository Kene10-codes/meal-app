import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets.js'

const Navbar = () => {
    const [menu, setMenu] = useState('home')
    return (
        <div className="navbar">
            <img src={assets.logo} alt="Tomato" className="navbar_logo" />
            <ul className="navbar_items">
                <li
                    onClick={() => setMenu('home')}
                    className={menu == 'home' ? 'active' : 'null'}
                >
                    Home
                </li>
                <li
                    onClick={() => setMenu('menu')}
                    className={menu == 'menu' ? 'active' : 'null'}
                >
                    Menu
                </li>
                <li
                    onClick={() => setMenu('contact')}
                    className={menu == 'contact' ? 'active' : 'null'}
                >
                    Contact
                </li>
                <li
                    onClick={() => setMenu('mobile-app')}
                    className={menu == 'mobile-app' ? 'active' : 'null'}
                >
                    Mobile-app
                </li>
            </ul>

            <div className="search">
                <img src={assets.search_icon} alt="Search Icon" />
                <div className="navbar_search_icon">
                    <img src={assets.basket_icon} alt="Cart Icon" />
                    <div className="dot"></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar
