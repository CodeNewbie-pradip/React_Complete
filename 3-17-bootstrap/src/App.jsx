import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import first
import "./index.css"; // Your custom styles, if any

function App() {
  return (
    <div>
      <button type="button" class="btn btn-outline-primary">
        Primary
      </button>
      <button type="button" class="btn btn-outline-secondary">
        Secondary
      </button>
      <button type="button" class="btn btn-outline-success">
        Success
      </button>
      <button type="button" class="btn btn-outline-danger">
        Danger
      </button>
      <button type="button" class="btn btn-outline-warning">
        Warning
      </button>
      <button type="button" class="btn btn-outline-info">
        Info
      </button>
      <button type="button" class="btn btn-outline-light">
        Light
      </button>
      <button type="button" class="btn btn-outline-dark">
        Dark
      </button>
    </div>
  );
}

export default App;
