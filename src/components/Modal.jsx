import React, { useState } from "react";
import "./modal.css";

const colors = [
  "#B38BFA",
  "#FF79F2",
  "#FF79F2",
  "#F19576",
  "#0047FF",
  "#6691FF",
];

const Modal = ({ setGroups }) => {
  const [newGroup, setNewGroup] = useState({
    name: "",
    color: "",
    data: [],
  });
  return (
    <div className="modal">
      <p>Create New Notes group</p>
      <div className="group-name">
        <p>Group Name</p>
        <input
          onChange={(e) => setNewGroup({ ...newGroup, name: e.target.value })}
          placeholder="Enter your group name"
        />
      </div>
      <div className="pallete">
        <p>Choose Colour</p>
        <div className="colors-all">
          {colors.map((elem) => (
            <div
              onClick={() => setNewGroup({ ...newGroup, color: elem })}
              className="color"
              style={{ backgroundColor: elem }}
            ></div>
          ))}
        </div>
      </div>
      <button onClick={() => setGroups(newGroup)}>create</button>
    </div>
  );
};

export default Modal;
