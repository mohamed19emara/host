import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer  ">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>
              We provide eco-friendly web hosting solutions. Join us in making the internet green.
            </p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>Email: <a href="mailto:support@domain.com">support@domain.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
