import React from "react";
import "./Section2.css";
import { FaShieldAlt, FaUsers, FaTrophy } from "react-icons/fa";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="section2-content">
        <h2 className="section2-title">Why Choose Us?</h2>
        <p className="section2-description">
          Our AI-powered customer service bot is more than just a tool; it's a game-changer. Here’s why we stand out:
        </p>
        <div className="section2-features">
          <div className="feature">
            <FaShieldAlt className="feature-icon" />
            <h3>Top Security</h3>
            <p>Your customer data is fully protected with state-of-the-art encryption and privacy protocols.</p>
          </div>
          <div className="feature">
            <FaUsers className="feature-icon" />
            <h3>Unlimited Scalability</h3>
            <p>Whether you're a startup or a large enterprise, our bot grows with your business needs.</p>
          </div>
          <div className="feature">
            <FaTrophy className="feature-icon" />
            <h3>Award-Winning Service</h3>
            <p>Recognized for delivering top-notch service, we continuously improve to provide excellent customer experiences.</p>
          </div>
        </div>
        <button className="section2-btn">Learn More</button>
      </div>
      <div className="section2-image-placeholder">AI Technology Illustration</div>
    </div>
  );
};

export default Section2;
