import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-gradient-line"></div>

      <div className="footer-content">
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="footer-logo">
            <span className="logo-arabic arabic-text">ﷲ</span>
          </div>
          <h2 className="footer-title">99 Beautiful Names of Allah</h2>
          <p className="footer-subtitle">Learn, Reflect, and Remember.</p>
        </motion.div>

        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#names">The 99 Names</a>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>Built with <FiHeart className="heart-icon" /> for the Ummah.</p>
        <p className="copyright">&copy; {new Date().getFullYear()} Asmaul Husna. Free to use and share.</p>
      </div>
    </footer>
  );
};

export default Footer;