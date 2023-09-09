import { useState } from "react";
import "./sidebar.css";
import Logo from "./Logo";
const SideBar = ({ data, handleModal, setSelectedFroup, selectedGroup }) => {
  return (
    <div className="sidebar">
      <p>Pocket Notes</p>
      <div className="groups">
        <div onClick={handleModal} className="create-btn">
          <p> + Create Notes group</p>
        </div>
        {data?.map((elem, key) => (
          <div
            style={{
              backgroundColor:
                selectedGroup?.name === elem?.name ? "#f7ecdc" : "#fff",
            }}
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
