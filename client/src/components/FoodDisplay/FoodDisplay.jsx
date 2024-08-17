import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

import './FoodDisplay.css'

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext)
    return (
        <div className="food_display" id="menu">
            <h2>Top Dishes Near You</h2>
            <div className="food_display_list">
                {food_list.map((item, index) => {
                    // console.log(category)
                    if (category === 'All' || category === item.category) {
                        return (
                            <FoodItem
                                key={index}
                                id={item._id}
                                image={item.image}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                category={category}
                            />
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay
