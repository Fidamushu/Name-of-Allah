import React from 'react';
import { motion } from 'framer-motion';
import { FiX, FiPlay, FiCopy, FiShare2 } from 'react-icons/fi';
import { playArabicAudio } from '../utils/audio';
import './NameModal.css';

const NameModal = ({ name, onClose }) => {
  const playAudio = () => {
    playArabicAudio(name.arabic, name.id);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${name.arabic} - ${name.transliteration}: ${name.meaning}`);
    alert('Copied to clipboard!');
  };

  const shareName = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Name of Allah: ${name.transliteration}`,
          text: `${name.arabic} - ${name.transliteration} means ${name.meaning}.`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing', err);
      }
    } else {
      alert('Sharing not supported on this browser context.');
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <motion.div
        className="modal-content glass-panel"
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <FiX />
        </button>

        <div className="modal-header">
          <div className="modal-number">{name.id}</div>
          <h2 className="modal-arabic arabic-text">{name.arabic}</h2>
          <h3 className="modal-trans">{name.transliteration}</h3>
          <p className="modal-meaning">{name.meaning}</p>
        </div>

        <div className="modal-body">
          <p className="modal-desc">{name.description}</p>
          {name.reference && (
            <p className="modal-ref">Reference: {name.reference}</p>
          )}
        </div>

        <div className="modal-actions">
          <button className="action-btn" onClick={playAudio} title="Play Audio">
            <FiPlay /> <span>Listen</span>
          </button>
          <button className="action-btn" onClick={copyToClipboard} title="Copy">
            <FiCopy /> <span>Copy</span>
          </button>
          <button className="action-btn" onClick={shareName} title="Share">
            <FiShare2 /> <span>Share</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NameModal;