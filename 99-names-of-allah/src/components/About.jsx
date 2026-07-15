import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="about-card glass-panel"
        >
          <div className="about-glow"></div>
          <h2>About Allah</h2>
          <div className="quran-quote">
            <p className="arabic-quote arabic-text">وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا</p>
            <p className="english-quote">"And to Allah belong the Most Beautiful Names, so invoke Him by them."</p>
            <span className="reference">- (Quran 7:180)</span>
          </div>

          <div className="about-text">
            <p>
              The 99 Names of Allah (Asma ul Husna) are the Names of God which are described in the Quran and Sunnah. Each name represents a specific attribute or description of God.
            </p>
            <p>
              Learning and reflecting upon these names helps to develop a closer relationship with the Creator, understanding His majesty, mercy, and profound wisdom.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;