import { useState } from "react";

const COLORS = ["pink", "green", "blue", "yellow", "gray", "purple", "brown"];

function BackgroundChanger() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [count, setCount] = useState(0);
  function handleChangeColor(color) {
    setBackgroundColor(color);
  }
  function handleCounter(color) {
    if (color === backgroundColor) {
      return;
    }
    setCount(count + 1);
  }
  return (
    <div
      className="colorChangerApp"
      style={{
        backgroundColor,
      }}
    >
      <h2>Color has been change {count} times</h2>
      <div className="buttonContainer">
        {COLORS.map((color) => (
          <button
            className={`colorBtn ${
              backgroundColor === color ? "selected" : ""
            }`}
            key={color}
            onClick={() => {
              handleChangeColor(color);
              handleCounter(color);
            }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BackgroundChanger;
