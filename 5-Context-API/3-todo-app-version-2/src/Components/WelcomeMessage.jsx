import React, { useContext} from 'react'
import styles from './WelcomeMessage.module.css'
import { todoItemsContext } from '../Store/todo-items-store';

const welcomeMessage = () => {
  const contextObj=useContext(todoItemsContext);
  const todoItems=contextObj.todoItems;
  
  const welcomeMessage=todoItems.length=== 0 ? "welcome to the Todo App" : "You have some todos to complete";

  return (
    <div>
        <p className={styles.welcome}>{welcomeMessage}</p>
    </div>
  )
}

export default welcomeMessage