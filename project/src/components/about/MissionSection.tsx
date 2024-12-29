import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Sword } from 'lucide-react';

const principles = [
  {
    icon: Shield,
    title: 'Discipline First',
    description: 'Build habits that make success automatic'
  },
  {
    icon: Target,
    title: 'Clear Purpose',
    description: 'Every action aligned with your mission'
  },
  {
    icon: Sword,
    title: 'Relentless Growth',
    description: 'Push beyond comfort, embrace the challenge'
  }
];

export const MissionSection: React.FC = () => {
  return (
    <section className="py-20 bg-auzrix-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-auzrix-white/20"></div>
            <h2 className="text-4xl font-cinzel font-bold mb-8">Our Mission</h2>
            <p className="text-auzrix-gray mb-8 text-lg">
              We exist to help individuals break through their limitations and achieve 
              greatness through disciplined action and unwavering focus.
            </p>
            <div className="space-y-6">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 bg-auzrix-white/5 rounded-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-cinzel font-bold mb-1">{principle.title}</h3>
                      <p className="text-auzrix-gray">{principle.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
              alt="Our Mission"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-auzrix-black via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};