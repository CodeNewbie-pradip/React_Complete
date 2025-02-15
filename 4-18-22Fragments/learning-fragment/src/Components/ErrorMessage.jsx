import React from 'react'

const ErrorMessage = ({foodItems}) => {
  return (
    <div>
        {foodItems.length === 0 && <div>I am still hungry!!!</div>}
    </div>
  )
}

export default ErrorMessage