import React from 'react'
import styles from './Display.module.css'

const Display = ({calVal}) => {
  return (
    <input 
    className={styles.display} 
    type='text' 
    placeholder='Enter number'
    value={calVal}
    readOnly
    ></input>
  )
}

export default Display