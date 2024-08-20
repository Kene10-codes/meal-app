import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Cart.css'

const Cart = () => {
    const { cartItems, food_list, removeFromCart } = useContext(StoreContext)
    console.log(food_list)
    return (
        <div className="cart">
            <div className="cart_items">
                <div className="cart_items title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remova</p>
                </div>
                <hr />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div
                                className="cart_items_title cart_items_item"
                                key={index}
                            >
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>{item.price}</p>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Cart
