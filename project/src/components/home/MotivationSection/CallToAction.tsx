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
      className="text-center"
    >
      <h3 className="text-3xl font-cinzel font-bold text-auzrix-white mb-6">
        STOP WAITING. START DOING.
      </h3>
      <p className="text-xl text-auzrix-gray mb-8 max-w-2xl mx-auto">
        Every day you wait is another day wasted. Join thousands who've already transformed their lives.
      </p>
      <Link to="/tools">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-auzrix btn-glow"
        >
          <span className="btn-content">
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </span>
        </motion.button>
      </Link>
    </motion.div>
  );
};