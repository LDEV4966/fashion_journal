import React from "react";
import "./Main.css";
import Calender from "../../Componets/Calender/Calender";
import backgroundImage from "../../Background/bg9.jpeg";

const Main = () => {
  return (
    <div
      id="main-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Calender />
    </div>
  );
};

export default Main;
