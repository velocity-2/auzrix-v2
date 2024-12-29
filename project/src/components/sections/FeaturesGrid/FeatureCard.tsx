import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-auzrix-black/80 to-auzrix-black rounded-lg p-8 border border-auzrix-gray/20 hover:border-auzrix-white/40 transition-all duration-500"
    >
      {/* Geometric Accent */}
      <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-auzrix-white/20 rounded-tr-xl" />
      
      {/* Icon Container */}
      <div className="relative mb-6">
        <div className="bg-auzrix-white/5 p-4 rounded-lg w-16 h-16 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-8 h-8 text-auzrix-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-auzrix-white/20 via-transparent to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-cinzel font-bold text-auzrix-white mb-4 tracking-wide">
        {title}
      </h3>
      <p className="text-auzrix-gray leading-relaxed">
        {description}
      </p>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-auzrix-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
    </motion.div>
  );
};