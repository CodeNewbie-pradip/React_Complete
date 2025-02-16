import React, { useContext } from 'react';
import { todoItemsContext } from '../Store/todo-items-store';
import './TodoList.css';
import TodoItem from './TodoItem';

const TodoList = ({onDeleteClick}) => {
  const contextObj=useContext(todoItemsContext)
  const todoItems=contextObj.todoItems;
  const deleteItem=contextObj.deleteItem;
  
  return (
    <div>
      <div className="item-container">
        {todoItems.map((item)=>(
        <TodoItem 
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={deleteItem}>
          </TodoItem>
        ))}
        </div>
    </div>
  );
}

export default TodoList;
