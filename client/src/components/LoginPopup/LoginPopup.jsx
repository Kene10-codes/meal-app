import React, { useState } from 'react'
import { assets } from '../../assets/assets'

import './LoginPopup.css'

const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState('Sign Up')
    return (
        <div className="login_popup">
            <form className="login_popup_container">
                <div className="login_popup_title">
                    <h2>{currentState}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt=""
                    />
                </div>
                <div>
                    <form action="">
                        {currentState === 'Log In' ? (
                            <></>
                        ) : (
                            <input type="text" placeholder="Name" required />
                        )}

                        <input type="email" placeholder="Email" required />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                        />
                        <button>
                            {currentState === 'Sign Up'
                                ? 'Create Account'
                                : 'Log In'}
                        </button>
                        <div className="login_popup_condition">
                            <input type="checkbox" name="" id="" />
                            <p>
                                By continuing, I agree to the terms of use of
                                privacy
                            </p>
                        </div>
                        {currentState === 'Log In' ? (
                            <p>
                                Create a new Account?{' '}
                                <span
                                    onClick={() => setCurrentState('Sign Up')}
                                >
                                    Click Here
                                </span>
                            </p>
                        ) : (
                            <p>
                                Already Have Account?{' '}
                                <span onClick={() => setCurrentState('Log In')}>
                                    Log In
                                </span>
                            </p>
                        )}
                    </form>
                </div>
            </form>
        </div>
    )
}

export default LoginPopup
