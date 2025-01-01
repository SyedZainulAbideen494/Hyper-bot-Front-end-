import React from 'react';

const Step2 = ({ setWebsiteUrl, setLogoUrl }) => (
  <div className="form-step">
    <label className="form-label">Your Website URL</label>
    <input
      type="url"
      onChange={(e) => setWebsiteUrl(e.target.value)}
      placeholder="https://example.com"
      required
      className="form-input"
    />
    <label className="form-label">Upload Your Business Logo</label>
    <input
      type="file"
      accept="image/*"
      onChange={(e) => setLogoUrl(URL.createObjectURL(e.target.files[0]))}
      className="form-input"
    />
  </div>
);

export default Step2;
