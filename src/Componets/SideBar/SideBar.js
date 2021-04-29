import React from "react";
import "./SideBar.css";
import Swal from "sweetalert2";

const SideBar = ({ setIsSideBar, isSideBar, dayLook }) => {
  const closeOnClick = () => {
    setIsSideBar(false);
  };
  const menuOnclick = () => {
    Swal.fire({
      title: `DB를 구축 하지 않았습니다`,
      confirmButtonColor: "#615f5f",
      confirmButtonText: `확인`,
    });
  };
  return (
    <div
      className={"sidebar" + (isSideBar === true ? " active" : " non-active")}
      id="sidebar-screen"
    >
      {isSideBar && (
        <div className="sidebar-container">
          <div className="sidebar-menu">
            <i className="far fa-plus-square" onClick={menuOnclick}></i>
            <i className="far fa-trash-alt" onClick={menuOnclick}></i>
            <i className="fas fa-redo" onClick={menuOnclick}></i>
          </div>
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
