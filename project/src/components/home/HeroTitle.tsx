import React from 'react';
import { motion } from 'framer-motion';

interface HeroTitleProps {
  text: string;
}

const letterVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8 + i * 0.1,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const HeroTitle: React.FC<HeroTitleProps> = ({ text }) => {
  return (
    <div className="relative mt-4">
      <div className="absolute inset-0 bg-gradient-radial from-auzrix-white/20 via-transparent to-transparent blur-2xl transform scale-150" />
      <motion.h1 className="text-7xl md:text-8xl font-black tracking-[0.3em] text-auzrix-white relative font-cinzel">
        {text.split('').map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="relative inline-block hover:text-auzrix-gray-light transition-colors duration-300"
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};