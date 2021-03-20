import React from "react";

const Form = ({ inputText, setInputText, setTodos, todos }) => {
  const inputTextHandler = e => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };

  const submitTodoHandler = e => {
    e.preventDefault();
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
    </form>
  );
};

export default Form;
