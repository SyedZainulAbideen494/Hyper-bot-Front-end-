import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './BusinessForm.css';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import Step6 from './steps/Step6';
import Step7 from './steps/Step7';
import Step8 from './steps/Step8';
import Step9 from './steps/Step9';  // New Step
const BusinessForm = () => {
  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [botPersonality, setBotPersonality] = useState('');
  const [businessHours, setBusinessHours] = useState('');
  const [tonePreferences, setTonePreferences] = useState('');
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);
  const [faq, setFaq] = useState([]);
  const [defaultMessage, setDefaultMessage] = useState('');
  const [defaultQuestions, setDefaultQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  // Load data from localStorage when component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('businessFormData'));
    if (storedData) {
      setBusinessName(storedData.businessName);
      setBusinessDescription(storedData.businessDescription);
      setWebsiteUrl(storedData.websiteUrl);
      setLogoUrl(storedData.logoUrl);
      setBotPersonality(storedData.botPersonality);
      setBusinessHours(storedData.businessHours);
      setTonePreferences(storedData.tonePreferences);
      setSocialMediaLinks(storedData.socialMediaLinks);
      setFaq(storedData.faq);
      setStep(storedData.step || 1);
    }
  }, []);

  // Save data to localStorage whenever any field changes
  useEffect(() => {
    const formData = {
      businessName,
      businessDescription,
      websiteUrl,
      logoUrl,
      botPersonality,
      businessHours,
      tonePreferences,
      socialMediaLinks,
      faq,
      step,
    };
    localStorage.setItem('businessFormData', JSON.stringify(formData));
  }, [businessName, businessDescription, websiteUrl, logoUrl, botPersonality, businessHours, tonePreferences, socialMediaLinks, faq, step]);

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const businessData = {
      businessName,
      businessDescription,
      websiteUrl,
      logoUrl,
      botPersonality,
      businessHours,
      tonePreferences,
      socialMediaLinks,
      faq,
      defaultMessage,
      defaultQuestions,
    };

    try {
      const response = await axios.post('https://g3zvcp57-8080.inc1.devtunnels.ms/api/business', businessData);
      const { reactEmbedCode, htmlEmbedCode, id } = response.data;
      nav(`/bot/${id}`);
      localStorage.removeItem('businessFormData');  // Clear form data after successful submission
    } catch (error) {
      console.error('Error creating business bot:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="build-form-main-div">
      <div className="business-form-container">
        <h1 className="form-title">Create Your AI Business Bot</h1>
        <p className="form-description">Build a personalized AI bot step-by-step for your business!</p>



        <form onSubmit={step === 9 ? handleSubmit : handleNextStep} className="business-form">
  {step === 1 && <Step1 setBusinessName={setBusinessName} setBusinessDescription={setBusinessDescription} />}
  {step === 2 && <Step2 setWebsiteUrl={setWebsiteUrl} setLogoUrl={setLogoUrl} />}
  {step === 3 && <Step3 setBotPersonality={setBotPersonality} />}
  {step === 4 && <Step4 setBusinessHours={setBusinessHours} />}
  {step === 5 && <Step5 setTonePreferences={setTonePreferences} />}
  {step === 6 && <Step6 faq={faq} setFaq={setFaq} />}
  {step === 7 && <Step7 socialMediaLinks={socialMediaLinks} setSocialMediaLinks={setSocialMediaLinks} />}
  {step === 8 && <Step9 setDefaultMessage={setDefaultMessage} setDefaultQuestions={setDefaultQuestions} />}
  {step === 9 && (
    <div className="final-step">
      <h2>Review Your Bot Details</h2>
      {/* Show summary of collected data */}
      <p><strong>Business Name:</strong> {businessName}</p>
      <p><strong>Business Description:</strong> {businessDescription}</p>
      <p><strong>Website URL:</strong> {websiteUrl}</p>
      <p><strong>Bot Personality:</strong> {botPersonality}</p>
      <p><strong>Business Hours:</strong> {businessHours}</p>
      <p><strong>Tone Preferences:</strong> {tonePreferences}</p>
      {/* Optionally show other data */}
      
      <button type="submit" className="form-button">Create Bot</button>
    </div>
  )}
  {loading && <div className="loading">Creating your bot...</div>}

  <div className="button-group">
    {step > 1 && <button type="button" onClick={handlePreviousStep} className="form-button">Back</button>}
    {step === 9 && <button type="submit" className="form-button">Create Bot</button>}
    {step < 9 && <button type="button" onClick={handleNextStep} className="form-button">Next</button>}
  </div>
</form>

      </div>
    </div>
  );
};

export default BusinessForm;
