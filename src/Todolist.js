import React from "react";
import Todo from "./Todo";

const Todolist = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <Todo
            text={todo.text}
            key={todo.id}
            setTodos={setTodos}
            todo={todo}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
