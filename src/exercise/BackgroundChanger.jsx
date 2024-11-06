import { useState } from "react";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function BackgroundChanger() {
  const [backgroundColor, setBackgroundColor] = useState("pink");
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
