import React from "react";
import Todo from "./Todo";

const Todolist = ({ todos, setTodos }) => {
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <Todo text={todo.text} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
