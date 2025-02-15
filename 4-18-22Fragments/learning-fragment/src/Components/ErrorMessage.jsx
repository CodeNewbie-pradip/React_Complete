import React from 'react'

const ErrorMessage = ({foodItems}) => {
  return (
    <div>
        {foodItems.length === 0 && <div>Sorry, no food items available</div>}
    </div>
  )
}

export default ErrorMessage