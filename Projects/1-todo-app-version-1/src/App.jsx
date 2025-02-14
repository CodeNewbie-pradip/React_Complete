import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppName from "./Components/AppName";
import TodoAdd from "./Components/TodoAdd";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div>
      <center className='todo-container'>
        <AppName/>
        <TodoAdd/>
        <TodoList/>
        <TodoList/>
      </center>
    </div>
  );
}

export default App;
