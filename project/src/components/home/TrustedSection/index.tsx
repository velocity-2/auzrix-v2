import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Target } from 'lucide-react';
import { StatCard } from './StatCard';

const stats = [
  {
    icon: Users,
    value: '50K+',
    label: 'Active Students'
  },
  {
    icon: Globe,
    value: '10M+',
    label: 'Total Reach'
  },
  {
    icon: Target,
    value: '95%',
    label: 'Success Rate'
  }
];

export const TrustedSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-auzrix-black to-auzrix-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-cinzel font-bold text-auzrix-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-auzrix-gray max-w-2xl mx-auto">
            Join our growing community of warriors committed to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};