import React from 'react';

const Step3 = ({ setBotPersonality }) => (
  <div className="form-step">
    <label className="form-label">Bot Personality</label>
    <textarea
      onChange={(e) => setBotPersonality(e.target.value)}
      placeholder="Describe your bot's personality"
      className="form-textarea"
    />
  </div>
);

export default Step3;
