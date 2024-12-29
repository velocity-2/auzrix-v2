import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export const CtaStrip: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-auzrix-black via-black to-auzrix-black border-t border-auzrix-gray/20 py-4 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-cinzel font-bold text-auzrix-white">
              STOP WAITING. START NOW.
            </h3>
            <p className="text-auzrix-gray">Every day you wait is another day wasted. Take action now.</p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-auzrix btn-glow whitespace-nowrap"
          >
            <span className="btn-content">
              GET YOUR WARRIOR TOOLKIT
              <Download className="ml-2 w-5 h-5" />
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};