import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Activity, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const trainers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    bio: "Certified strength coach with 10+ years of experience in professional sports training.",
    specialties: ["Strength Training", "Sports Performance", "Rehabilitation"],
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
      email: "alex@apexfitness.com"
    }
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Yoga & Wellness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    bio: "Experienced yoga instructor specializing in power yoga and mindfulness practices.",
    specialties: ["Power Yoga", "Meditation", "Flexibility Training"],
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
      email: "sarah@apexfitness.com"
    }
  },
  {
    id: 3,
    name: "Mike Torres",
    role: "CrossFit & HIIT",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    bio: "CrossFit Level 3 trainer with a passion for high-intensity interval training.",
    specialties: ["CrossFit", "HIIT", "Endurance Training"],
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
      email: "mike@apexfitness.com"
    }
  },
  {
    id: 4,
    name: "Emma Roberts",
    role: "Nutrition & Wellness",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    bio: "Registered dietitian and wellness coach specializing in sports nutrition.",
    specialties: ["Sports Nutrition", "Weight Management", "Wellness Coaching"],
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
      email: "emma@apexfitness.com"
    }
  }
];

const TrainersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTrainer, setActiveTrainer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="trainers" className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden mt-24">
      <SVGBackground />

      <div className="container mx-auto px-4 z-10 py-16 lg:py-0">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-4">
            <p className="text-sm text-gray-200 font-medium flex items-center justify-center">
              <Activity className="w-4 h-4 mr-2 text-white" /> OUR TRAINERS
            </p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="block text-white mb-2">MEET OUR</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 relative">
              EXPERT TRAINERS
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-white to-gray-400 rounded-full transform scale-x-0 origin-left transition-transform duration-1000 ease-out" 
                style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
            </span>
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/20 transition-all duration-300"
              onMouseEnter={() => setActiveTrainer(trainer.id)}
              onMouseLeave={() => setActiveTrainer(null)}
            >
              <div className="relative h-80">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={trainer.social.instagram} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a href={trainer.social.twitter} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                  <a href={trainer.social.linkedin} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a href={`mailto:${trainer.social.email}`} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
                <p className="text-gray-300 mb-4">{trainer.role}</p>
                
                <div className="space-y-2">
                  {trainer.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="inline-block bg-white/10 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <Button 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-6 py-6 text-lg"
            onClick={() => navigate('/contact')}
          >
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

// SVG Background Component
const SVGBackground = () => {
  return (
    <>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-trainers" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-trainers)" />
        </svg>
      </div>
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-white/10 animate-float blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gray-400/20 animate-float blur-3xl animation-delay-1000"></div>
      <div className="absolute top-3/4 right-1/3 h-40 w-40 rounded-full bg-white/10 animate-float blur-2xl animation-delay-2000"></div>
    </>
  );
};

export default TrainersSection;
