import React from 'react';
import { Compass, Cog, Mountain, Flag, Sword, Shield, Target, Crown } from 'lucide-react';
import { TimelinePhase } from './TimelinePhase';
import { TimelineProgress } from './TimelineProgress';

const phases = [
  {
    title: 'STOP DREAMING. START DOING.',
    description: 'Your excuses end here. Right now.',
    icon: Sword,
    secondaryIcon: Compass,
    points: [
      'No more "someday" - this is your moment',
      'Write your mission in stone, not pencil',
      'Turn your goals into daily commands'
    ],
    color: 'red'
  },
  {
    title: 'BUILD YOUR SYSTEM',
    description: 'Motivation fails. Systems don\'t.',
    icon: Shield,
    secondaryIcon: Cog,
    points: [
      'Create routines that eliminate weakness',
      'Track every win, learn from every loss',
      'Make progress automatic, not optional'
    ],
    color: 'blue'
  },
  {
    title: 'EMBRACE THE PAIN',
    description: 'Growth lives outside your comfort zone.',
    icon: Target,
    secondaryIcon: Mountain,
    points: [
      'Stop avoiding what scares you',
      'Turn every obstacle into fuel',
      'Let others quit. You keep going.'
    ],
    color: 'yellow'
  },
  {
    title: 'DOMINATE YOUR PATH',
    description: 'Average is for everyone else.',
    icon: Crown,
    secondaryIcon: Flag,
    points: [
      'Make excellence your only standard',
      'Inspire others through your actions',
      'Never stop evolving, never settle'
    ],
    color: 'purple'
  }
];

export const Timeline: React.FC = () => {
  return (
    <div className="relative">
      <TimelineProgress />
      {phases.map((phase, index) => (
        <TimelinePhase 
          key={index}
          phase={phase}
          index={index}
        />
      ))}
    </div>
  );
};