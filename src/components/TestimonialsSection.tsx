import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Users } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    image: "/api/placeholder/256/256",
    rating: 5,
    text: "The transformation I've experienced at Apex Fitness is incredible. The trainers are knowledgeable and supportive, and the community is amazing. I've never felt better!"
  },
  {
    name: "Michael Chen",
    role: "Professional Athlete",
    image: "/api/placeholder/256/256",
    rating: 5,
    text: "As a professional athlete, I need top-notch facilities and expert guidance. Apex Fitness delivers on both fronts. The equipment is state-of-the-art and the trainers are world-class."
  },
  {
    name: "Emma Rodriguez",
    role: "Yoga Instructor",
    image: "/api/placeholder/256/256",
    rating: 5,
    text: "The variety of classes and the quality of instruction at Apex Fitness is outstanding. I've been able to expand my practice and learn new techniques from amazing instructors."
  },
  {
    name: "David Kim",
    role: "Business Owner",
    image: "/api/placeholder/256/256",
    rating: 5,
    text: "Apex Fitness has become my second home. The flexible hours and premium facilities make it perfect for busy professionals. The results I've achieved are beyond my expectations."
  }
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 z-10 py-16 lg:py-0">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white/10 mb-4 border border-white/10">
            <Users className="w-4 h-4 mr-2 text-white" />
            <span className="text-sm font-medium uppercase tracking-wider text-white">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Members Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-xl">
            Real results from real people. Our community shares their experiences and transformation journeys.
          </p>
        </div>
        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10">
            <div className="flex flex-col md:flex-row items-center">
              {/* Image */}
              <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/3 p-8">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-lg"
                />
              </div>
              {/* Content */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="flex mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className={`text-gray-200 text-lg italic mb-8 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>{testimonials[current].text}</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <h3 className="text-white font-bold text-xl">{testimonials[current].name}</h3>
                    <p className="text-gray-400">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setCurrent(idx);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === current 
                      ? 'bg-gradient-to-r from-white to-gray-400 w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`View testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;