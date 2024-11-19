import { useState } from "react";
import "./App.css";
import Todo from "./exercise/TodoApp";
import BackgroundChanger from "./exercise/BackgroundChanger";
import FilterableList from "./exercise/textQuery";
import CLassInput from "./exercise/ClassComponent";
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
      <button className="btn" onClick={() => changePage("queryFilter")}>
        Query Filter
      </button>

      <button className="btn" onClick={() => changePage("classComponent")}>
        Class Based Component
      </button>

      {(() => {
        switch (currentPage) {
          case "todo":
            return <Todo />;
          case "changeBackgroundColor":
            return <BackgroundChanger />;
          case "queryFilter":
            return <FilterableList />;
          case "classComponent":
            return <CLassInput />;
        }
      })()}
    </>
  );
}

export default App;
