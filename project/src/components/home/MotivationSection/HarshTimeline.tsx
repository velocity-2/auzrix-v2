import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Brain, Target, Crown, Shield } from 'lucide-react';

const phases = [
  {
    phase: 'PHASE 1: THE FANTASY',
    days: 'Days 1-7',
    icon: Brain,
    points: [
      '"This time it\'s different!"',
      'Motivation surges through your veins',
      'You\'re ready to crush every goal',
      'The world feels limitless'
    ]
  },
  {
    phase: 'PHASE 2: THE WAKE-UP CALL',
    days: 'Days 8-14',
    icon: Shield,
    points: [
      'Reality punches you in the face',
      'That fire starts dying out',
      'Excuses creep in',
      'This is where you usually quit'
    ]
  },
  {
    phase: 'PHASE 3: THE CROSSROADS',
    days: 'Days 15-30',
    icon: Crown,
    points: [
      'Motivation? Gone.',
      'Your true character emerges',
      'Weak minds surrender here',
      'Champions push through regardless'
    ]
  }
];

const rawTruth = [
  'Motivation is a LIE you tell yourself',
  'Discipline is your only reliable weapon',
  'Success doesn't care about your feelings',
  'Systems beat willpower every single time'
];

export const HarshTimeline: React.FC = () => {
  return (
    <div className="relative mb-20">
      {/* Main Timeline */}
      <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-auzrix-gray/20"></div>
      
      {/* Phases */}
      {phases.map((phase, index) => {
        const Icon = phase.icon;
        const isLeft = index % 2 === 0;
        
        return (
          <motion.div
            key={index}
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
      })}

      {/* Raw Truth Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 bg-auzrix-black/50 border border-auzrix-red/20 rounded-lg p-8"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-auzrix-red/10 p-4 rounded-full">
            <Flame className="w-8 h-8 text-auzrix-red" />
          </div>
          <h3 className="text-2xl font-cinzel font-bold text-auzrix-white">THE RAW TRUTH</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rawTruth.map((truth, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <span className="w-2 h-2 bg-auzrix-red rounded-full flex-shrink-0" />
              <p className="text-auzrix-gray">{truth}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl font-cinzel text-auzrix-white mb-4">
            Winners aren't more motivated.<br />
            They're more disciplined.
          </p>
          <p className="text-auzrix-gray">
            Stop waiting for motivation.<br />
            Start building discipline.<br />
            That's the only path forward.
          </p>
        </div>
      </motion.div>
    </div>
  );
};