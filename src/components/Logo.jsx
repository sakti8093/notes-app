import React from "react";
import "./logo.css";
const Logo = ({ group }) => {
  return (
    <div className="logowrapper">
      <div style={{ backgroundColor: group.color }} className="group-logo">
        <p>{group?.name?.substring(0, 2).toUpperCase()}</p>
      </div>
      <p>{group.name}</p>
    </div>
  );
};

export default Logo;
