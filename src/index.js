import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

ReactDOM.render(
  <div>
    <h1
      style={customStyle}
      className="heading"
      contentEditable="true"
      spellCheck="false"
    >
      React App
    </h1>
    <img alt="random" src={img + "?grayscale"} />
  </div>,
  document.getElementById("root")
);
