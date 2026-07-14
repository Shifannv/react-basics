import TodoItem from "./TodoItem";

function TodoList({
  items,
  deleteTodo,
  editTodo,
  setTask,
  setEditingIndex,
}) {
  return (
    <div>
      {items.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          index={index}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          setTask={setTask}
          setEditingIndex={setEditingIndex}
        />
      ))}
    </div>
  );
}

export default TodoList;