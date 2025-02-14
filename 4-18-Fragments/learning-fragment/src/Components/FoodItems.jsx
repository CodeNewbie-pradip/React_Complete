import React from 'react'

const FoodItems = ({foodItems}) => {
  return (
    <div>
        <div>Healthy food</div>
            <ul className="list-group">
        {foodItems.map((item, index)=>(
          <li key={index} class="list-group-item">{index} : {item}</li>
        ))}
      </ul>
    </div>
  )
}

export default FoodItems