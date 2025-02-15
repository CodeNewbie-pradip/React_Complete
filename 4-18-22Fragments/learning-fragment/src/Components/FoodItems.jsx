import { useState } from 'react'
import React from 'react'
import Item from './Item'

const FoodItems = ({items}) => {
  let [activeItems, setActiveItems]=useState([]);

  let onBuyButton=(item, event)=>{
     let newItems=[...activeItems, item];
     setActiveItems(newItems);
     console.log(newItems);
  }
  return (
    <ul className="list-group-item">
      {items.map((item)=>(
        <Item 
          key={item} 
          foodItems={item}
          bought={activeItems.includes(item)}
          handleBuyButtonClicked={(event)=>onBuyButton(item, event)}>
        </Item>
      ))}
    </ul>
  )
}

export default FoodItems