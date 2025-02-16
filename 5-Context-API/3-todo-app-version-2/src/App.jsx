import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, {useReducer, useState} from "react";
import AppName from "./Components/AppName";
import TodoAdd from "./Components/TodoAdd";
import TodoList from "./Components/TodoList";
import WelcomeMessage from "./Components/welcomeMessage";
import { TodoItemContextProvider } from "./Store/todo-items-store";

function App() {

  return (
    <TodoItemContextProvider>
      <center className='todo-container'>
        <AppName/>
        <TodoAdd/>
        <WelcomeMessage/>
        <TodoList/>
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
