import React, { useContext, useRef } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { todoItemsContext } from '../Store/todo-items-store';

const TodoItem = ({todoName, todoDate}) => {
  const {deleteItem}=useContext(todoItemsContext);
  return (
    <div>
      <div className="row">
        <div className="col-6 name">{todoName}</div>
        <div className="col-4 date">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick={()=>deleteItem(todoName)}>
            <AiFillDelete/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem