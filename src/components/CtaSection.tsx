import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CtaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const transition = `transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`;

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-transparent overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}/>
      
      {/* SVG Background */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grid-cta" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid-cta)" />
        </svg>
      </div>
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-white/10 animate-float blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gray-400/20 animate-float blur-3xl animation-delay-1000"></div>
      <div className="absolute top-3/4 right-1/3 h-40 w-40 rounded-full bg-white/10 animate-float blur-2xl animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center ${transition}`}>
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-4">
            <p className="text-sm text-gray-200 font-medium flex items-center justify-center">
              <Activity className="w-4 h-4 mr-2 text-white" /> START YOUR JOURNEY
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="block text-white mb-2">READY TO</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 relative">
              TRANSFORM YOUR BODY?
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-white to-gray-400 rounded-full transform scale-x-0 origin-left transition-transform duration-1000 ease-out" 
                style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            Join Apex Fitness today and start your fitness journey with a 7-day free trial. No commitment required.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gradient-to-r from-white to-gray-400 hover:from-gray-200 hover:to-gray-500 text-black px-8 py-6 text-lg group transition-all duration-300 shadow-lg shadow-white/20"
              onClick={() => navigate('/trial')}>
              Get Started Now <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform text-black" />
            </Button>
            
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
              onClick={() => navigate('/contact')}>
              Book a Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;