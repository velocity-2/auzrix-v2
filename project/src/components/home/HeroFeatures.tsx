import React from 'react';
import { Sword, Shield, Crown } from 'lucide-react';

interface Feature {
  icon: typeof Sword;
  title: string;
}

const features: Feature[] = [
  { icon: Sword, title: 'Strength' },
  { icon: Shield, title: 'Resilience' },
  { icon: Crown, title: 'Leadership' }
];

export const HeroFeatures: React.FC = () => {
  return (
    <div className="flex justify-center space-x-12 mb-12">
      {features.map(({ icon: Icon, title }, index) => (
        <div 
          key={index}
          className="text-center transform hover:scale-110 transition-transform duration-300"
        >
          <div className="inline-block p-4 bg-auzrix-white/5 rounded-full mb-3 animate-pulse">
            <Icon className="h-8 w-8 text-auzrix-white" />
          </div>
          <span className="text-auzrix-white font-semibold tracking-wider">{title}</span>
        </div>
      ))}
    </div>
  );
};