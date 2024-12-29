import React from 'react';
import { Brain, Shield, Crown, Flame } from 'lucide-react';
import { TimelinePhase } from './TimelinePhase';
import { RawTruth } from './RawTruth';

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
      <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-auzrix-gray/20" />
      
      {/* Phases */}
      {phases.map((phase, index) => (
        <TimelinePhase
          key={index}
          phase={phase}
          index={index}
          isLeft={index % 2 === 0}
        />
      ))}

      {/* Raw Truth Section */}
      <RawTruth truths={rawTruth} />
    </div>
  );
};