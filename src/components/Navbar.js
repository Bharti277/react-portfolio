import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function ResponsiveAppBar() {
  return (
    <div className="navbar_container">
      <div className="logo">
        <NavLink to="/">
          <button className="btn">Deependra</button>
        </NavLink>
      </div>
      <div className="navlinks">
        <NavLink to="/">
          <button className="btn">Home</button>
        </NavLink>
        <NavLink to="/About">
          <button className="btn">About</button>
        </NavLink>
        <NavLink to="/Projects">
          <button className="btn">Work</button>
        </NavLink>
        <NavLink to="/Contact">
          <button className="btn">Contact</button>
        </NavLink>
      </div>
    </div>
  );
}
export default ResponsiveAppBar;
