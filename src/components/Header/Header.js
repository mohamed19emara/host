// Header.js
import React from 'react';
import './Header.css';
import logo from '../../assest/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem('currentUser');
    alert('You have been signed out!');
    navigate('/signin'); // Redirect to Signin page
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={logo} alt="GreenGeeks Logo" />
        </Link>
         
        </div>
        <nav className="nav">
          <ul>
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="cta">
  
        </div>
      </div>
    </header>
  );
};

export default Header;
