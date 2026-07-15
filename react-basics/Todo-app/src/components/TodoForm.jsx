function TodoForm({
  setItems,
  task,
  setTask,
  editingIndex,
  setEditingIndex,
  editTodo,
}) { 
  // given a array to  input box to pass task to edit or update
  const addTodo = () => {
    if (task.trim() == "") return;
    if (editingIndex === null) {
      setItems((prev) => [...prev, task]);
    } else {
      // update
      editTodo(editingIndex, task);
      // update
      setEditingIndex(null);
    }
    setTask("");
  };
  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>
        {editingIndex === null ? "Add" : "Update"}
      </button>
    </div>
  );
}

export default TodoForm;
