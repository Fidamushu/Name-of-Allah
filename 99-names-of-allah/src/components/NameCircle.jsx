import React from 'react';
import { motion } from 'framer-motion';
import './NameCircle.css';
import { playArabicAudio } from '../utils/audio';

const NameCircle = ({ name, index, onClick }) => {
  const handleMouseEnter = () => {
    playArabicAudio(name.arabic, name.id);
  };

  const handleClick = (e) => {
    // Stop propagation so it doesn't accidentally trigger a double click or parent click
    e.stopPropagation();
    onClick();
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ delay: (index % 15) * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
      whileTap={{ scale: 0.95 }}
      className="name-circle-wrapper"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      <div className="name-circle glass-panel">
        <div className="name-number">{name.id}</div>
        <h3 className="name-arabic arabic-text">{name.arabic}</h3>
        <p className="name-trans">{name.transliteration}</p>
      </div>
    </motion.div>
  );
};

export default NameCircle;