import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo-placeholder">Logo</div>
        <span className="app-name">AppName</span>
      </div>
      <div className="navbar-right">
        <button className="nav-btn">Home</button>
        <button className="nav-btn">About</button>
        <button className="nav-btn">Services</button>
        <button className="nav-btn">Contact</button>
        <button className="create-btn">Create</button>
      </div>
    </div>
  );
};

export default Navbar;
