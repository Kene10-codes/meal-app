import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Navbar from './components/Navbar/Navbar'
import Order from './pages/Order/Order'

const App = () => {
    const [showLogin, setShowLogin] = useState(false)
    return (
        <>
            <div className="app">
                {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : ''}
                <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order" element={<Order />} />
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default App
