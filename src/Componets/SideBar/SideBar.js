import React from "react";
import "./SideBar.css";
import backgroundImage from "../../Background/bg13.jpeg";
const SideBar = ({ setIsSideBar, isSideBar }) => {
  const closeOnClick = () => {
    setIsSideBar(false);
  };
  return (
    <div
      className={"sidebar" + (isSideBar === true ? " active" : " non-active")}
      id="sidebar-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {isSideBar && (
        <div className="sidebar-container">
          <div className="close-btn" onClick={closeOnClick}>
            <i class="fas fa-caret-right"></i>
          </div>
          <div className="box"></div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
