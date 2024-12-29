import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
}

interface StoryCardProps {
  name: string;
  title: string;
  metrics: Metric[];
  image: string;
  quote: string;
  index: number;
}

export const StoryCard: React.FC<StoryCardProps> = ({
  name,
  title,
  metrics,
  image,
  quote,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row gap-8 items-center"
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full aspect-[4/3] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-cinzel font-bold text-white mb-2">{name}</h3>
              <p className="text-auzrix-gray">{title}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <blockquote className="text-xl text-auzrix-white font-cinzel italic">
          "{quote}"
        </blockquote>

        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, i) => (
            <div 
              key={i}
              className="p-4 border border-auzrix-gray/20 rounded-lg hover:border-auzrix-white/40 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-red-500" />
                <span className="text-sm text-auzrix-gray">{metric.label}</span>
              </div>
              <p className="text-2xl font-cinzel font-bold text-auzrix-white">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};