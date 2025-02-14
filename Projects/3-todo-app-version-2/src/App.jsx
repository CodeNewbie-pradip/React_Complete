import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppName from "./Components/AppName";
import TodoAdd from "./Components/TodoAdd";
import TodoList from "./Components/TodoList";

function App() {
  let todoItems=[{
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

  return (
    <div>
      <center className='todo-container'>
        <AppName/>
        <TodoAdd/>
        <TodoList todoItems={todoItems}/>
      </center>
    </div>
  );
}

export default App;
