import * as React from "react";
import { NavLink } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import "./Navbar.css";
import { useState } from "react";

function ResponsiveAppBar() {
  const [showMediaIcons, setShowIcons] = useState(false);
  const showMediaIconsHandler = () => {
    setShowIcons(!showMediaIcons);
    console.log("dkljdkdkddd");
  };
  return (
    <div className="navbar_container">
      <div className="logo">
        <NavLink to="/">
          <button className="btn">Deependra</button>
        </NavLink>
      </div>
      <div className={showMediaIcons ? "navlinks mobile-navlinks" : "navlinks"}>
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
      <div className="bars">
        <a onClick={showMediaIconsHandler}>
          <DehazeIcon />
        </a>
      </div>
    </div>
  );
}
export default ResponsiveAppBar;
