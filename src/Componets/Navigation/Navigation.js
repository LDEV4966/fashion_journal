import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav id="navigation-screen">
      <div className="navigation__logo">Fashion Journal</div>
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
