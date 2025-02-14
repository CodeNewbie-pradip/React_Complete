import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

const TodoList = ({todoItems}) => {
  return (
    <div>
      <div className="item-container">
        {todoItems.map((item)=>(
        <TodoItem 
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}>
          </TodoItem>
        ))}
        </div>
    </div>
  );
}

export default TodoList;
