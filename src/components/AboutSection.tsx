import React, { useEffect, useState } from 'react';
import { CheckCircle, Users, Dumbbell, Activity, Clock, Medal, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
      return () => observer.unobserve(section);
    }
  }, []);

  const features = [
    { title: "Modern Equipment", description: "State-of-the-art fitness machines and equipment to ensure effective workouts.", icon: Dumbbell },
    { title: "Expert Trainers", description: "Certified personal trainers who provide customized fitness programs.", icon: Users },
    { title: "Diverse Classes", description: "Various classes ranging from HIIT to yoga for all fitness levels.", icon: Activity },
    { title: "Nutrition Support", description: "Nutritional guidance to complement your fitness routine.", icon: CheckCircle }
  ];

  const achievements = [
    { value: "5K+", label: "Happy Members" },
    { value: "40+", label: "Expert Trainers" },
    { value: "15+", label: "Years Experience" },
    { value: "20+", label: "Fitness Programs" }
  ];

  const timelineItems = [
    { year: 2008, text: "Apex Fitness was founded with a mission to transform lives" },
    { year: 2012, text: "Expanded to include specialized training programs" },
    { year: 2018, text: "Opened 5 new locations across the country" },
    { year: 2023, text: "Introduced holistic wellness approach" }
  ];

  const fadeIn = (delay = 0) => `transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${delay ? `delay-${delay}` : ''}`;
  const translateX = (dir, delay = 0) => `${fadeIn(delay)} ${isVisible ? 'translate-x-0' : `${dir < 0 ? '-' : ''}translate-x-12`}`;
  const translateY = (delay = 0) => `${fadeIn(delay)} ${isVisible ? 'translate-y-0' : 'translate-y-12'}`;

  return (
    <section id="about" className="relative py-24 bg-transparent overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grid-about" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid-about)" />
        </svg>
      </div>
      <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-white/5 animate-float blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gray-400/10 animate-float blur-3xl animation-delay-1000"></div>
      <div className="absolute top-2/3 right-1/3 h-40 w-40 rounded-full bg-white/5 animate-float blur-2xl animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-4">
            <p className="text-sm text-gray-200 font-medium flex items-center justify-center">
              <Activity className="w-4 h-4 mr-2 text-white" /> Our Story
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="block text-white mb-2">DISCOVER WHO WE ARE</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 relative inline-block">
              AND OUR MISSION
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-white to-gray-400 rounded-full transform origin-left transition-transform duration-1000 ease-out" 
                style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
            </span>
          </h2>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 ${translateY()}`}>
          {achievements.map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center transition-all hover:bg-white/20"
                 style={{ transitionDelay: `${i * 100}ms` }}>
              <p className="text-3xl font-bold text-white mb-1">{item.value}</p>
              <p className="text-gray-300 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Timeline */}
          <div className={translateX(-1)}>
            <div className="relative pl-8 border-l border-white/20 space-y-8">
              {timelineItems.map((item, i) => (
                <div key={i} className="relative" style={{ transitionDelay: `${i * 150}ms` }}>
                  <div className="absolute -left-10 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                    <p className="text-lg font-bold text-white">{item.year}</p>
                    <p className="text-gray-300 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Philosophy */}
          <div className={translateY(300)}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 h-full">
              <h3 className="text-2xl font-bold text-white mb-4">Our Philosophy</h3>
              <p className="text-gray-200 mb-6">
                At Apex Fitness, we're more than just a place to work out – we're a community dedicated to helping you achieve your fitness goals. With cutting-edge equipment, expert trainers, and a supportive environment.
              </p>
              <p className="text-gray-200 mb-6">
                We believe fitness is a journey, not a destination. Our approach combines physical training, nutritional guidance, and mental wellness to create a balanced lifestyle that empowers you to be your best self.
              </p>
              <div className="mt-auto">
                <a href="#classes" className="inline-flex items-center text-white bg-white/20 hover:bg-white/30 transition-colors px-5 py-2 rounded-lg font-medium">
                  Explore Our Services <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className={translateX(1, 500)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
                     style={{ transitionDelay: `${i * 100 + 500}ms` }}>
                  <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                    <feature.icon className="text-white w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Gallery */}
        <div className={`mt-16 ${translateY(700)}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            <div className="md:col-span-1 aspect-video md:aspect-square rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="Gym training" className="w-full h-full object-cover object-center" />
            </div>
            <div className="md:col-span-2 aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="Group fitness" className="w-full h-full object-cover object-center" />
              <div className="absolute bottom-4 left-4 z-20 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                <div className="flex items-center gap-2">
                  <Medal className="w-5 h-5 text-white" />
                  <p className="text-white font-medium">Award-winning facilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;