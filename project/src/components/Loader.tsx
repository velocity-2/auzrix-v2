import React from 'react';
import { Sword } from 'lucide-react';

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-auzrix-black z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 bg-auzrix-white/5 rounded-full flex items-center justify-center animate-pulse">
          <Sword className="w-8 h-8 text-auzrix-white animate-spin" />
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-auzrix-white/20 via-transparent to-transparent blur-xl" />
      </div>
    </div>
  );
}