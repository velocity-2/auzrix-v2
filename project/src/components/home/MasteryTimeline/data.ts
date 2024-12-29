import { Target, Shield, Brain, Crown } from 'lucide-react';

export const timelinePhases = [
  {
    id: 1,
    title: 'PHASE 1: STARTING OUT',
    description: 'Set your mission. The first step is clarity—knowing where you\'re headed.',
    icon: Target,
    points: [
      'Define your non-negotiable goals',
      'Create your battle plan',
      'Eliminate distractions'
    ],
    color: 'red'
  },
  {
    id: 2,
    title: 'PHASE 2: BUILDING HABITS',
    description: 'Small actions lead to massive results. Show up every single day.',
    icon: Shield,
    points: [
      'Build your morning ritual',
      'Track every victory',
      'Stay consistent, no excuses'
    ],
    color: 'blue'
  },
  {
    id: 3,
    title: 'PHASE 3: STRENGTHENING MINDSET',
    description: 'The real challenge begins when it gets hard. Push through. Grow stronger.',
    icon: Brain,
    points: [
      'Face your fears head-on',
      'Turn obstacles into fuel',
      'Build mental toughness'
    ],
    color: 'yellow'
  },
  {
    id: 4,
    title: 'PHASE 4: MASTERING DISCIPLINE',
    description: 'Consistency beats talent every time. Turn your habits into unshakable power.',
    icon: Crown,
    points: [
      'Automate excellence',
      'Lead by example',
      'Inspire others through action'
    ],
    color: 'purple'
  }
];