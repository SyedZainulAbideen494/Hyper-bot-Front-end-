import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is an AI chatbot?",
      answer: "An AI chatbot is a software application powered by artificial intelligence that can interact with users and provide them with answers to their queries 24/7.",
    },
    {
      question: "How can I integrate the chatbot into my website?",
      answer: "You can easily integrate the chatbot by copying and pasting the provided embed code into your website's HTML. Our platform will guide you through the steps.",
    },
    {
      question: "Can I customize the chatbot's personality?",
      answer: "Yes, you can adjust the tone, language, and personality of the chatbot to match your brand’s voice and style.",
    },
    {
      question: "Is my data secure with the chatbot?",
      answer: "Absolutely. We follow strict data protection protocols to ensure that all user interactions are encrypted and stored securely.",
    },
    {
      question: "Can the chatbot handle multiple languages?",
      answer: "Yes, our chatbot is capable of handling multiple languages. You can configure it to respond in your preferred language.",
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h3>{faq.question}</h3>
              <span className={`arrow ${activeIndex === index ? "open" : ""}`}>&#x2193;</span>
            </div>
            {activeIndex === index && <div className="faq-answer"><p>{faq.answer}</p></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
