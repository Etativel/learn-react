import { useState } from "react";
import "./App.css";

function DeleteTodo({ index, onDelete }) {
  function handleClick() {
    onDelete(index);
  }
  return <button onClick={handleClick}>Delete</button>;
}

function TodoList({ todo, onDelete }) {
  return (
    <ul>
      {todo.map((todo, index) => (
        <li key={index}>
          {index + 1}. {todo}
          <DeleteTodo index={index} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

function App() {
  const todoStorage = JSON.parse(localStorage.getItem("todo")) || [];
  const [todo, setTodo] = useState(todoStorage);

  function addTodo() {
    const newTodo = document.querySelector(".todoInput").value;
    if (newTodo) {
      const updateTodo = [...todo, newTodo];
      setTodo(updateTodo);
      localStorage.setItem("todo", JSON.stringify(updateTodo));
      document.querySelector(".todoInput").value = "";
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addTodo();
    }
  }

  function deleteTodo(index) {
    const updatedTodo = todo.filter((_, i) => i !== index);
    setTodo(updatedTodo);
    localStorage.setItem("todo", JSON.stringify(updatedTodo));
  }

  return (
    <>
      <h1>To Do List:</h1>
      <input
        type="text"
        placeholder="add todo"
        className="todoInput"
        onKeyDown={handleKeyDown}
      />
      <button type="submit" onClick={addTodo}>
        Add
      </button>
      <br />
      <TodoList todo={todo} onDelete={deleteTodo} />
    </>
  );
}

export default App;
