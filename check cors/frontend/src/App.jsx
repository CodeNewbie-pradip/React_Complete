// App.js (Frontend - React.js)
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/requests")
      .then((response) => setRequests(response.data))
      .catch((error)=>console.error("Error fetching data", error));
  }, []);

  const addRequest = () => {
      axios.post("http://localhost:5000/api/requests", {
      name: newRequest,
      status: "Pending",
    })
    .then((response) => {
      setRequests([...requests, response.data]);
      setNewRequest("");
    })
    .catch((error) => console.error("Error adding request", error));
  };

  return (
    <div>
      <h1>Banking Service Requests</h1>
      <ul>
        {requests.map((req) => (
          <li key={req.id}>{req.name} - {req.status}</li>
        ))}
      </ul>
      <input 
        type="text" 
        placeholder="New Request" 
        value={newRequest} 
        onChange={(e) => setNewRequest(e.target.value)} 
      />
      <button onClick={addRequest}>Add Request</button>
    </div>
  );
};

export default App;
