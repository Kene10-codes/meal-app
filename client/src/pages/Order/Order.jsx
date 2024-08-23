import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

import './Order.css'

const Order = () => {
    const navigate = useNavigate()
    const { getTotalCartAmount } = useContext(StoreContext)
    return (
        <div>
            <div className="place_order">
                <div className="place_order_left">
                    <p className="title">Delivery Information</p>
                    <div className="multi_fields">
                        <input
                            type="text"
                            className="first_name"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            className="last_name"
                            placeholder="Last Name"
                        />
                    </div>
                    <input type="email" placeholder="Email" className="email" />
                    <input
                        type="text"
                        placeholder="Street"
                        className="street"
                    />
                    <div className="multi_fields">
                        <input
                            type="text"
                            className="city"
                            placeholder="City"
                        />
                        <input
                            type="text"
                            className="state"
                            placeholder="State"
                        />
                    </div>
                    <input
                        type="telephone"
                        className="phone"
                        placeholder="Phone"
                    />
                </div>
                <div className="place_order_right">
                    <div className="cart_total">
                        <h2>Cart Total</h2>
                        <div>
                            <div className="cart_total_details">
                                <p>Sub Total</p>
                                <p>{getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="cart_total_details">
                                <p>Delivery</p>
                                <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
                            </div>
                            <hr />
                            <div className="cart_total_details">
                                <p>Total</p>
                                <p>
                                    {getTotalCartAmount() === 0
                                        ? 0
                                        : getTotalCartAmount() + 2}
                                </p>
                            </div>
                            <button
                                className="cart_total_button"
                                onClick={() => navigate('/order')}
                            >
                                PROCEED TO CHECKOUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order
