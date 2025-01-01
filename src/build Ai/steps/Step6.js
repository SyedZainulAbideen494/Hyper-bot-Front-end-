import React from 'react';

const Step6 = ({ faq, setFaq }) => {
  const handleAddFaq = () => {
    setFaq([...faq, { question: '', answer: '' }]);
  };

  const handleFaqChange = (index, field, value) => {
    const updatedFaq = [...faq];
    updatedFaq[index][field] = value;
    setFaq(updatedFaq);
  };

  const handleRemoveFaq = (index) => {
    const updatedFaq = faq.filter((_, i) => i !== index);
    setFaq(updatedFaq);
  };

  return (
    <div className="form-step">
      <label className="form-label">FAQ</label>
      {faq.map((faqItem, index) => (
        <div key={index}>
          <input
            type="text"
            value={faqItem.question}
            onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
            placeholder="FAQ Question"
            className="form-input"
          />
          <textarea
            value={faqItem.answer}
            onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
            placeholder="FAQ Answer"
            className="form-textarea"
          /><br/>
          <button
            type="button"
            onClick={() => handleRemoveFaq(index)}
            className="form-button remove-button"
          >
            Remove FAQ
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddFaq} className="form-button">Add FAQ</button>
    </div>
  );
};

export default Step6;
