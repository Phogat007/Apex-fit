import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <footer className="relative bg-black text-gray-400 overflow-hidden">
      {/* Background gradient with animated particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 z-0">
        <SVGBackground />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <a href="#" className="inline-block">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                APEX<span className="text-white">FITNESS</span>
              </span>
            </a>
            <p className="text-gray-300">
              Your premier fitness destination for transformation and results. Join us on the journey to a better you.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 group"
                >
                  <social.icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Classes", href: "#classes" },
                { name: "Trainers", href: "#trainers" },
                { name: "Pricing", href: "#pricing" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: "123 Fitness Street, Workout City, WC 12345" },
                { icon: Phone, text: "(123) 456-7890" },
                { icon: Mail, text: "info@apexfitness.com" }
              ].map((contact, index) => (
                <li key={index} className="flex items-start group">
                  <contact.icon className="h-5 w-5 text-white mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to get special offers and news about upcoming events.</p>
            <div className="space-y-3 relative">
              <Input 
                type="email" 
                placeholder="Your email"
                className="bg-white/10 border-white/20 focus:border-white/40 text-white placeholder-gray-400 backdrop-blur-sm"
              />
              {showPopup && (
                <div className="text-center bottom-full  mb-10 px-6 py-2 bg-gray-200 text-gray-800 rounded-md shadow-lg border border-gray-300 animate-fade-in">
                  Thank you for subscribing!
                </div>
              )}
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm group" onClick={handleSubscribe}>
                Subscribe
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-300">© {currentYear} Apex Fitness. All rights reserved.</p>
          <p className="text-gray-400 mt-2 text-sm">
            Made with <span className="text-red-500">❤️</span> by{' '}
            <a 
              href="https://flux8labs.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Flux8Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
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
            <pattern id="grid-footer" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-footer)" />
        </svg>
      </div>
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-white/10 animate-float blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gray-400/20 animate-float blur-3xl animation-delay-1000"></div>
      <div className="absolute top-3/4 right-1/3 h-40 w-40 rounded-full bg-white/10 animate-float blur-2xl animation-delay-2000"></div>
    </>
  );
};

export default Footer;
