import React from 'react';
import { gradients } from '../../../../utils/styles/gradients';

export const SwordHandle: React.FC = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-8 h-24">
      <div className={`w-full h-16 ${gradients.gold} rounded-b-lg`} />
      <div className="w-20 h-8 bg-[#C0A060] absolute -left-6 top-0 rounded-full" />
    </div>
  );
};