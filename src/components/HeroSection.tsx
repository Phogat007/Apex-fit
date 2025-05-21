
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Activity, Dumbbell, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const stats = [
  { icon: Users, title: "Active Members", value: "10,000+" },
  { icon: Dumbbell, title: "Equipment", value: "200+" },
  { icon: Activity, title: "Classes Weekly", value: "50+" }
];
const overlays = [
  { text: "24/7 Access", className: "-top-4 -right-4 rotate-3" },
  { text: "Personal Training", className: "-bottom-4 -left-4 -rotate-3 animation-delay-1000" }
];
const circles = [
  "top-1/4 left-1/4 h-64 w-64 bg-white/10 blur-3xl",
  "bottom-1/4 right-1/4 h-96 w-96 bg-gray-400/20 blur-3xl animation-delay-1000",
  "top-3/4 right-1/3 h-40 w-40 bg-white/10 blur-2xl animation-delay-2000"
];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => { const t = setTimeout(() => setIsVisible(true), 300); return () => clearTimeout(t); }, []);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      {circles.map((cls, i) => <div key={i} className={`absolute rounded-full animate-float ${cls}`}></div>)}
      <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="url(#gradient1)" className="animate-wave-slow" />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="container mx-auto px-4 z-10 py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className={`text-left transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-4">
              <p className="text-sm text-gray-200 font-medium flex items-center">
                <Activity className="w-4 h-4 mr-2 text-white" /> Premium Fitness Experience
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="block text-white mb-2">TRANSFORM YOUR</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 relative">
                BODY & MIND
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-white to-gray-400 rounded-full transform scale-x-0 origin-left transition-transform duration-1000 ease-out" style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-lg">Unlock your full potential with our expert trainers, cutting-edge equipment, and supportive community. Your journey to a healthier you starts here.</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="bg-gradient-to-r from-white to-gray-400 hover:from-gray-200 hover:to-gray-500 text-black px-6 py-6 text-lg group transition-all duration-300 shadow-lg shadow-white/20" onClick={() => navigate('/trial')}>
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform text-black" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-6 py-6 text-lg backdrop-blur-sm" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Plans
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {stats.map((stat, i) => (
                <div key={i} className={`bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10 ${i === 2 ? 'md:col-span-1 col-span-2' : ''}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className="text-white w-5 h-5" />
                    <p className="text-gray-200 font-medium">{stat.title}</p>
                  </div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`relative flex justify-center transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="relative w-full aspect-square max-w-lg">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-white/20 to-gray-400/20 blur-2xl animate-pulse-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/80 to-transparent z-10"></div>
                      <img src="/gym.avif" alt="Fitness trainer" className="w-full h-full object-cover object-center grayscale" />
                    </div>
                  </div>
                  {overlays.map((overlay, i) => (
                    <div key={i} className={`absolute p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg z-20 transform animate-float-slow ${overlay.className}`}>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                        <p className="text-white font-medium">{overlay.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-12 h-12 border-2 border-white/50 rounded-lg transform rotate-12 animate-spin-slow"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-2 border-gray-400/50 rounded-full animate-spin-slow animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;