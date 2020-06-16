import React from "react";


function Todo({ todo, toggleComplete, removeTodo }) {

  function handleCheckboxClick(){
    toggleComplete(todo.id);
  }
  function handleRemoveTodo(){
    removeTodo(todo.id);
  }



  return (
    <div style={{ 
      display: "flex",
      justifyContent: "center"}}>
      <input type="checkbox" onClick= {handleCheckboxClick}/>
      <li
        style={{
          color: "white",
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.task}
      </li>
      <button onClick={handleRemoveTodo}>X</button>
    </div>
  );
}

export default Todo;
