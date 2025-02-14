import React from 'react'
import styles from './ButtonContainer.module.css'

const ButtonContainer = () => {
  const buttonContainer=['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

    return (
    <div className={styles.buttonContainer}>
        {buttonContainer.map((button)=>(
            <button className={styles.button}>{button}</button>
        ))}
    </div>
  );
}

export default ButtonContainer