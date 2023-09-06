import React from "react";
import "./modal.css";

const colors = [
  "#B38BFA",
  "#FF79F2",
  "#FF79F2",
  "#F19576",
  "#0047FF",
  "#6691FF",
];

const Modal = () => {
  return (
    <div className="modal">
      <p>Create New Notes group</p>
      <div className="group-name">
        <p>Group Name</p>
        <input placeholder="Enter your group name" />
      </div>
      <div className="pallete">
        <p>Choose Colour</p>
        <div className="colors-all">
          {colors.map((elem) => (
            <div className="color" style={{ backgroundColor: elem }}></div>
          ))}
        </div>
      </div>
      <button>create</button>
    </div>
  );
};

export default Modal;
