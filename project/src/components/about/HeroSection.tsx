import React from 'react';
import { motion } from 'framer-motion';
import { ParticleBackground } from '../ParticleBackground';
import { Sword } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-auzrix-black/80 via-auzrix-black to-auzrix-black"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="inline-block p-4 bg-auzrix-white/5 rounded-full mb-6">
            <Sword className="w-8 h-8 text-auzrix-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-cinzel font-bold mb-6"
        >
          More Than a Brand—
          <br />
          <span className="text-stroke-samurai bg-clip-text text-transparent bg-gradient-to-r from-auzrix-white to-auzrix-white/80">
            A Movement
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl text-auzrix-gray max-w-3xl mx-auto mb-12"
        >
          We're here to transform excuses into action, mediocrity into mastery. 
          Join a brotherhood of warriors dedicated to forging strength through discipline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
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
    </section>
  );
};