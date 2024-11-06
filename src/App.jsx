import { useState } from "react";
import "./App.css";
import Todo from "./exercise/TodoApp";
import BackgroundChanger from "./exercise/BackgroundChanger";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  function changePage(page) {
    setCurrentPage(page);
  }
  return (
    <>
      <button className="btn" onClick={() => changePage("todo")}>
        Todo
      </button>
      <button
        className="btn"
        onClick={() => changePage("changeBackgroundColor")}
      >
        Change Background
      </button>
      {(() => {
        switch (currentPage) {
          case "todo":
            return <Todo />;
          case "changeBackgroundColor":
            return <BackgroundChanger />;
        }
      })()}
    </>
  );
}

export default App;
