import React from 'react'
import { menu_list } from '../../assets/assets'

import './Menu.css'

const Menu = ({ category, setCategory }) => {
    return (
        <div className="menu" id="menu">
            <h1>Explore our menu</h1>
            <p className="menu_text">
                Choose from a diverse menu featuring a delectable array of
                dishes. Our mission is to satisfy
            </p>
            <div className="menu_list">
                {menu_list.map((menu, index) => (
                    <div
                        className="menu_list_items"
                        key={index}
                        onClick={() =>
                            setCategory((prev) =>
                                prev === menu.menu_name ? 'All' : menu.menu_name
                            )
                        }
                    >
                        <img
                            src={menu.menu_image}
                            alt="Menu image"
                            className={
                                category === menu.menu_name ? 'active' : ''
                            }
                        />
                        <p>{menu.menu_name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu
