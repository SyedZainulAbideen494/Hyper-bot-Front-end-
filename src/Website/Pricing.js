import React from "react";
import "./Pricing.css";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$19.99",
      features: [
        "1 Bot",
        "Chatbot Analytics",
        "Basic Customization",
        "Email Support",
        "7-Day Free Trial",
      ],
    },
    {
      name: "Pro",
      price: "$49.99",
      features: [
        "5 Bots",
        "Advanced Analytics",
        "Advanced Customization",
        "Priority Support",
        "7-Day Free Trial",
      ],
    },
    {
      name: "Enterprise",
      price: "$99.99",
      features: [
        "Unlimited Bots",
        "Premium Analytics",
        "Full Customization",
        "Dedicated Account Manager",
        "7-Day Free Trial",
      ],
    },
  ];

  return (
    <div className="pricing-section">
      <h2 className="pricing-title">Choose Your Plan</h2>
      <p className="pricing-description">
        Start with a 7-day free trial. No credit card required.
      </p>
      <div className="pricing-plans">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-plan">
            <div className="pricing-header">
              <h3 className="pricing-name">{plan.name}</h3>
              <p className="pricing-price">{plan.price}</p>
            </div>
            <ul className="pricing-features">
              {plan.features.map((feature, i) => (
                <li key={i} className="pricing-feature">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="pricing-btn">Start Free Trial</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
