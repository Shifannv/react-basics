  function TodoItem ({ item,index,deleteTodo,  setTask, setEditingIndex }) {
  //  editing and updatiing
    
  // const handleEdit =()=>{
    //   const updatedTask = prompt("Edit your task", item)
    //    if(!updatedTask)
    //     return ;
    //    editTodo(index ,updatedTask);
    // }

    const handleEdit = () => {
    setTask(item);
    setEditingIndex(index);
}
  return (
    <div className="todo-item" >
    <span >
      {item}
    </span>
    <div className="button-group">
      <button className="black" onClick={handleEdit}>Edit</button>
      <button className="red" onClick={()=> deleteTodo(index)}>Delete</button>
    </div>
    </div>
  );
};

export default TodoItem;
