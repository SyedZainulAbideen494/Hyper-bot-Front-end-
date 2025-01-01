import React from 'react';

const Step7 = ({ socialMediaLinks, setSocialMediaLinks }) => {
  const handleAddLink = () => {
    setSocialMediaLinks([...socialMediaLinks, '']);
  };

  const handleLinkChange = (index, value) => {
    const updatedLinks = [...socialMediaLinks];
    updatedLinks[index] = value;
    setSocialMediaLinks(updatedLinks);
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = socialMediaLinks.filter((_, i) => i !== index);
    setSocialMediaLinks(updatedLinks);
  };

  return (
    <div className="form-step">
      <label className="form-label">Social Media Links</label>
      {socialMediaLinks.map((link, index) => (
        <div key={index}>
          <input
            type="url"
            value={link}
            onChange={(e) => handleLinkChange(index, e.target.value)}
            placeholder="Social Media Link"
            className="form-input"
          />
          <button
            type="button"
            onClick={() => handleRemoveLink(index)}
            className="form-button remove-button"
          >
            Remove Link
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddLink} className="form-button">Add Link</button>
    </div>
  );
};

export default Step7;
