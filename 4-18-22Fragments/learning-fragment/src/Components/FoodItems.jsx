import React from 'react'
import Item from './Item'

const FoodItems = ({foodItems}) => {
  return (
    <div>
        <ul className="list-group-item">
        { foodItems.map((item, index)=>(
          <Item 
            key={index} 
            foodItems={item}>
          </Item>
        ))}
      </ul>
    </div>
  )
}

export default FoodItems