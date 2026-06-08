import React, { useState, useEffect } from 'react';
import { Target, Eye, Heart, Quote, ChevronLeft, ChevronRight, ArrowRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import Reveal from './Reveal';

interface AboutProps {
  onViewMore?: () => void;
}

const About: React.FC<AboutProps> = ({ onViewMore }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-advance
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextTestimonial, 6000); 
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  return (
    <section id="about" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div>
              <h2 className="text-burgundy-700 font-bold uppercase tracking-wider text-sm mb-2">Who We Are</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                A Centre of Excellence for Policy & Development
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Established in October 2012, High Lands Centre of Leadership for Development (L4D) operates from Kigali to serve the region. We bridge the gap between academic research and practical policy implementation.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our work strengthens online visibility, credibility, and international positioning, ensuring that development initiatives in agriculture, environment, and education are evidence-based and impactful.
              </p>
              {onViewMore && (
                <button 
                  onClick={onViewMore}
                  className="inline-flex items-center px-6 py-3 border-2 border-teal-700 rounded-full text-teal-700 font-bold hover:bg-teal-700 hover:text-white group transition-all duration-300"
                >
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              )}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-teal-100 rounded-[40px] rotate-3 scale-95 transform translate-x-2 translate-y-2"></div>
              <img 
                src="https://lh3.googleusercontent.com/d/1De3GysxtCdJ8VaMuM9HUpaycNcXi2-aA" 
                alt="L4D Abstract 3D Representation" 
                className="relative rounded-[40px] shadow-2xl w-full object-cover h-[400px] lg:h-[500px] animate-float"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 md:p-8 rounded-[30px] shadow-xl hidden md:block border border-gray-100">
                <p className="text-teal-700 text-3xl font-bold font-serif mb-1">Since</p>
                <p className="text-gray-500 text-2xl font-bold uppercase tracking-wider">2012</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mission Vision Values Cards */}
        <Reveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg shadow-teal-900/5 hover:shadow-xl hover:shadow-teal-900/10 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-teal-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Target className="text-teal-700 h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 font-serif">Our Mission</h4>
              <p className="text-gray-600 leading-relaxed">To inform policy practices through applied research and policy advisory services.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg shadow-burgundy-900/5 hover:shadow-xl hover:shadow-burgundy-900/10 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-burgundy-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-burgundy-700 h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 font-serif">Our Vision</h4>
              <p className="text-gray-600 leading-relaxed">An internationally recognized Centre in shaping policy practices and research mentorship.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg shadow-teal-900/5 hover:shadow-xl hover:shadow-teal-900/10 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-teal-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-teal-700 h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 font-serif">Core Values</h4>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>Excellency</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>Integrity</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>Humility</li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Testimonials Slider */}
        <Reveal delay={400}>
          <div 
            className="mt-24 bg-teal-900 rounded-[40px] p-8 md:p-20 relative overflow-hidden shadow-2xl group cursor-default transition-all duration-500 hover:shadow-teal-900/50"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
             {/* Background decoration */}
             <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4 pointer-events-none">
                <Quote size={400} className="text-white" />
             </div>
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

             <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                
                {/* Header Icon */}
                <div className="mb-10 animate-fade-in-up">
                  <div className="inline-flex p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-inner">
                    <Quote size={32} className="text-teal-300" />
                  </div>
                </div>
                
                {/* Content Container - Adaptive Height */}
                <div className="w-full min-h-[300px] flex flex-col items-center justify-center text-center relative px-4 transition-all duration-300">
                   {TESTIMONIALS.map((t, idx) => (
                     idx === currentTestimonial && (
                       <div 
                         key={idx} 
                         className="flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-4 zoom-in-95 duration-500 ease-out w-full"
                       >
                          <div className="mb-8 flex gap-1.5 justify-center">
                            {[1, 2, 3, 4, 5].map((s) => (
                               <Star key={s} size={20} className="text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <p className="text-xl md:text-2xl lg:text-3xl text-white font-serif leading-relaxed italic mb-10 drop-shadow-md max-w-4xl mx-auto opacity-95">
                            "{t.quote}"
                          </p>
                          
                          <div className="flex flex-col items-center transform transition-all duration-500">
                            <h5 className="text-white font-bold text-xl tracking-wide mb-1">{t.name}</h5>
                            <p className="text-teal-200/80 text-sm uppercase tracking-widest font-semibold">{t.title}</p>
                          </div>
                       </div>
                     )
                   ))}
                </div>

                {/* Controls */}
                <div className="flex items-center gap-6 mt-12 z-20">
                  <button 
                    onClick={prevTestimonial}
                    className="group p-4 rounded-full border border-teal-700 bg-teal-800/50 text-teal-100 hover:bg-white hover:text-teal-900 hover:border-white transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-teal-500/20"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="flex gap-3 bg-black/20 p-2 rounded-full backdrop-blur-sm">
                    {TESTIMONIALS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentTestimonial(idx)}
                        className={`transition-all duration-300 rounded-full h-2.5 ${
                          idx === currentTestimonial 
                            ? 'bg-white w-8 shadow-glow' 
                            : 'bg-white/30 w-2.5 hover:bg-white/60'
                        }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
                  
                  <button 
                    onClick={nextTestimonial}
                    className="group p-4 rounded-full border border-teal-700 bg-teal-800/50 text-teal-100 hover:bg-white hover:text-teal-900 hover:border-white transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-teal-500/20"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
             </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;