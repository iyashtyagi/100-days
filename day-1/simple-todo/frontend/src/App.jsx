import { useState } from "react";
import {CreateTodo} from "./components/CreateTodo"
import {Todos} from "./components/todos"

function App(){
  const [todos, setTodos] = useState([]);


  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App;