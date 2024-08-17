import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className="footer" id="contact">
            <div className="footer_content">
                <div className="footer_content_left">
                    <img src={assets.logo} alt="" />
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dolor reprehenderit quaerat numquam veritatis sunt
                        minima.
                    </p>
                    <div className="footer_social_icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.facebook_icon} alt="" />
                    </div>
                </div>

                <div className="footer_content_center">
                    <h2>Tasty Bud</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer_content_right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+234-8028-2828-2889</li>
                        <li>tastybud@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer_copyright">
                {' '}
                Copyright &copy; 2024 - All Rights Reserved
            </p>
        </div>
    )
}

export default Footer
