import { useState } from "react";

const COLORS = ["pink", "green", "blue", "yellow", "gray", "purple", "brown"];

function BackgroundChanger() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  function handleChangeColor(color) {
    setBackgroundColor(color);
  }
  return (
    <div
      className="colorChangerApp"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          className={`colorBtn ${backgroundColor === color ? "selected" : ""}`}
          key={color}
          onClick={() => handleChangeColor(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default BackgroundChanger;
