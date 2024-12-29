import React from 'react';
import { HeroContent } from './HeroContent';
import { ParticleBackground } from '../../ParticleBackground';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-auzrix-black">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <HeroContent />
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-auzrix-white rounded-full p-1">
          <div className="w-2 h-2 bg-auzrix-white rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};