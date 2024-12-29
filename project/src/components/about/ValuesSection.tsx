import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Sword, Crown, Heart, Star } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Excellence Without Compromise',
    description: 'We set the highest standards in everything we do.'
  },
  {
    icon: Target,
    title: 'Relentless Growth',
    description: 'Every day is an opportunity to become stronger.'
  },
  {
    icon: Sword,
    title: 'Discipline Over Motivation',
    description: 'Build systems that make success automatic.'
  },
  {
    icon: Crown,
    title: 'Unwavering Accountability',
    description: 'Take ownership of your actions and results.'
  },
  {
    icon: Heart,
    title: 'Strength in Brotherhood',
    description: 'Support and elevate each other to greatness.'
  },
  {
    icon: Star,
    title: 'Lead by Example',
    description: 'Actions speak louder than words.'
  }
];

export const ValuesSection: React.FC = () => {
  return (
    <section className="py-20 bg-auzrix-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-cinzel font-bold mb-4">Our Core Values</h2>
          <p className="text-auzrix-gray max-w-2xl mx-auto">
            These principles guide everything we do and shape who we become.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-auzrix-black p-8 rounded-lg border border-auzrix-gray/20 hover:border-auzrix-white/40 transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="bg-auzrix-white/5 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-auzrix-white" />
                </div>
                <h3 className="text-xl font-cinzel font-bold mb-3">{value.title}</h3>
                <p className="text-auzrix-gray">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};