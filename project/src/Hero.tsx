import React from 'react';
import { Sword, Shield, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="bg-black text-white pt-20 relative overflow-hidden">
      {/* Animated Flame Hand */}
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] opacity-20 pointer-events-none">
        <div className="relative w-full h-full">
          {/* Hand Silhouette */}
          <div className="absolute inset-0 bg-[#ff0000] mask-hand transform -rotate-12"></div>
          
          {/* Animated Flame */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
            <div className="relative w-32 h-48">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-24 bg-gradient-to-t from-[#ff0000] via-[#ff4d00] to-transparent rounded-full animate-flame"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-20 bg-gradient-to-t from-[#ff8c00] via-[#ffb700] to-transparent rounded-full animate-flame-2 delay-100"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-gradient-to-t from-[#ffd700] via-white to-transparent rounded-full animate-flame-3 delay-200"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Animated Icons */}
        <div className="flex justify-center space-x-12 mb-12">
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="inline-block p-4 bg-[#ff0000]/10 rounded-full mb-3 animate-pulse">
              <Sword className="h-8 w-8 text-[#ff0000]" />
            </div>
            <span className="text-[#ff0000] font-semibold tracking-wider">Strength</span>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="inline-block p-4 bg-[#ff0000]/10 rounded-full mb-3 animate-pulse">
              <Shield className="h-8 w-8 text-[#ff0000]" />
            </div>
            <span className="text-[#ff0000] font-semibold tracking-wider">Resilience</span>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="inline-block p-4 bg-[#ff0000]/10 rounded-full mb-3 animate-pulse">
              <Crown className="h-8 w-8 text-[#ff0000]" />
            </div>
            <span className="text-[#ff0000] font-semibold tracking-wider">Leadership</span>
          </div>
        </div>

        <div className="text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Forge Your <span className="text-[#ff0000]">Destiny</span>
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Like a warrior sharpening their blade, we help you forge your inner strength. 
            Join our legion of champions and conquer your challenges.
          </p>
          <div className="flex justify-center space-x-6">
            <Link 
              to="/shop"
              className="group relative bg-[#ff0000] text-white px-8 py-4 rounded-md flex items-center overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center font-bold">
                BEGIN YOUR JOURNEY
                <Sword className="ml-2 w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            <Link 
              to="/about"
              className="relative border-2 border-white text-white px-8 py-4 rounded-md overflow-hidden group transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 group-hover:text-[#ff0000] transition-colors duration-300">LEARN MORE</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}