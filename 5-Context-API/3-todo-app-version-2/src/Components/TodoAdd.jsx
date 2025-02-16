import React, { useContext, useState } from 'react'
import { BiMessageAdd } from "react-icons/bi";
import { todoItemsContext } from '../Store/todo-items-store';

const TodoAdd = ({onNewItem}) => {
  const {addNewItem}=useContext(todoItemsContext);

  const [todoName, setTodoName]=useState("");
  const [dueDate, setDueDate]=useState("");

  const handleNameChange=(e)=>{
    setTodoName(e.target.value);
    }

  const handeDateChange=(e)=>{
    setDueDate(e.target.value);
  }

  const handleButtonClicked=()=>{
    addNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  }

  return (
    <div className="text-container">
          <div className="row">
            <div className="col-6">
              <input type="text" value={todoName} placeholder="Enter Todo here" onChange={handleNameChange}/>
            </div>
            <div className="col-4">
              <input type="date" value={dueDate} placeholder="dd/mm/yyyy" onChange={handeDateChange}/>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-success" onClick={handleButtonClicked}>
              <BiMessageAdd />
              </button>
            </div>
          </div>
        </div>
  )
}

export default TodoAdd;