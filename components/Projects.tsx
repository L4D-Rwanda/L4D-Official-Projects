import React, { useEffect, useState, useRef } from 'react';
import { CLIENTS } from '../constants';
import Reveal from './Reveal';
import { ArrowRight, BarChart3, Users, Award, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectsProps {
  onViewMore?: () => void;
  onContact?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewMore, onContact }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(6); // Large Desktop
      } else if (window.innerWidth >= 1024) {
        setItemsPerView(5); // Desktop
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3); // Tablet
      } else {
        setItemsPerView(2); // Mobile
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate pages
  const totalPages = Math.ceil(CLIENTS.length / itemsPerView);

  // Helper to get items for a specific page with seamless wrapping
  // This ensures the last page is always full by wrapping around to the start
  const getPageItems = (pageIndex: number) => {
    const startIndex = pageIndex * itemsPerView;
    const items = [];
    for (let i = 0; i < itemsPerView; i++) {
        const itemIndex = (startIndex + i) % CLIENTS.length;
        items.push(CLIENTS[itemIndex]);
    }
    return items;
  };

  // Autoplay logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalPages);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, totalPages, itemsPerView]); // Added itemsPerView dependency

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-24" ref={sectionRef}>
      {/* Subtle Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <Reveal>
            <div className="max-w-2xl">
              <span className="inline-block py-1 px-3 rounded-full bg-teal-100/50 border border-teal-200 text-teal-800 font-bold uppercase tracking-wider text-sm mb-6">
                Our Impact
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Driving Change Through <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-500">Research & Action</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We partner with world-class institutions to implement data-driven solutions. From policy formulation to field implementation, our work touches lives across the region.
              </p>
              
              <div className="flex flex-wrap gap-4">
                  {onViewMore && (
                    <button 
                      onClick={onViewMore}
                      className="inline-flex items-center px-8 py-3.5 bg-gray-900 text-white font-bold rounded-full hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 group"
                    >
                      View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  )}
                  {onContact && (
                     <button
                       onClick={onContact}
                       className="inline-flex items-center px-8 py-3.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95 shadow-sm"
                     >
                       Partner With Us
                     </button>
                  )}
              </div>
            </div>
          </Reveal>

          {/* Stats Grid */}
          <Reveal delay={200}>
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-xl shadow-teal-900/5 hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4 text-teal-700">
                        <BarChart3 size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">60+</h3>
                    <p className="text-sm text-gray-500 font-medium">Projects Completed</p>
                </div>
                <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-xl shadow-teal-900/5 hover:-translate-y-1 transition-transform duration-300 translate-y-8 lg:translate-y-12">
                    <div className="w-12 h-12 rounded-xl bg-burgundy-50 flex items-center justify-center mb-4 text-burgundy-700">
                        <Award size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">14+</h3>
                    <p className="text-sm text-gray-500 font-medium">Years Experience</p>
                </div>
                <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-xl shadow-teal-900/5 hover:-translate-y-1 transition-transform duration-300 -translate-y-8 lg:-translate-y-12">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-blue-700">
                        <Users size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">20+</h3>
                    <p className="text-sm text-gray-500 font-medium">Global Partners</p>
                </div>
                <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-xl shadow-teal-900/5 hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4 text-amber-700">
                        <ShieldCheck size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">100%</h3>
                    <p className="text-sm text-gray-500 font-medium">Satisfaction Rate</p>
                </div>
            </div>
          </Reveal>
        </div>

        {/* Partner Logos Slider */}
        <Reveal delay={300}>
            <div className="w-full mt-24">
                <div className="text-center mb-10">
                   <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-4">
                      <span className="flex h-2 w-2 relative">
                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                         <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                      </span>
                      <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Trusted by Global Partners</span>
                   </div>
                   <h2 className="text-3xl font-serif font-bold text-gray-900">Our Strategic Partners</h2>
                </div>
                
                {/* Carousel Container */}
                <div 
                  className="relative w-full max-w-6xl mx-auto px-4 md:px-12 group/slider"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation Arrows */}
                    <button 
                      onClick={handlePrev}
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-white rounded-full shadow-lg border border-gray-100 text-gray-600 hover:text-teal-700 hover:border-teal-100 transition-all duration-300 transform hover:scale-110 focus:outline-none hidden md:flex active:scale-95"
                      aria-label="Previous partners"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    
                    <button 
                      onClick={handleNext}
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-white rounded-full shadow-lg border border-gray-100 text-gray-600 hover:text-teal-700 hover:border-teal-100 transition-all duration-300 transform hover:scale-110 focus:outline-none hidden md:flex active:scale-95"
                      aria-label="Next partners"
                    >
                      <ChevronRight size={24} />
                    </button>

                    {/* Gradient Masks for Fade Effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
                    
                    {/* Slides Window */}
                    <div className="overflow-hidden py-8">
                       <div 
                         className="flex transition-transform duration-700 ease-in-out"
                         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                       >
                         {Array.from({ length: totalPages }).map((_, pageIndex) => (
                           <div key={pageIndex} className="w-full flex-shrink-0 grid gap-6 px-4" style={{ gridTemplateColumns: `repeat(${itemsPerView}, minmax(0, 1fr))` }}>
                             {getPageItems(pageIndex).map((client, idx) => (
                               <div key={`${pageIndex}-${idx}`} className="flex justify-center h-full">
                                 <div 
                                   className="w-full h-32 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-teal-100 transition-all duration-300 flex items-center justify-center p-6 group relative"
                                   title={client.name}
                                 >
                                     <img 
                                        src={client.logo} 
                                        alt={client.name} 
                                        loading="lazy"
                                        className="max-w-full max-h-full object-contain transition-transform duration-300 transform group-hover:scale-110" 
                                     />
                                 </div>
                               </div>
                             ))}
                           </div>
                         ))}
                       </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center items-center gap-3 mt-4">
                      {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`h-2 rounded-full transition-all duration-500 ease-out ${
                            currentSlide === idx 
                              ? 'w-8 bg-teal-600' 
                              : 'w-2 bg-gray-300 hover:bg-teal-300'
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                </div>
            </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Projects;