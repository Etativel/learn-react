import { useState } from "react";

export default function Ppp() {
  const [title, setTitle] = useState("react");

  function handleClick() {
    setTitle("yellow");
  }

  return (
    <div className="headline">
      <h1>{title}</h1>
      <p>{title}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
