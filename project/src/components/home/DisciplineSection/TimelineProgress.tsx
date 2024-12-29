import React from 'react';
import { motion } from 'framer-motion';

export const TimelineProgress: React.FC = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: '100%' }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-auzrix-gray/20"
    >
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full bg-gradient-to-b from-auzrix-white/40 to-transparent"
      />
    </motion.div>
  );
};