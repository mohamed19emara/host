import React from 'react';
import './HostingOptions.css';

const HostingOptionsSection = () => {
  const hostingOptions = [
    {
      title: 'Shared Hosting',
      description: 'Affordable hosting for small websites with shared server resources.',
      icon: '💻',
    },
    {
      title: 'VPS Hosting',
      description: 'Scalable virtual private servers for growing businesses.',
      icon: '🔧',
    },
    {
      title: 'Dedicated Hosting',
      description: 'High-performance servers fully dedicated to your website.',
      icon: '🚀',
    },
  ];

  return (
    <section className="hosting-options-section">
      <div className="container hosting-container">
        <div>
        <h2>One Platform. Multiple Hosting Options.</h2>
        <p>
          No matter your hosting requirements, our platform will fit your needs.
        </p>
        </div>
        
        <div className="hosting-options">
          {hostingOptions.map((option, index) => (
            <div className="hosting-card" key={index}>
              <div className="icon">{option.icon}</div>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingOptionsSection;
