import React from 'react';

const Step5 = ({ setTonePreferences }) => (
  <div className="form-step">
    <label className="form-label">Tone Preferences</label>
    <input
      type="text"
      onChange={(e) => setTonePreferences(e.target.value)}
      placeholder="e.g., Friendly, Professional"
      className="form-input"
    />
  </div>
);

export default Step5;
