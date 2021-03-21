import React from "react";

const Form = ({
  inputText,
  setInputText,
  setTodos,
  todos,
  status,
  setStatus,
}) => {
  const statusHandler = e => {
    setStatus(e.target.value);
  };
  const inputTextHandler = e => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = e => {
    e.preventDefault();
    //e.target.value is not working so I used this one.
    if (e.target.parentElement.previousSibling.defaultValue === "") {
      alert("Todo list is empty!");
    } else {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
    }
    //console.log(e.target.parentElement.previousSibling.defaultValue);
  };

  return (
    <form className="form">
      <input
        type="text"
        required
        className="inputText"
        onChange={inputTextHandler}
        value={inputText}
      />
      <button type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
