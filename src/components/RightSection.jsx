import React from "react";
import "./rightsection.css";
import Logo from "./Logo";
const RightSection = ({ selectedGroup, handleModal }) => {
  return (
    <div onClick={handleModal} className="rightsection">
      <div className="header">
        <Logo group={selectedGroup} />
      </div>
      <div className="rightcontent"></div>
    </div>
  );
};

export default RightSection;
