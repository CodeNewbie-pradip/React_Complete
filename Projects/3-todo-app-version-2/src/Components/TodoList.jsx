import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

const TodoList = ({todoItems, onDeleteClick}) => {
  return (
    <div>
      <div className="item-container">
        {todoItems.map((item)=>(
        <TodoItem 
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}>
          </TodoItem>
        ))}
        </div>
    </div>
  );
}

export default TodoList;
