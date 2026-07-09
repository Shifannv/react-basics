import { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import todoReducer from "./reducers/todoReducer";
function App() {
const [state, dispatch] = useReducer()=({
 },[""])
 
 todoReducer()
  return (
    <div className="container">
      <h2>TODO App</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
