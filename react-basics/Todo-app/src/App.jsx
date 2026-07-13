import { useState } from 'react';
import './App.css'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  const [items, setItems] = useState(["hello", "todo", "again"]);

  return (
    <div className="container">
    <div className='todo-card'>
      <h1>TODO APP</h1>
      <div className='group'>   
      <TodoForm  setItems={setItems} />
      <TodoList items={items}/>
      </div>
    </div>
    </div>
  );
}

export default App;
