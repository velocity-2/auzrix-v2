import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const HeroContent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="text-center max-w-4xl mx-auto px-4 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-16 relative"
      >
        <motion.h2 
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-xl tracking-[0.5em] text-auzrix-gray uppercase font-cinzel"
        >
          Welcome To
        </motion.h2>

        <div className="relative mt-4">
          <div className="absolute inset-0 bg-gradient-radial from-auzrix-white/20 via-transparent to-transparent blur-2xl transform scale-150" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-7xl md:text-8xl font-black tracking-[0.3em] text-auzrix-white relative font-cinzel"
          >
            AUZRIX
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-xl text-auzrix-white font-cinzel mt-8 mb-12 leading-relaxed tracking-wider max-w-2xl mx-auto"
        >
          Built with discipline, driven by purpose.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex justify-center space-x-6"
        >
          <Link to="/shop">
            <button className="btn-auzrix btn-glow">
              <span className="btn-content">
                Begin Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};