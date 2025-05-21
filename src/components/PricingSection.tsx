
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const basePlans = [
  {
    name: "Basic",
    description: "Perfect for beginners",
    features: [
      "Access to gym floor",
      "Basic equipment usage",
      "Group classes (2/week)",
      "Locker room access",
      "Free parking"
    ]
  },
  {
    name: "Pro",
    description: "Most popular choice",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "Personal trainer (1/month)",
      "Nutrition consultation",
      "Access to mobile app",
      "Priority booking"
    ],
    popular: true
  },
  {
    name: "Elite",
    description: "For serious athletes",
    features: [
      "Everything in Pro",
      "Unlimited personal training",
      "Recovery room access",
      "Private locker",
      "Priority equipment access",
      "Monthly massage session",
      "Guest passes (2/month)"
    ]
  }
];

const PricingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);
  const navigate = useNavigate();
  useEffect(() => { const t = setTimeout(() => setIsVisible(true), 300); return () => clearTimeout(t); }, []);
  const prices = isAnnual ? ["29", "49", "79"] : ["39", "59", "89"];
  return (
    <section id="pricing" className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden mb-6 mt-24">
      <div className="container mx-auto px-4 z-10 py-16 lg:py-0">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-4">
            <p className="text-sm text-gray-200 font-medium flex items-center justify-center">
              <Activity className="w-4 h-4 mr-2 text-white" /> PRICING PLANS
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="block text-white mb-2">CHOOSE YOUR</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 relative">
              PERFECT PLAN
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-white to-gray-400 rounded-full transform scale-x-0 origin-left transition-transform duration-1000 ease-out" style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
            </span>
          </h2>
          <div className="flex items-center justify-center space-x-4 mt-8">
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button onClick={() => setIsAnnual(!isAnnual)} className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black" style={{ backgroundColor: isAnnual ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)' }}>
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`}/>
            </button>
            <span className={`text-sm ${isAnnual ? 'text-gray-400' : 'text-white'}`}>Annual <span className="text-white/60">(Save 20%)</span></span>
          </div>
        </div>
        <div className={`grid md:grid-cols-3 gap-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {basePlans.map((plan, i) => (
            <div key={plan.name} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/20 transition-all duration-300 ${plan.popular ? 'md:-mt-8 md:mb-8' : ''}`}>
              {plan.popular && <div className="absolute top-0 right-0 bg-gradient-to-r from-white/20 to-white/10 px-4 py-1 rounded-bl-lg backdrop-blur-sm"><span className="text-sm text-white font-medium">Most Popular</span></div>}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6"><span className="text-4xl font-bold text-white">${prices[i]}</span><span className="text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8">{plan.features.map((feature, j) => (<li key={j} className="flex items-center text-gray-300"><Check className="h-5 w-5 text-white mr-3 flex-shrink-0" /><span>{feature}</span></li>))}</ul>
                <Button className={`w-full py-6 text-lg ${plan.popular ? 'bg-white text-black hover:bg-white/90' : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'} backdrop-blur-sm`} onClick={() => {const el = document.getElementById('pricing');if (el) el.scrollIntoView({ behavior: 'smooth' });}}>Get Started</Button>
              </div>
            </div>
          ))}
        </div>
        <div className={`text-center mt-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <p className="text-gray-300 mb-4">Need a custom plan? Contact us for special requirements.</p>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-6 py-6 text-lg" onClick={() => navigate('/contact')}>Contact Sales</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
