import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface MotivationCardProps {
  icon: LucideIcon;
  title: string;
  description: string[];
  index: number;
}

export const MotivationCard: React.FC<MotivationCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative bg-auzrix-black p-8 rounded-lg border border-auzrix-gray/20 hover:border-auzrix-white/40 transition-all duration-500"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-auzrix-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
      <div className="absolute inset-0 bg-noise opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="relative mb-8">
          <div className="bg-auzrix-white/5 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <Icon className="w-8 h-8 text-auzrix-white" />
          </div>
          <div className="absolute inset-0 bg-gradient-radial from-auzrix-white/20 via-transparent to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-cinzel font-bold text-auzrix-white mb-6 group-hover:text-stroke-samurai transition-all duration-500">
          {title}
        </h3>

        {/* Description List */}
        <ul className="space-y-4">
          {description.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index * 0.2) + (i * 0.1) }}
              className="flex items-start gap-4 text-auzrix-gray group-hover:text-auzrix-white/90 transition-colors duration-500"
            >
              <span className="w-1.5 h-1.5 bg-auzrix-white rounded-full mt-2 flex-shrink-0 group-hover:bg-red-500 transition-colors duration-500" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};