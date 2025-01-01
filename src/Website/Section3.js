import React from "react";
import "./Section3.css";
import { FaBusinessTime, FaSmile, FaClock, FaQuestionCircle, FaGlobe, FaEnvelope, FaFacebook, FaArrowDown } from "react-icons/fa";

const Section3 = () => {
  return (
    <div className="setup-section3-container">
      <div className="setup-section3-content">
        <h2 className="setup-section3-title">8 Steps to Personalize Your AI Chatbot</h2>
        <p className="setup-section3-description">
          Customize your chatbot in 8 easy steps to ensure it's aligned with your business needs and customer expectations.
        </p>

        <div className="setup-steps">
          <div className="setup-step">
            <div className="step-icon-container">
              <FaBusinessTime className="step-icon" />
            </div>
            <div className="step-text">
              <h3>1. Add Your Business</h3>
              <p>Provide your business details and website URL to get started.</p>
            </div>
            <FaArrowDown className="step-arrow" />
          </div>

          <div className="setup-step">
            <div className="step-icon-container">
              <FaGlobe className="step-icon" />
            </div>
            <div className="step-text">
              <h3>2. Set Up Your Website</h3>
              <p>Integrate your chatbot seamlessly into your website.</p>
            </div>
            <FaArrowDown className="step-arrow" />
          </div>

          <div className="setup-step">
            <div className="step-icon-container">
              <FaSmile className="step-icon" />
            </div>
            <div className="step-text">
              <h3>3. Customize Personality</h3>
              <p>Choose the bot's tone: friendly, professional, or casual.</p>
            </div>
            <FaArrowDown className="step-arrow" />
          </div>

          <div className="setup-step">
            <div className="step-icon-container">
              <FaClock className="step-icon" />
            </div>
            <div className="step-text">
              <h3>4. Set Business Hours</h3>
              <p>Define when the bot is available to assist your customers.</p>
            </div>
            <FaArrowDown className="step-arrow" />
          </div>

          <div className="setup-step">
            <div className="step-icon-container">
              <FaQuestionCircle className="step-icon" />
            </div>
            <div className="step-text">
              <h3>5. Add FAQ</h3>
              <p>Enter commonly asked questions and their answers.</p>
            </div>
            <FaArrowDown className="step-arrow" />
          </div>

          <div className="setup-step">
            <div className="step-icon-container">
              <FaEnvelope className="step-icon" />
            </div>
            <div className="step-text">
              <h3>6. Contact Information</h3>
              <p>Let the bot handle email inquiries or direct customer interactions.</p>
            </div>
            <FaArrowDown className="step-arrow" />
          </div>

          <div className="setup-step">
            <div className="step-icon-container">
              <FaFacebook className="step-icon" />
            </div>
            <div className="step-text">
              <h3>7. Add Social Links</h3>
              <p>Include links to your social media for customer engagement.</p>
            </div>
            <FaArrowDown className="step-arrow" />
          </div>

          <div className="setup-step">
            <div className="step-icon-container">
              <FaArrowDown className="step-icon" />
            </div>
            <div className="step-text">
              <h3>8. Set Default Message</h3>
              <p>Customize your bot's greeting message for first-time visitors.</p>
            </div>
          </div>
        </div>

        <button className="setup-section3-btn">Create My Chatbot</button>
      </div>
    </div>
  );
};

export default Section3;
