import React from "react";
import defaultimage from "../assets/defaultimage.svg";
import "./defaultright.css";

const DefaultRight = () => {
  return (
    <div className="defaultright">
      <div>
        <img src={defaultimage} />
        <h3>Pocket Notes</h3>
      </div>
    </div>
  );
};

export default DefaultRight;
