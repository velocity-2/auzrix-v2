import React from 'react';
import { motion } from 'framer-motion';

export const Scrollwork: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="absolute inset-0 pointer-events-none"
    >
      {/* Top Left Corner */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="absolute inset-0 border-l-4 border-t-4 border-[#C0A060] rounded-tl-3xl" />
        <div className="absolute inset-4 border-l-2 border-t-2 border-[#C0A060]/50 rounded-tl-2xl" />
      </div>

      {/* Top Right Corner */}
      <div className="absolute top-0 right-0 w-32 h-32">
        <div className="absolute inset-0 border-r-4 border-t-4 border-[#C0A060] rounded-tr-3xl" />
        <div className="absolute inset-4 border-r-2 border-t-2 border-[#C0A060]/50 rounded-tr-2xl" />
      </div>

      {/* Bottom Left Corner */}
      <div className="absolute bottom-0 left-0 w-32 h-32">
        <div className="absolute inset-0 border-l-4 border-b-4 border-[#C0A060] rounded-bl-3xl" />
        <div className="absolute inset-4 border-l-2 border-b-2 border-[#C0A060]/50 rounded-bl-2xl" />
      </div>

      {/* Bottom Right Corner */}
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute inset-0 border-r-4 border-b-4 border-[#C0A060] rounded-br-3xl" />
        <div className="absolute inset-4 border-r-2 border-b-2 border-[#C0A060]/50 rounded-br-2xl" />
      </div>
    </motion.div>
  );
};