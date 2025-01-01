import React from 'react';
import './Loader.css'; // Assuming CSS is stored in Loader.css

const Loader = () => {
  return (
    <div className="loader__typing">
      <div className="typing-indicator__typing">
        <span className="dot__typing"></span>
        <span className="dot__typing"></span>
        <span className="dot__typing"></span>
      </div>
    </div>
  );
};

export default Loader;
