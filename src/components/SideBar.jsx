import { useState } from "react";
import "./sidebar.css";
import Logo from "./Logo";
const SideBar = ({ data, handleModal, setSelectedFroup }) => {
  return (
    <div className="sidebar">
      <p>Pocket Notes</p>
      <div className="groups">
        <div onClick={handleModal} className="create-btn">
          <p> + Create Notes group</p>
        </div>
        {data?.map((elem, key) => (
          <div
            onClick={() => setSelectedFroup(elem)}
            key={key}
            className="group"
          >
            <Logo group={elem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
