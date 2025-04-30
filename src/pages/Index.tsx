
import React from 'react';
import RocketIllustration from '@/components/RocketIllustration';
import SubscriptionForm from '@/components/SubscriptionForm';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E5DEFF] via-white to-[#D3E4FD] z-0"></div>
      
      {/* Floating circle decorations */}
      <div className="absolute top-20 right-[20%] w-40 h-40 rounded-full bg-magical-purple/10 blur-3xl animate-pulse-light"></div>
      <div className="absolute bottom-20 left-[15%] w-60 h-60 rounded-full bg-magical-blue/10 blur-3xl animate-pulse-light delay-1000"></div>
      <div className="absolute top-1/3 left-[10%] w-20 h-20 rounded-full bg-magical-pink/10 blur-2xl animate-pulse-light delay-500"></div>
      
      <div className="container px-4 py-16 flex flex-col items-center justify-center relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-magical-purple via-magical-blue to-magical-pink">
            Something Magical is Brewing ✨
          </h1>
          
          <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-lg mx-auto">
            We're crafting something special just for you. Be the first to know when we launch—subscribe below and join the early-bird fam!
          </p>
          
          <RocketIllustration />
          
          <div className="mt-8 flex justify-center">
            <SubscriptionForm />
          </div>
        </div>
        
        <footer className="mt-20 text-sm text-gray-500">
          © {new Date().getFullYear()} • Coming Soon
        </footer>
      </div>
    </div>
  );
};

export default Index;
