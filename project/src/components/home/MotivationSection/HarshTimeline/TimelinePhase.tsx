import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TimelinePhaseProps {
  phase: {
    phase: string;
    days: string;
    icon: LucideIcon;
    points: string[];
  };
  index: number;
  isLeft: boolean;
}

export const TimelinePhase: React.FC<TimelinePhaseProps> = ({ phase, index, isLeft }) => {
  const Icon = phase.icon;
  
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
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-auzrix-red/20 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="bg-auzrix-red/10 p-6 rounded-lg">
                  <Icon className="w-8 h-8 text-auzrix-red" />
                </div>
              </div>
              
              <h3 className="text-2xl font-cinzel font-bold text-auzrix-white mb-2">
                {phase.phase}
              </h3>
              <p className="text-auzrix-red mb-4">{phase.days}</p>
              
              <div className="space-y-3">
                {phase.points.map((point, i) => (
                  <p key={i} className="text-auzrix-gray flex items-center justify-end gap-3">
                    <span>{point}</span>
                    <span className="w-1.5 h-1.5 bg-auzrix-red rounded-full mt-0.5 flex-shrink-0" />
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Timeline Node */}
        <div className="relative mx-4">
          <div className="w-4 h-4 bg-auzrix-red rounded-full border-4 border-auzrix-black z-10" />
          <div className="absolute top-2 left-1/2 -translate-x-px h-24 w-0.5 bg-gradient-to-b from-auzrix-red/40 to-transparent" />
        </div>

        {/* Right Content */}
        <div className={`flex-1 ${!isLeft ? 'pl-8' : ''}`}>
          {!isLeft && (
            <div className="flex flex-col items-start">
              <div className="relative mb-4">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-auzrix-red/20 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="bg-auzrix-red/10 p-6 rounded-lg">
                  <Icon className="w-8 h-8 text-auzrix-red" />
                </div>
              </div>
              
              <h3 className="text-2xl font-cinzel font-bold text-auzrix-white mb-2">
                {phase.phase}
              </h3>
              <p className="text-auzrix-red mb-4">{phase.days}</p>
              
              <div className="space-y-3">
                {phase.points.map((point, i) => (
                  <p key={i} className="text-auzrix-gray flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-auzrix-red rounded-full mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};