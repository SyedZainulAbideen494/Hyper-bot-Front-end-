import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to AppName</h1>
        <p className="hero-subtitle">
          Take your productivity to the next level with tools designed for
          efficiency and simplicity.
        </p>
        <button className="hero-btn">Get Started</button>
      </div>
      <div className="hero-image-placeholder">Your Image Here</div>
    </div>
  );
};

export default HeroSection;
