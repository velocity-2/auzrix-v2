import React from 'react';
import { motion } from 'framer-motion';
import { SwordBlade } from './components/SwordBlade';
import { SwordHandle } from './components/SwordHandle';

export const Sword: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      <SwordHandle />
      <SwordBlade />
    </motion.div>
  );
};