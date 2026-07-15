import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section glass-panel" style={{ borderBottom: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0 }}>
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-icon arabic-text">ﷲ</span>
          <span className="footer-title">99 Beautiful Names of Allah</span>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#names">Names</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-copyright">
          <p>2026 &copy; 99 Beautiful Names of Allah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;