import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StoryCard } from './StoryCard';
import { successStories } from './data';

export const SuccessStoriesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-auzrix-black to-auzrix-black/95 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block p-4 bg-auzrix-white/5 rounded-full mb-6">
            <Trophy className="w-8 h-8 text-auzrix-white" />
          </div>
          <h2 className="text-4xl font-cinzel font-bold text-auzrix-white mb-4">
            Warriors Who Conquered
          </h2>
          <p className="text-xl text-auzrix-gray max-w-2xl mx-auto">
            Real stories from warriors who transformed their lives using our methods.
          </p>
        </motion.div>

        <div className="space-y-16 mb-16">
          {successStories.map((story, index) => (
            <StoryCard key={story.id} {...story} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/stories">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-auzrix btn-glow"
            >
              <span className="btn-content">
                Read More Stories
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};