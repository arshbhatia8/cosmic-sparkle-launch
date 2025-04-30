
import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

const RocketIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center my-8">
      {/* Cloud base */}
      <div className="absolute bottom-0 w-48 h-16 bg-white rounded-full opacity-90 blur-sm transform translate-y-2"></div>
      
      {/* Rocket with animation */}
      <div className="relative animate-float z-10">
        <div className="text-magical-purple">
          <Rocket size={80} strokeWidth={1.5} className="animate-pulse-light" />
        </div>
        
        {/* Flames */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-10 bg-gradient-to-t from-magical-blue via-magical-pink to-transparent rounded-b-full animate-pulse-light"></div>
      </div>
      
      {/* Sparkles */}
      <div className="absolute top-1/4 right-1/4 animate-sparkle text-magical-pink">
        <Sparkles size={16} />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-sparkle delay-1000 text-magical-blue">
        <Sparkles size={12} />
      </div>
      <div className="absolute top-1/2 left-1/4 animate-sparkle delay-500 text-magical-purple">
        <Sparkles size={18} />
      </div>
      
      {/* Clouds */}
      <div className="absolute top-10 left-10 w-20 h-8 bg-white rounded-full opacity-70 blur-sm"></div>
      <div className="absolute bottom-10 right-10 w-16 h-6 bg-white rounded-full opacity-60 blur-sm"></div>
    </div>
  );
};

export default RocketIllustration;
