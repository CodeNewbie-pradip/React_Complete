import React from 'react'

const TodoItem = ({todoName, todoDate, onDeleteClick}) => {
  return (
    <div>
      <div className="row">
        <div className="col-6 name">{todoName}</div>
        <div className="col-4 date">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick={()=>onDeleteClick(todoName)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem