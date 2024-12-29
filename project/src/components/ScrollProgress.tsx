import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-auzrix-white/20 z-50 origin-left"
      style={{ scaleX }}
    >
      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-auzrix-white/40 to-auzrix-white/60" />
    </motion.div>
  );
}