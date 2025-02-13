import React from 'react'

    const PLButton = ({onClick, color}) => {
  return (
    <button onClick={onClick} 
    style={
        {
            backgroundColor:color, 
            color:'white', 
            padding:'10px 20px', 
            fontSize:'20px', 
            cursor:'pointer'}}>
                PLButton</button>
  )
}

export default PLButton