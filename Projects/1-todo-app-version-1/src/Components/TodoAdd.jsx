import React from 'react'

const TodoAdd = () => {
  return (
    <div className="text-container">
          <div className="row">
            <div className="col-6">
              <input type="text" placeholder="Enter Todo here" />
            </div>
            <div className="col-4">
              <input type="date" placeholder="dd/mm/yyyy" />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-success">
                Add
              </button>
            </div>
          </div>
        </div>
  )
}

export default TodoAdd;