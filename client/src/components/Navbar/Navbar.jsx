import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets.js'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext.jsx'

import './Navbar.css'

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState('home')
    const { getTotalCartAmount } = useContext(StoreContext)
    return (
        <div className="navbar">
            <Link to="/">
                {' '}
                <img src={assets.logo} alt="Tomato" className="navbar_logo" />
            </Link>
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
                    <Link to={'/cart'}>
                        {' '}
                        <img src={assets.basket_icon} alt="Cart Icon" />
                    </Link>
                    <div
                        className={getTotalCartAmount() === 0 ? '' : 'dot'}
                    ></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar
