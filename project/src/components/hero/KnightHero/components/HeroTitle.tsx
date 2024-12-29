import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../../utils/animations/variants';

interface HeroTitleProps {
  title: string;
  subtitle: string;
}

export const HeroTitle: React.FC<HeroTitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5 }}
        className="text-4xl md:text-5xl font-cinzel font-bold text-white mt-12 text-center"
      >
        {title}
      </motion.h2>
      
      <motion.p
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.7 }}
        className="text-xl text-gray-400 mt-6 max-w-2xl text-center"
      >
        {subtitle}
      </motion.p>
    </>
  );
};