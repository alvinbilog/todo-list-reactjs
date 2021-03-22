import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import Todolist from "./Todolist";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //filtering completed, all and uncomplete
  const filterHandler = () => {
    if (status === "completed") {
      setFilteredTodos(todos.filter(todo => todo.completed === true));
    } else if (status === "uncompleted") {
      setFilteredTodos(todos.filter(todo => todo.completed === false));
    } else {
      setFilteredTodos(todos);
    }
  };

  //Save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  //get from local
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));

      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Todo List </h1>
      </header>

      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      <Todolist
        className="Todolist"
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default App;
