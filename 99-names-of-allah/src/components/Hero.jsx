import React from 'react';
import { motion } from 'framer-motion';
import './hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-particles">
        {/* Simple CSS particles can be added if needed, sticking to Framer for main animations */}
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-glow-wrapper"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="hero-glow-circle"></div>
          <motion.h1
            className="bismillah arabic-text"
            animate={{
              y: [0, -10, 0],
              textShadow: [
                "0 0 20px rgba(255, 79, 163, 0.8)",
                "0 0 50px rgba(255, 79, 163, 1)",
                "0 0 20px rgba(255, 79, 163, 0.8)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hero-text"
        >
          <h2>99 Beautiful Names of Allah</h2>
          <p>Learn, Reflect and Remember the Beautiful Names of Allah with Meaning and Pronunciation.</p>

          <motion.a
            href="#names"
            className="explore-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Names
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span>Scroll Down</span>
        <div className="scroll-dot"></div>
      </motion.div>
    </section>
  );
};

export default Hero;