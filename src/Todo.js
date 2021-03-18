import React from "react";

const Todo = ({ text }) => {
  return (
    <div>
      <li>
        {text}
        <button type="check">
          <i className="fas fa-check"></i>
        </button>
        <button type="delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    </div>
  );
};

export default Todo;
