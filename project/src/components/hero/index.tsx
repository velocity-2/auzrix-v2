import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sword } from 'lucide-react';
import HeroParticles from './HeroParticles';
import HeroTitle from './HeroTitle';
import HeroFeatures from './HeroFeatures';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-auzrix-black">
      <HeroParticles />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
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

            <HeroTitle text="AUZRIX" />

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-xl text-auzrix-white font-cinzel mt-8 mb-12 leading-relaxed tracking-wider max-w-2xl mx-auto"
            >
              Built with discipline, driven by purpose.
            </motion.p>

            <HeroFeatures />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="flex justify-center space-x-6"
            >
              <Link to="/about">
                <button className="btn-auzrix btn-glow">
                  <span className="btn-content">
                    Learn More
                  </span>
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-auzrix-white rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 bg-auzrix-white rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}