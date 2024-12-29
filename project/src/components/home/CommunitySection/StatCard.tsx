import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string;
  description: string;
  metric: string;
  index: number;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
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
      className="relative bg-auzrix-black p-8 rounded-lg border border-auzrix-gray/20 hover:border-auzrix-white/40 transition-all duration-300 group"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-auzrix-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-4xl font-cinzel font-bold text-auzrix-white mb-2">
          {value}
        </h3>
        <p className="text-xl font-cinzel text-auzrix-gray mb-2">{label}</p>
        <p className="text-auzrix-gray mb-4">{description}</p>
        <div className="text-sm text-auzrix-gray/60">{metric}</div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-auzrix-white/20 rounded-tr-xl" />
    </motion.div>
  );
};