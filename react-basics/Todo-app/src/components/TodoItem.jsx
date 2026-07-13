const TodoItem = ({ item }) => {
  return (
    <div className="todo-item" >
    <span >
      {item}
    </span>
    <div className="button-group">
      <button className="black" onClick={() => {editTodo}}>Edit</button>
      <button className="red" onClick={()=> {deleteTodo}}>Delete</button>
    </div>
    </div>
  );
};

export default TodoItem;
