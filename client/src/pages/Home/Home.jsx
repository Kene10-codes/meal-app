import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {
    const [category, setCategory] = useState('All')
    return (
        <div>
            <Navbar />
            <Header />
            <Menu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} setCategory={setCategory} />
        </div>
    )
}

export default Home
