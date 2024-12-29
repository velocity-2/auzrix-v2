import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Sword } from 'lucide-react';

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-lg w-full bg-auzrix-black border border-auzrix-gray/20 rounded-lg p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-auzrix-gray hover:text-auzrix-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-auzrix-white/5 rounded-full">
                <Sword className="w-8 h-8 text-auzrix-white animate-pulse" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-cinzel font-bold text-auzrix-white mb-4">
                STOP. THIS IS YOUR MOMENT.
              </h3>
              <div className="space-y-4 mb-6">
                <p className="text-xl text-auzrix-gray">
                  Every time you walk away, you're choosing comfort over greatness.
                </p>
                <p className="text-lg text-auzrix-white font-cinzel">
                  Not this time. Not today.
                </p>
              </div>
              <div className="bg-auzrix-white/5 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-cinzel text-auzrix-white mb-2">
                  FREE WARRIOR'S TOOLKIT
                </h4>
                <ul className="text-auzrix-gray space-y-2">
                  <li>• Daily Discipline Tracker</li>
                  <li>• Morning Warrior Routine</li>
                  <li>• Focus Enhancement Guide</li>
                </ul>
              </div>
              <p className="text-sm text-auzrix-gray italic">
                Join 50,000+ warriors who've already transformed their lives
              </p>
            </div>

            {/* Download Button */}
            <button 
              onClick={() => {
                // Handle download
                onClose();
              }}
              className="btn-auzrix btn-glow w-full group"
            >
              <span className="btn-content">
                Claim Your Warrior's Toolkit
                <Download className="ml-2 w-5 h-5 group-hover:transform group-hover:translate-y-0.5 transition-transform" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};