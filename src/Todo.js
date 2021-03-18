import React from "react";

const Todo = ({ text, setTodos, todo, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map(item => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
        <button type="check" onClick={completeHandler}>
          <i className="fas fa-check"></i>
        </button>
        <button type="delete" onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    </div>
  );
};

export default Todo;
