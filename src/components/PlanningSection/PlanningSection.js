import React from 'react';
import './PlanningSection.css';

const PlanningSection = () => {
  const plans = [
    {
      icon: '🚀',
      title: 'Start Your Project',
      description: 'Get started quickly with eco-friendly hosting designed for speed and scalability.',
    },
    {
      icon: '📊',
      title: 'Monitor Performance',
      description: 'Track your website performance and optimize for growth with our analytics tools.',
    },
    {
      icon: '🌱',
      title: 'Grow Sustainably',
      description: 'Scale your business while staying eco-conscious with our green solutions.',
    },
  ];

  return (
    <section className="planning-section">
      <h2 className="planning-title">Plan Your Growth with Us</h2>
      <div className="planning-cards">
        {plans.map((plan, index) => (
          <div className="planning-card" key={index}>
            <div className="icon">{plan.icon}</div>
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlanningSection;
