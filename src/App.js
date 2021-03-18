import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Todolist from "./Todolist";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <header>
        <h1>Alv's Todo List :) </h1>
      </header>

      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <Todolist todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
