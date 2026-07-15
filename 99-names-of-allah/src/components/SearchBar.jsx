import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <motion.div
      className="search-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="search-box glass-panel">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by Arabic, Transliteration or Meaning..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button className="clear-btn" onClick={() => onSearch('')}>
            &times;
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default SearchBar;