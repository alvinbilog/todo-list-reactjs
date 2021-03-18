import React from "react";

const Form = ({ inputText, setInputText, setTodos, todos }) => {
  const inputTextHandler = e => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = e => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form className="form">
      <input
        type="text"
        className="inputText"
        onChange={inputTextHandler}
        value={inputText}
      />
      <button type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default Form;
