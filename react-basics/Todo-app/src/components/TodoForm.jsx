import { useState } from "react";

function TodoForm({setItems}) {
  const [task, setTask] = useState("");
  console.log(task);

  const addTodo = () => {
    console.log("clicked add");
  };
  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={()=>setItems(addTodo)}>Add</button>
    </div>
  );
}

export default TodoForm;
