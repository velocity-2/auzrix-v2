import React from 'react';
import { motion } from 'framer-motion';
import { Sword, Target, Crown, Shield } from 'lucide-react';

const milestones = [
  {
    year: '2020',
    title: 'The Birth of an Idea',
    description: '10 followers, no experience, limitless determination.',
    icon: Sword,
    detail: 'Started with a vision to transform lives through discipline and focus.',
    color: 'from-red-500/20'
  },
  {
    year: '2021',
    title: 'Building the Foundation',
    description: 'Our first products, countless late nights, and small victories.',
    icon: Shield,
    detail: 'Launched our core product line and established our warrior principles.',
    color: 'from-blue-500/20'
  },
  {
    year: '2022',
    title: 'Creating Impact',
    description: 'From 10 to 100 warriors, fueled by a growing community.',
    icon: Target,
    detail: 'Expanded globally, touching lives across continents.',
    color: 'from-yellow-500/20'
  },
  {
    year: '2023',
    title: 'A Movement Unstoppable',
    description: 'Establishing THE VISIONARIES, a global brotherhood of disciplined achievers.',
    icon: Crown,
    detail: 'Revolutionized our platform with cutting-edge digital tools.',
    color: 'from-purple-500/20'
  }
];

export const JourneySection: React.FC = () => {
  return (
    <section className="py-20 bg-auzrix-black/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-cinzel font-bold mb-4">Our Journey</h2>
          <p className="text-auzrix-gray max-w-2xl mx-auto">
            From humble beginnings to a global movement, every step shaped our legacy.
          </p>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-auzrix-gray/20">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-auzrix-white/40 to-transparent"
            />
          </div>

          {/* Timeline Items */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pt-8"
                >
                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  >
                    <div className={`w-12 h-12 bg-gradient-radial ${milestone.color} to-transparent rounded-full p-1`}>
                      <div className="w-full h-full bg-auzrix-black rounded-full border-2 border-auzrix-white flex items-center justify-center">
                        <Icon className="w-5 h-5 text-auzrix-white" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <div className="bg-auzrix-black p-6 rounded-lg border border-auzrix-gray/20 hover:border-auzrix-white/40 transition-all duration-300 h-full">
                    <span className="text-auzrix-red font-cinzel text-lg block mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-cinzel font-bold mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-auzrix-gray mb-4">
                      {milestone.description}
                    </p>
                    <p className="text-sm text-auzrix-gray/60">
                      {milestone.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};