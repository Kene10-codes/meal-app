import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Cart.css'

const Cart = () => {
    const { cartItems, food_list, removeFromCart } = useContext(StoreContext)
    console.log(food_list)
    return (
        <div className="cart">
            <div className="cart_items">
                <div className="cart_items_title">
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
                                <p>{item.price * cartItems[item._id]}</p>
                                <p
                                    onClick={() => removeFromCart(item._id)}
                                    className="cross"
                                >
                                    x
                                </p>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="cart_bottom">
                <div className="cart_total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart_total_details">
                            <p>Sub Total</p>
                            <p>{0}</p>
                        </div>
                        <hr />
                        <div className="cart_total_details">
                            <p>Delivery</p>
                            <p>{2}</p>
                        </div>
                        <hr />
                        <div className="cart_total_details">
                            <p>Total</p>
                            <p>{0}</p>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="cart_promocode">
                        <div>
                            <p>If you have a promo code, Enter it here</p>
                            <div className="cart_promoode_input">
                                <input
                                    type="text"
                                    placeholder="Enter Promo Code"
                                    name=""
                                    id=""
                                />
                                <button>Submit </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
