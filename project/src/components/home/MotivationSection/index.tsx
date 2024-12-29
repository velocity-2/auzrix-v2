import React from 'react';
import { MotivationTitle } from './MotivationTitle';
import { HarshTimeline } from './HarshTimeline';
import { CallToAction } from './CallToAction';

export const MotivationSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-auzrix-black via-auzrix-black to-auzrix-black/95 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-auzrix-white/5 via-transparent to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <MotivationTitle />
        </div>

        <HarshTimeline />

        <CallToAction />
      </div>
    </section>
  );
};