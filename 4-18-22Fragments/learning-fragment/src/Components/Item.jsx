import React from 'react';
import styles from './Item.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({ foodItems, bought, handleBuyButtonClicked }) => {
  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${
        bought ? "active" : ""
      }`}
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <span className={styles["kg-span"]} style={{ marginRight: "auto" }}>
        {foodItems}
      </span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButtonClicked}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;