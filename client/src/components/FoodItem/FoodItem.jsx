import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

import './FoodItem.css'

const FoodItem = ({ id, price, image, description, name }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
    return (
        <div className="food_item">
            <div className="food_item_image_container">
                <img src={image} alt="" className="food_item_image" />
                {!cartItems[id] ? (
                    <img
                        className="add"
                        onClick={() => addToCart(id)}
                        src={assets.add_icon_white}
                    />
                ) : (
                    <div className="food_item_counter">
                        <img
                            onClick={() => removeFromCart(id)}
                            src={assets.remove_icon_red}
                        />
                        <p>{cartItems[id]}</p>
                        <img
                            onClick={() => addToCart(id)}
                            src={assets.add_icon_green}
                        />
                    </div>
                )}
            </div>
            <div className="food_item_info">
                <div className="food_item_rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food_item_desc">{description}</p>
                <p className="food_item_price">${price}.00</p>
            </div>
        </div>
    )
}

export default FoodItem
