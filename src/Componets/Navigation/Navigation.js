import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import WebLogo from "../../logo/logo.png";

const Navigation = () => {
  return (
    <nav id="navigation-screen">
      <div className="navigation__logo">
        <img src={WebLogo} alt="Logo"></img>
      </div>
      <ul className="navigation">
        <li className="navigation__list">
          <Link to="/">Main</Link>
        </li>
        <li className="navigation__list">
          <Link to="/closet">Closet</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
