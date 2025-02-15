import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, {useState} from "react";
import AppName from "./Components/AppName";
import TodoAdd from "./Components/TodoAdd";
import TodoList from "./Components/TodoList";
import WelcomeMessage from "./Components/welcomeMessage";

function App() {
  let initiaTodoItems=[{
    name:"dairy milk",
    dueDate:"04/02/2023"
  },{
    name:"make Tea",
    dueDate:"04/04/2023"
  },{
    name:"drink tea",
    dueDate:"04/06/2023"
  },{
    name:"go to gym",
    dueDate:"04/08/2023"
  }];

  const [todoItems, setTodoItems]=useState([])

  const onNewItem=(itemNew, itemDueDate)=>{
    console.log(`new item ${itemNew}, Date: ${itemDueDate}`);
    const newTodoItems=[...todoItems, {name:itemNew, dueDate:itemDueDate}];
    setTodoItems(newTodoItems);
  }

  const handleDeleteItems=(todoItemName)=>{
    const newTodoItems=todoItems.filter((item) => item.name!==todoItemName);
    setTodoItems(newTodoItems);
      //console.log(`items delete: ${todoItems}`);
  }

  return (
    <div>
      <center className='todo-container'>
        <AppName/>
        <TodoAdd onNewItem={onNewItem}/>
        <WelcomeMessage todoItems={todoItems}/>
        <TodoList todoItems={todoItems} onDeleteClick={handleDeleteItems} />
      </center>
    </div>
  );
}

export default App;
