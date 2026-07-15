import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NameCircle from './NameCircle';
import NameModal from './NameModal';
import namesData from '../data/names';
import './NameGrid.css';

const NameGrid = ({ searchTerm }) => {
  const [selectedName, setSelectedName] = useState(null);

  const filteredNames = useMemo(() => {
    if (!searchTerm) return namesData;
    const term = searchTerm.toLowerCase();
    return namesData.filter(
      (name) =>
        name.transliteration.toLowerCase().includes(term) ||
        name.meaning.toLowerCase().includes(term) ||
        name.arabic.includes(term)
    );
  }, [searchTerm]);

  return (
    <>
      <motion.div
        layout
        className="name-grid"
      >
        <AnimatePresence>
          {filteredNames.length > 0 ? (
            filteredNames.map((name, index) => (
              <NameCircle
                key={name.id}
                name={name}
                index={index}
                onClick={() => setSelectedName(name)}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="no-results"
            >
              <p>No Names found for "{searchTerm}"</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedName && (
          <NameModal
            name={selectedName}
            onClose={() => setSelectedName(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default NameGrid;