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
      copyToClipboard();
    }
  };

  return (
    // Backdrop — clicking outside closes the modal
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${name.transliteration}`}
    >
      {/* Modal Box — stop click from closing when clicking inside */}
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 40 }}
        transition={{ type: 'spring', damping: 22, stiffness: 280 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button — large touch target for mobile */}
        <button
          className="modal-close"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close"
        >
          <FiX size={20} />
        </button>

        {/* Header */}
        <div className="modal-header">
          <span className="modal-number">#{name.id}</span>
          <h2 className="modal-arabic arabic-text">{name.arabic}</h2>
          <h3 className="modal-trans">{name.transliteration}</h3>
          <p className="modal-meaning">{name.meaning}</p>
        </div>

        {/* Body */}
        <div className="modal-body">
          <p className="modal-desc">{name.description}</p>
          {name.reference && (
            <p className="modal-ref">📖 {name.reference}</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="modal-actions">
          <button className="action-btn" onClick={playAudio} aria-label="Play audio">
            <FiPlay />
            <span>Listen</span>
          </button>
          <button className="action-btn" onClick={copyToClipboard} aria-label="Copy name">
            <FiCopy />
            <span>Copy</span>
          </button>
          <button className="action-btn" onClick={shareName} aria-label="Share name">
            <FiShare2 />
            <span>Share</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NameModal;