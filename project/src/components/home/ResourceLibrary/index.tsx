import React from 'react';
import { motion } from 'framer-motion';
import { Library, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ResourceCard } from './ResourceCard';
import { resources } from './data';

export const ResourceLibrarySection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-auzrix-black to-auzrix-black/95 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-auzrix-white/5 via-transparent to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block p-4 bg-auzrix-white/5 rounded-full mb-6">
            <Library className="w-8 h-8 text-auzrix-white" />
          </div>
          <h2 className="text-4xl font-cinzel font-bold text-auzrix-white mb-4">
            YOUR WARRIOR TOOLKIT
          </h2>
          <p className="text-xl text-auzrix-gray max-w-2xl mx-auto">
            Every Tool You Need to Stay Disciplined. Your success isn't random—it's built with the right tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <ResourceCard key={resource.id} {...resource} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/resources">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-auzrix btn-glow"
            >
              <span className="btn-content">
                Explore the Library
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};