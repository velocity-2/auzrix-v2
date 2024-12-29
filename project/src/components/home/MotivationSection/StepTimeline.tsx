import React from 'react';
import { Brain, Target, Sparkles } from 'lucide-react';
import { TimelineStep } from './TimelineStep';

const steps = [
  {
    number: 1,
    icon: Brain,
    title: 'MASTER YOUR MIND',
    description: [
      'Learn the key steps to building real discipline.',
      'Break free from distractions and take control of your day.',
      'Start small, build habits, and become unstoppable.'
    ]
  },
  {
    number: 2,
    icon: Target,
    title: 'TOOLS THAT WORK',
    description: [
      'Get simple templates to break your goals into easy steps.',
      'Learn how to stay consistent every single day.',
      'Use systems designed to make progress automatic.'
    ]
  },
  {
    number: 3,
    icon: Sparkles,
    title: 'AI TOOLS FOR SUCCESS',
    description: [
      'See how we use AI to make staying focused easier than ever.',
      'Get AI-powered reminders to keep you on track.',
      'Only from Auzrix, this is how you win.'
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