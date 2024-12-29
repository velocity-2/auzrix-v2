import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  metric,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-auzrix-black p-8 rounded-lg border border-auzrix-gray/20 hover:border-auzrix-white/40 transform hover:-translate-y-1 transition-all duration-500"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-auzrix-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
      <div className="absolute inset-0 bg-noise opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon & Metric */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative">
            <div className="bg-auzrix-white/5 p-4 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Icon className="w-8 h-8 text-auzrix-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-radial from-auzrix-white/20 via-transparent to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <span className="text-sm font-cinzel text-auzrix-white/80 bg-auzrix-white/5 px-4 py-2 rounded-full">
            {metric}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-cinzel font-bold text-auzrix-white mb-4 group-hover:text-stroke-samurai transition-all duration-500">
          {title}
        </h3>

        {/* Description */}
        <p className="text-auzrix-gray group-hover:text-auzrix-white/90 transition-colors duration-500">
          {description}
        </p>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-lg border border-auzrix-white/0 group-hover:border-auzrix-white/20 transition-colors duration-300" />
    </motion.div>
  );
};