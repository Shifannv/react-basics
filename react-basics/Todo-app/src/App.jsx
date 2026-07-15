import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [editingIndex, setEditingIndex] = useState(null);
  const [task, setTask] = useState("");
  const [items, setItems] = useState(() => {
    //get items in localstorage
    const savedItems = localStorage.getItem("todos");
    if (savedItems) {
      return JSON.parse(savedItems);
    }
    return [];
  });
  //storeitems to localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);
  // deletetodo
  const deleteTodo = (index) => {
    setItems((prev) => prev.filter((item, i) => i !== index));
  };
  // editTodo
  const editTodo = (index, newTask) => {
    setItems((prev) =>
      prev.map((item, i) => {
        if (i == index) {
          return newTask;
        }
        return item;
      }),
    );
  };
  return (
    <div className="container">
      <div className="todo-card">
        <h1>TODO APP</h1>
        <div className="group">
          <TodoForm
            setItems={setItems}
            task={task}
            setTask={setTask}
            editingIndex={editingIndex}
            setEditingIndex={setEditingIndex}
            editTodo={editTodo}
          />
          <TodoList
            items={items}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            setTask={setTask}
            setEditingIndex={setEditingIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
