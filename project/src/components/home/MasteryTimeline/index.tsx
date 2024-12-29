import React from 'react';
import { motion } from 'framer-motion';
import { Sword } from 'lucide-react';
import { TimelinePhase } from './TimelinePhase';
import { timelinePhases } from './data';

export const MasteryTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-auzrix-black via-auzrix-black to-auzrix-black/95 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-auzrix-white/5 via-transparent to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="bg-auzrix-white/5 p-4 rounded-full">
              <Sword className="w-8 h-8 text-auzrix-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-cinzel font-bold text-auzrix-white mb-8">
            THE PATH TO MASTERY
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-2xl text-auzrix-white font-cinzel">
              Discipline Isn't a Gift—It's a Skill You Build
            </p>
            <p className="text-xl text-auzrix-gray">
              This isn't a straight path. It's a grind, step by step. But if you commit, it's yours.
            </p>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-auzrix-gray/20">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full bg-gradient-to-b from-auzrix-white/40 to-transparent"
            />
          </div>

          {/* Timeline Phases */}
          {timelinePhases.map((phase, index) => (
            <TimelinePhase
              key={phase.id}
              phase={phase}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-auzrix btn-glow">
            <span className="btn-content">
              Start Your Path
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};