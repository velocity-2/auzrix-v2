import React from 'react';
import { Compass, Cog, Mountain, LineChart } from 'lucide-react';
import { TimelineStep } from './TimelineStep';

const steps = [
  {
    number: 1,
    icon: Compass,
    title: 'DEFINE YOUR MISSION',
    description: [
      'Goals without purpose are worthless.',
      'Find what drives you and make it your focus.',
      'Clear goals create clear paths.'
    ]
  },
  {
    number: 2,
    icon: Cog,
    title: 'BUILD YOUR SYSTEM',
    description: [
      'Discipline is built through systems.',
      'Create routines that eliminate decision fatigue.',
      'Small actions compound into massive results.'
    ]
  },
  {
    number: 3,
    icon: Mountain,
    title: 'EMBRACE THE CLIMB',
    description: [
      'Growth happens in discomfort.',
      'Every challenge is a chance to prove yourself.',
      'Your mindset determines your altitude.'
    ]
  },
  {
    number: 4,
    icon: LineChart,
    title: 'TRACK & EVOLVE',
    description: [
      'What gets measured gets improved.',
      'Learn from every victory and setback.',
      'Adjust your approach, never your goals.'
    ]
  }
];

export const StepTimeline: React.FC = () => {
  return (
    <div className="relative mb-16">
      <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-auzrix-gray/20"></div>
      {steps.map((step, index) => (
        <TimelineStep key={index} step={step} index={index} />
      ))}
    </div>
  );
};