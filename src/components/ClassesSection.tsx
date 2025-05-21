import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Users, Calendar, ChevronRight, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const classes = [
  {
    id: 1, title: "HIIT Training", image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "cardio", duration: "45 min", trainer: "Alex Johnson", maxParticipants: 20, schedule: "Mon, Wed, Fri - 6:00 AM"
  },
  {
    id: 2, title: "Power Yoga", image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "yoga", duration: "60 min", trainer: "Sarah Chen", maxParticipants: 15, schedule: "Tue, Thu - 7:00 AM"
  },
  {
    id: 3, title: "Weightlifting", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "strength", duration: "50 min", trainer: "Mike Torres", maxParticipants: 12, schedule: "Mon, Wed, Fri - 5:30 PM"
  },
  {
    id: 4, title: "Spinning", image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "cardio", duration: "40 min", trainer: "Emma Roberts", maxParticipants: 25, schedule: "Tue, Thu, Sat - 6:30 PM"
  },
  {
    id: 5, title: "Pilates", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "yoga", duration: "55 min", trainer: "David Lee", maxParticipants: 18, schedule: "Wed, Sat - 9:00 AM"
  },
  {
    id: 6, title: "CrossFit", image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "strength", duration: "60 min", trainer: "Jessica Allen", maxParticipants: 15, schedule: "Mon, Thu - 7:30 PM"
  }
];

const categoryTabs = [
  { value: "all", label: "All Classes" },
  { value: "cardio", label: "Cardio" },
  { value: "strength", label: "Strength" },
  { value: "yoga", label: "Yoga & Wellness" }
];

const classInfoItems = [
  { Icon: Clock, getContent: cls => cls.duration },
  { Icon: Users, getContent: cls => `Max ${cls.maxParticipants} participants` },
  { Icon: Calendar, getContent: cls => cls.schedule }
];

const ClassesSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const transition = `transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`;

  return (
    <section id="classes" className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden mt-24">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-classes" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-classes)" />
        </svg>
      </div>
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-white/10 animate-float blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gray-400/20 animate-float blur-3xl animation-delay-1000"></div>
      <div className="absolute top-3/4 right-1/3 h-40 w-40 rounded-full bg-white/10 animate-float blur-2xl animation-delay-2000"></div>

      <div className="container py-16 mx-auto px-4 z-10 lg:py-0">
        {/* Header */}
        <div className={transition + " text-center mb-16"}>
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-4">
            <p className="text-sm text-gray-200 font-medium flex items-center justify-center">
              <Activity className="w-4 h-4 mr-2 text-white" /> OUR CLASSES
            </p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="block text-white mb-2">FIND THE PERFECT</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 relative">
              CLASS FOR YOU
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-white to-gray-400 rounded-full transform scale-x-0 origin-left transition-transform duration-1000 ease-out" 
                style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
            </span>
          </h2>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className={transition + " flex justify-center mb-12"}>
            <TabsList className="bg-white/10 backdrop-blur-sm p-1 border border-white/20">
              {categoryTabs.map(tab => (
                <TabsTrigger key={tab.value} value={tab.value} className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-gray-300">
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className={transition + " grid sm:grid-cols-2 lg:grid-cols-3 gap-8"}>
              {classes.filter(cls => activeTab === "all" || cls.category === activeTab).map((cls) => (
                <div key={cls.id} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:bg-white/20 transition-all duration-300 group">
                  <div className="relative h-60 overflow-hidden">
                    <img src={cls.image} alt={cls.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-xs uppercase font-semibold border border-white/20">
                      {cls.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{cls.title}</h3>
                    <div className="space-y-2 mb-6">
                      {classInfoItems.map(({Icon, getContent}, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <Icon className="h-4 w-4 mr-2 text-white" /><span className="text-sm">{getContent(cls)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Trainer: {cls.trainer}</span>
                      <Button size="sm" variant="ghost" className="text-white hover:text-white/80 p-3 flex items-center group" onClick={() => navigate('/schedule')}>
                        Book Now <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className={transition + " text-center mt-12"}>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-6 py-6 text-lg" onClick={() => navigate('/schedule')}>
            View All Classes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;