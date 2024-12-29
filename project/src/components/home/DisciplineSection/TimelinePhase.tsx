import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TimelinePhaseProps {
  phase: {
    title: string;
    description: string;
    icon: LucideIcon;
    secondaryIcon: LucideIcon;
    points: string[];
    color: string;
  };
  index: number;
}

const colorVariants = {
  red: 'from-red-500/20 to-transparent',
  blue: 'from-blue-500/20 to-transparent',
  yellow: 'from-yellow-500/20 to-transparent',
  purple: 'from-purple-500/20 to-transparent'
};

export const TimelinePhase: React.FC<TimelinePhaseProps> = ({ phase, index }) => {
  const Icon = phase.icon;
  const SecondaryIcon = phase.secondaryIcon;
  const isLeft = index % 2 === 0;
  const gradientClass = colorVariants[phase.color as keyof typeof colorVariants];
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative mb-24 last:mb-0"
    >
      <div className="flex items-center justify-center">
        {/* Left Content */}
        <div className={`flex-1 ${isLeft ? 'pr-8' : ''}`}>
          {isLeft && (
            <div className="flex flex-col items-end text-right">
              <div className="relative mb-4">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-auzrix-white/10 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className={`bg-gradient-radial ${gradientClass} p-6 rounded-lg group hover:scale-105 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-auzrix-white" />
                  <SecondaryIcon className="w-4 h-4 text-auzrix-white/60 absolute bottom-2 right-2" />
                </div>
              </div>
              
              <h3 className="text-2xl font-cinzel font-bold text-auzrix-white mb-3">
                {phase.title}
              </h3>
              <p className="text-auzrix-gray mb-4">{phase.description}</p>
              <ul className="space-y-3">
                {phase.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-center justify-end gap-3 text-auzrix-gray group"
                  >
                    <span className="group-hover:text-auzrix-white transition-colors duration-300">
                      {point}
                    </span>
                    <span className="w-1.5 h-1.5 bg-auzrix-white rounded-full mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Timeline Node */}
        <div className="relative mx-4">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
            className="w-4 h-4 bg-auzrix-white rounded-full border-4 border-auzrix-black z-10"
          />
          <div className="absolute top-2 left-1/2 -translate-x-px h-24 w-0.5 bg-gradient-to-b from-auzrix-white/40 to-transparent" />
        </div>

        {/* Right Content - Mirror of Left Content */}
        <div className={`flex-1 ${!isLeft ? 'pl-8' : ''}`}>
          {!isLeft && (
            <div className="flex flex-col items-start">
              <div className="relative mb-4">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-auzrix-white/10 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className={`bg-gradient-radial ${gradientClass} p-6 rounded-lg group hover:scale-105 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-auzrix-white" />
                  <SecondaryIcon className="w-4 h-4 text-auzrix-white/60 absolute bottom-2 right-2" />
                </div>
              </div>
              
              <h3 className="text-2xl font-cinzel font-bold text-auzrix-white mb-3">
                {phase.title}
              </h3>
              <p className="text-auzrix-gray mb-4">{phase.description}</p>
              <ul className="space-y-3">
                {phase.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-center gap-3 text-auzrix-gray group"
                  >
                    <span className="w-1.5 h-1.5 bg-auzrix-white rounded-full mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <span className="group-hover:text-auzrix-white transition-colors duration-300">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};