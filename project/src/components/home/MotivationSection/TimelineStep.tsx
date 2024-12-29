import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TimelineStepProps {
  step: {
    number: number;
    icon: LucideIcon;
    title: string;
    description: string[];
  };
  index: number;
}

export const TimelineStep: React.FC<TimelineStepProps> = ({ step, index }) => {
  const Icon = step.icon;
  const isLeft = index % 2 === 0;
  
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
                  {step.number}
                </div>
                <div className="bg-auzrix-white/5 p-6 rounded-lg">
                  <Icon className="w-8 h-8 text-auzrix-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-cinzel font-bold text-auzrix-white mb-4">
                {step.title}
              </h3>
              
              <div className="space-y-3">
                {step.description.map((text, i) => (
                  <p key={i} className="text-auzrix-gray flex items-center justify-end gap-3">
                    <span>{text}</span>
                    <span className="w-1.5 h-1.5 bg-auzrix-white rounded-full mt-0.5 flex-shrink-0" />
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Timeline Node */}
        <div className="relative mx-4">
          <div className="w-4 h-4 bg-auzrix-white rounded-full border-4 border-auzrix-black z-10" />
          <div className="absolute top-2 left-1/2 -translate-x-px h-24 w-0.5 bg-gradient-to-b from-auzrix-white/40 to-transparent" />
        </div>

        {/* Right Content */}
        <div className={`flex-1 ${!isLeft ? 'pl-8' : ''}`}>
          {!isLeft && (
            <div className="flex flex-col items-start">
              <div className="relative mb-4">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-auzrix-white/10 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                <div className="bg-auzrix-white/5 p-6 rounded-lg">
                  <Icon className="w-8 h-8 text-auzrix-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-cinzel font-bold text-auzrix-white mb-4">
                {step.title}
              </h3>
              
              <div className="space-y-3">
                {step.description.map((text, i) => (
                  <p key={i} className="text-auzrix-gray flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-auzrix-white rounded-full mt-0.5 flex-shrink-0" />
                    <span>{text}</span>
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