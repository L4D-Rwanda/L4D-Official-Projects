import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  if (!TESTIMONIALS || TESTIMONIALS.length === 0) return null;

  return (
    <section className="py-24 bg-teal-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-sm font-bold tracking-widest text-teal-700 uppercase mb-3">Testimonials</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900">What Our Partners Say</h3>
          </Reveal>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-[32px] p-8 md:p-16 shadow-xl relative">
            <Quote className="absolute top-8 left-8 text-teal-100 rotate-180 w-16 h-16 md:w-24 md:h-24" />
            
            <div className="relative z-10 text-center">
               <p className="text-xl md:text-2xl lg:text-3xl font-serif text-gray-800 leading-relaxed mb-10 italic">
                 "{TESTIMONIALS[currentSlide].quote}"
               </p>
               
               <div className="flex flex-col items-center">
                 {/* Placeholder for avatar if needed, otherwise just name/title */}
                 <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                   {TESTIMONIALS[currentSlide].name.charAt(0)}
                 </div>
                 <h4 className="text-lg font-bold text-gray-900">{TESTIMONIALS[currentSlide].name}</h4>
                 <p className="text-teal-700">{TESTIMONIALS[currentSlide].title}</p>
               </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full bg-white text-gray-400 hover:text-teal-700 hover:bg-teal-50 shadow-sm border border-gray-100 transition-all focus:outline-none"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'w-8 bg-teal-600' : 'w-2 bg-teal-200'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full bg-white text-gray-400 hover:text-teal-700 hover:bg-teal-50 shadow-sm border border-gray-100 transition-all focus:outline-none"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
