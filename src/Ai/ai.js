import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './BusinessBot.css';  // Import the external CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';  // Icon for the send button
import Loader from '../components/loader';

const BusinessBot = () => {
  const [businessName, setBusinessName] = useState('');
  const [messages, setMessages] = useState([]); // Keeps track of messages
  const [userQuestion, setUserQuestion] = useState('');
  const [loading, setLoading] = useState(false); // New loading state
  const [defaultMessage, setDefaultMessage] = useState('');
  const [defaultQuestions, setDefaultQuestions] = useState([]);
  const params = useParams();
  const businessId = params.businessId;

  // Ref to track the chat box for scrolling
  const chatBoxRef = useRef(null);

  useEffect(() => {
    // Fetch business details when the component loads
    const fetchBusinessDetails = async () => {
      try {
        const response = await axios.get(`https://g3zvcp57-8080.inc1.devtunnels.ms/bot/${businessId}`);
        setBusinessName(response.data.businessName);
        setDefaultMessage(response.data.defaultMessage);
        setDefaultQuestions(response.data.defaultQuestions);

        // Display default message in the chat only if no messages are present
        if (messages.length === 0) {
          setMessages([
            { role: 'bot', text: response.data.defaultMessage || 'How can I assist you today?' },
          ]);
        }
      } catch (error) {
        console.error('Error fetching business details:', error);
      }
    };

    fetchBusinessDetails();
  }, [businessId, messages.length]);  // Depend on messages.length to avoid multiple resets

  useEffect(() => {
    // Scroll to the latest message whenever the messages update
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);  // Dependency array ensures the scroll happens on messages update

  const handleAskQuestion = async (e) => {
    e.preventDefault();

    if (!userQuestion) return;

    // Add user's message to chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: 'user', text: userQuestion },
    ]);

    setLoading(true); // Set loading to true while waiting for AI response

    try {
      // Send the question to the AI response API
      const response = await axios.post(`https://g3zvcp57-8080.inc1.devtunnels.ms/api/ai-response/${businessId}`, { userQuestion });

      // The response is now plain text, no need for JSON parsing
      const aiResponse = response.data || 'Sorry, I couldn’t find an answer to your question.';

      // Add AI's response to chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'ai', text: aiResponse },
      ]);

      setUserQuestion('');
      setLoading(false); // Hide loader after response is received
    } catch (error) {
      console.error('Error sending question to AI:', error);
      setLoading(false); // Hide loader on error
    }
  };

  return (
    <div className="chatbot__container">
      {/* Header */}
      <div className="chatbot__header">
        <img
          src="https://via.placeholder.com/40" // Replace with a bot logo if available
          alt="Bot Logo"
          className="chatbot__logo"
        />
        <div>
          <h3>{businessName || 'Support Bot'}</h3>
          <p className="chatbot__status">Online</p>
        </div>
      </div>

      {/* Chatbox */}
      <div className="chatbot__chatbox" ref={chatBoxRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.role === 'user'
                ? 'chatbot__message chatbot__userMessage'
                : 'chatbot__message chatbot__botMessage'
            }
          >
            {message.text}
          </div>
        ))}

        {/* Show loading indicator while waiting for AI response */}
        {loading && (
          <div className="chatbot__message chatbot__botMessage chatbot__loading">
            <Loader />
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleAskQuestion} className="chatbot__form">
        <input
          type="text"
          value={userQuestion}
          onChange={(e) => setUserQuestion(e.target.value)}
          placeholder="Ask a question"
          required
          className="chatbot__input"
        />
        <button type="submit" className="chatbot__button">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>

      <p>Powered By AIChatBot</p>
    </div>
  );
};

export default BusinessBot;
