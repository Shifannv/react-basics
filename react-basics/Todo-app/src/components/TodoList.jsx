import TodoItem from "./TodoItem";
function TodoList({items}) {

  return (
    <div>
      {items.map((item, index) => (
        <TodoItem id={index} item={item} />
      ))}
    </div>
  );
}
export default TodoList;
