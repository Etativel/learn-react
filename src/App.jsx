import { useState } from "react";
import "./App.css";

function DeleteTodo({ id, onDelete }) {
  function handleClick() {
    onDelete(id);
  }
  return <button onClick={handleClick}>Delete</button>;
}

function TodoList({ todo, onDelete }) {
  return (
    <ul>
      {todo.map((todo, index) => (
        <li key={todo.id}>
          {index + 1}. {todo.todo + " "}
          <DeleteTodo id={todo.id} onDelete={onDelete} />
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
    const todoObject = {
      id: crypto.randomUUID(),
      todo: newTodo,
    };
    if (newTodo) {
      const updateTodo = [...todo, todoObject];
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

  function deleteTodo(id) {
    const updatedTodo = todo.filter((todo) => todo.id !== id);
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
