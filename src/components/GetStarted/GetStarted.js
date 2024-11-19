import React from "react";
import "./GetStarted.css"; // Create a corresponding CSS file for styling

const GetStarted = () => {
  return (
    <section className="get-started-section">
      <div className="content-wrapper">
        <h2 className="title">Get Started with GreenGeeks</h2>
        <p className="description">
          Experience eco-friendly web hosting with blazing fast speeds, top-tier security, and 24/7 expert support. 
          Join us to make a positive impact on the planet.
        </p>
        <button className="cta-button">Start Now</button>
      </div>
    </section>
  );
};

export default GetStarted;
