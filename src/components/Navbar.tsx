
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Activity, Dumbbell, Users } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#classes', label: 'Classes' },
  { href: '#trainers', label: 'Trainers' },
  { href: '#pricing', label: 'Pricing' }
];
const additionalLinks = [
  { href: '/schedule', label: 'Schedule' },
  { href: '/contact', label: 'Contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      ['home', 'about', 'classes', 'trainers', 'pricing'].forEach(section => {
        const el = document.getElementById(section);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 100 && r.bottom >= 100) setActiveSection(section);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleSectionNav = (e, section) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else navigate('/', { state: { scrollTo: section } });
    setIsMobileMenuOpen(false);
  };
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'}`}>
      <div className="absolute inset-0 overflow-hidden">
        {isScrolled && <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-80"></div>}
        <div className={`absolute bottom-0 left-0 right-0 h-[1px] ${isScrolled ? 'bg-gradient-to-r from-transparent via-white/30 to-transparent' : 'bg-transparent'}`}>
          <div className="absolute h-full w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse-flow"></div>
        </div>
      </div>
      <nav className="container mx-auto px-4 flex items-center justify-between relative z-10">
        <div className="flex items-center">
          <a href="/" className="group flex items-center">
            <div className="mr-2"><Activity className="w-6 h-6 text-white transform transition-all group-hover:scale-110 duration-300" /></div>
            <span className={`font-bold transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-2xl'}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">APEX</span>
              <span className="text-white">FITNESS</span>
            </span>
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={e => handleSectionNav(e, link.href.substring(1))} className={`text-gray-200 relative group ${activeSection === link.href.substring(1) ? 'text-white' : 'text-gray-300'}`}>
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-white to-gray-400 transform origin-left transition-transform duration-300 rounded-full ${activeSection === link.href.substring(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </a>
          ))}
          {additionalLinks.map(link => (
            <a key={link.href} href={link.href} className="text-gray-200 hover:text-white relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-white to-gray-400 transform origin-left transition-transform duration-300 rounded-full scale-x-0 group-hover:scale-x-100"></span>
            </a>
          ))}
          <Button className={`bg-gradient-to-r from-white to-gray-400 hover:from-gray-200 hover:to-gray-500 text-black transition-all group duration-300 shadow-lg shadow-white/10 hover:shadow-white/20 ${isScrolled ? 'px-4 py-1' : 'px-6 py-2'}`} onClick={() => navigate('/trial')}>
            Join Now
            <div className="w-1 h-1 rounded-full bg-black absolute -bottom-0.5 -right-0.5 group-hover:w-full group-hover:h-full group-hover:opacity-10 transition-all duration-300"></div>
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`text-white relative overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'bg-white/10' : ''}`}>
            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></span>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 backdrop-blur-md border-t border-white/5">
          <div className="flex flex-col px-4 py-6">
            {[...navLinks, ...additionalLinks].map((link, i) => (
              <a key={link.href} href={link.href} onClick={link.href.startsWith('#') ? e => handleSectionNav(e, link.href.substring(1)) : () => setIsMobileMenuOpen(false)} className={`text-gray-200 py-3 relative transition-all transform ${activeSection === link.href.substring(1) ? 'text-white pl-4' : 'text-gray-300 hover:pl-4'} animate-fade-slide-down`} style={{ animationDelay: `${i * 100}ms` }}>
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${activeSection === link.href.substring(1) ? 'bg-white' : 'bg-transparent'}`}></span>
                {link.label}
              </a>
            ))}
            <div className="mt-6 bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10 animate-fade-slide-down" style={{ animationDelay: '500ms' }}>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-2"><Users className="text-white w-4 h-4" /><span className="text-gray-200 text-sm">Join 10,000+ active members</span></div>
                <div className="flex items-center gap-2"><Dumbbell className="text-white w-4 h-4" /><span className="text-gray-200 text-sm">Access to 200+ equipment</span></div>
                <Button className="bg-gradient-to-r from-white to-gray-400 hover:from-gray-200 hover:to-gray-500 text-black w-full shadow-lg shadow-white/10" onClick={() => {navigate('/trial');setIsMobileMenuOpen(false);}}>Join Now</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;