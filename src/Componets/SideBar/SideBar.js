import React from "react";
import "./SideBar.css";
const SideBar = ({ setIsSideBar, isSideBar, dayLook }) => {
  const closeOnClick = () => {
    setIsSideBar(false);
  };
  return (
    <div
      className={"sidebar" + (isSideBar === true ? " active" : " non-active")}
      id="sidebar-screen"
    >
      {isSideBar && (
        <div className="sidebar-container">
          <div className="close-btn" onClick={closeOnClick}>
            <i className="fas fa-caret-right"></i>
          </div>
          {dayLook && (
            <div className="daylook-container">
              {Object.keys(dayLook).map((sort, index) => {
                return (
                  <div
                    className={"daylook-container_col " + `${sort}`}
                    key={`${sort}` + { index }}
                  >
                    <img className="daylook_img" src={dayLook[`${sort}`]} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SideBar;
