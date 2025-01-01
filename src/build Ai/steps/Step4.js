import React from 'react';

const Step4 = ({ setBusinessHours }) => (
  <div className="form-step">
    <label className="form-label">Business Hours</label>
    <input
      type="text"
      onChange={(e) => setBusinessHours(e.target.value)}
      placeholder="e.g., Mon-Fri: 9AM - 6PM"
      className="form-input"
    />
  </div>
);

export default Step4;
