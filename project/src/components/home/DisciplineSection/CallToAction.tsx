import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CallToAction: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-2xl mx-auto"
    >
      <h3 className="text-4xl font-cinzel font-bold text-auzrix-white mb-6">
        YOUR TIME IS NOW
      </h3>
      <p className="text-xl text-auzrix-gray mb-4">
        Discipline doesn't wait.
      </p>
      <p className="text-lg text-auzrix-gray mb-8">
        If you want to achieve something great, start today.
      </p>
      <Link to="/shop">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-auzrix btn-glow"
        >
          <span className="btn-content">
            Forge it
            <ArrowRight className="ml-2 w-5 h-5" />
          </span>
        </motion.button>
      </Link>
    </motion.div>
  );
};