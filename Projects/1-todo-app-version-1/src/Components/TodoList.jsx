import React from 'react';

const TodoList = () => {
  return (
    <div>
      <div className="row mb-3">
        <div className="col-6">Buy milk</div>
        <div className="col-4">4/12/2024</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-6">Go to college</div>
        <div className="col-4">4/10/2023</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
