import React from 'react'
import styles from './WelcomeMessage.module.css'

const welcomeMessage = ({todoItems}) => {
    const welcomeMessage=todoItems.length=== 0 ? "welcome to the Todo App" : "You have some todos to complete";
  return (
    <div>
        <p className={styles.welcome}>{welcomeMessage}</p>
    </div>
  )
}

export default welcomeMessage