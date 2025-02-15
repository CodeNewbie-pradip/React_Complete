import React from 'react'

const FoodItems = ({foodItems}) => {
  return (
    <div>
        <ul className="list-group-item">
        { foodItems.map((item, index)=>(
          <li key={index} class="list-group-item kg-item"><span className='kg-span'>{index} : {item}</span></li>
        ))}
      </ul>
    </div>
  )
}

export default FoodItems