import React from 'react';
import styles from './Item.module.css';

const Item = ({ foodItems }) => {
    const handleBuyButtonClicked=(event)=>{
        console.log(event);
        console.log(`${foodItems} added to cart`);
    }
  return (
    <li 
    className={`${styles['kg-item']} list-group-item`}
    style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
    >
      <span className={styles['kg-span']} style={{ marginRight: 'auto' }}>{foodItems}</span>
      <button 
      className={`${styles.button} btn btn-info`}
      onClick={(event)=>handleBuyButtonClicked(event)}
      >Buy</button>
    </li>
  );
};

export default Item;