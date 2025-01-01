import React from "react";
import "./Section1.css";
import { FaRobot, FaClock, FaHandsHelping } from "react-icons/fa";

const Section1 = () => {
  return (
    <div className="custom-section1">
      <div className="custom-section1-content">
        <h2 className="custom-section1-title">AI-Powered Support, Anytime</h2>
        <p className="custom-section1-description">
          Our AI chatbot provides exceptional customer service around the clock. It's fast, reliable, and ready to help your customers whenever they need it.
        </p>
        <div className="custom-section1-features">
          <div className="custom-feature">
            <FaRobot className="custom-feature-icon" />
            <h3>Instant Intelligence</h3>
            <p>AI-driven responses that instantly answer customer queries with accuracy.</p>
          </div>
          <div className="custom-feature">
            <FaClock className="custom-feature-icon" />
            <h3>Always On</h3>
            <p>Round-the-clock support to ensure your customers get help anytime.</p>
          </div>
          <div className="custom-feature">
            <FaHandsHelping className="custom-feature-icon" />
            <h3>Empathy and Efficiency</h3>
            <p>Provide a human-like support experience with precision and care.</p>
          </div>
        </div>
        <button className="custom-section1-btn">Start Your Journey</button>
      </div>
      <div className="custom-section1-image">AI Tech Illustration</div>
    </div>
  );
};

export default Section1;
