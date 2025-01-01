import React from 'react';

const Step1 = ({ setBusinessName, setBusinessDescription }) => (
  <div className="form-step">
    <label className="form-label">What's Your Business Name?</label>
    <input
      type="text"
      onChange={(e) => setBusinessName(e.target.value)}
      placeholder="Enter your business name"
      required
      className="form-input"
    />
    <label className="form-label">Describe Your Business</label>
    <textarea
      onChange={(e) => setBusinessDescription(e.target.value)}
      placeholder="Describe your business"
      required
      maxLength={4800}
      rows={5}
      className="form-textarea"
    />
  </div>
);

export default Step1;
