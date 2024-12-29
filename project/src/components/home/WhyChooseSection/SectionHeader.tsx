import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SectionHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-cinzel font-bold text-auzrix-white mb-4">
        Why Choose Auzrix
      </h2>
      <p className="text-auzrix-gray max-w-2xl mx-auto mb-8">
        We combine discipline, resilience, and proven strategies to help you achieve greatness.
      </p>
      <Link to="/about">
        <button className="btn-auzrix btn-glow">
          <span className="btn-content">
            See How It Works
            <ArrowRight className="ml-2 w-5 h-5" />
          </span>
        </button>
      </Link>
    </motion.div>
  );
};