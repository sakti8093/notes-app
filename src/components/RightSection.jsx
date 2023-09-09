import React, { useState } from "react";
import "./rightsection.css";
import arrow from "../assets/arrow.svg";
import Logo from "./Logo";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const RightSection = ({ selectedGroup, handleModalClose, addContent }) => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const addToFroup = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate().toString();
    const month = date.getMonth().toString();
    const year = date.getYear().toString();
    var ampm = hours >= 12 ? "PM" : "AM";
    const formattedDate = `${day} ${monthNames[month]} ${year}`;
    const time = `${hours} : ${minutes} : ${ampm}`;
    addContent(content, formattedDate, time);
  };

  return (
    <div onClick={handleModalClose} className="rightsection">
      <div className="header">
        <Logo group={selectedGroup} />
      </div>
      <div className="rightcontent">
        <div>
          {selectedGroup.data.map((elem) => (
            <div className="content">
              <div className="date">
                <p>{elem.time}</p>
                <p>{elem.date}</p>
              </div>
              <div>
                <p>{elem.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <textarea
            onChange={handleChange}
            className="textarea"
            name=""
            id=""
            rows="10"
          ></textarea>
          <img onClick={addToFroup} className="arrow" src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
