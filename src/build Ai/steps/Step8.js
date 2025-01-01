import React from 'react';

const Step8 = ({ businessName, businessDescription, websiteUrl, botPersonality, businessHours, tonePreferences, faq, socialMediaLinks }) => (
  <div className="form-step">
    <h2>Review Your Information</h2>
    <p><strong>Business Name:</strong> {businessName}</p>
    <p><strong>Description:</strong> {businessDescription}</p>
    <p><strong>Website URL:</strong> {websiteUrl}</p>
    <p><strong>Bot Personality:</strong> {botPersonality}</p>
    <p><strong>Business Hours:</strong> {businessHours}</p>
    <p><strong>Tone Preferences:</strong> {tonePreferences}</p>
    <p><strong>Social Media Links:</strong> {socialMediaLinks.join(', ')}</p>
    <h3>FAQs</h3>
    <ul>
      {faq.map((item, index) => (
        <li key={index}>
          <strong>{item.question}</strong>
          <p>{item.answer}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Step8;
