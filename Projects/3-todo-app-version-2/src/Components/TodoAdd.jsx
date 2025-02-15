import React, { useState } from 'react'

const TodoAdd = ({onNewItem}) => {
  const [todoName, setTodoName]=useState("");
  const [dueDate, setDueDate]=useState("");

  const handleNameChange=(e)=>{
    setTodoName(e.target.value);
    }

  const handeDateChange=(e)=>{
    setDueDate(e.target.value);
  }

  const handleButtonClicked=()=>{
    onNewItem(todoName, dueDate);
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
                Add
              </button>
            </div>
          </div>
        </div>
  )
}

export default TodoAdd;