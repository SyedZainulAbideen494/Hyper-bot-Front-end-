import React, { useState } from 'react';

const Step9 = ({ setDefaultMessage, setDefaultQuestions }) => {
  const [message, setMessage] = useState('');
  const [questions, setQuestions] = useState(['', '', '', '']);

  const handleQuestionChange = (e, index) => {
    const newQuestions = [...questions];
    newQuestions[index] = e.target.value;
    setQuestions(newQuestions);
    setDefaultQuestions(newQuestions.filter(q => q)); // Remove empty questions
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ fontSize: '20px', color: '#333', marginBottom: '10px' }}>Step 9: Set Default Message and Questions</h2>
      <label style={{
        display: 'block',
        marginBottom: '10px',
        fontSize: '14px',
        color: '#555'
      }}>
        Default Message:
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setDefaultMessage(e.target.value);
          }}
          placeholder="Enter your default message"
          rows="4"
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '8px',
            fontSize: '14px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxSizing: 'border-box',
            resize: 'vertical'
          }}
        />
      </label>

    </div>
  );
};

export default Step9;
