import React, { useEffect, useState } from 'react';
import { CLIENTS } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PartnerSliderProps {
  theme?: 'light' | 'dark';
}

const PartnerSlider: React.FC<PartnerSliderProps> = ({ theme = 'light' }) => {
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
  }, [isPaused, totalPages, itemsPerView]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  const isDark = theme === 'dark';

  return (
    <div className="w-full">
        {/* Carousel Container */}
        <div 
          className="relative w-full max-w-6xl mx-auto px-4 md:px-12 group/slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
            {/* Navigation Arrows */}
            <button 
              onClick={handlePrev}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none hidden md:flex active:scale-95 ${isDark ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20' : 'bg-white text-gray-600 hover:text-teal-700 hover:border-teal-100 border border-gray-100'}`}
              aria-label="Previous partners"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={handleNext}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none hidden md:flex active:scale-95 ${isDark ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20' : 'bg-white text-gray-600 hover:text-teal-700 hover:border-teal-100 border border-gray-100'}`}
              aria-label="Next partners"
            >
              <ChevronRight size={24} />
            </button>

            {/* Gradient Masks for Fade Effect */}
            <div className={`absolute left-0 top-0 bottom-0 w-8 md:w-24 z-10 pointer-events-none ${isDark ? 'bg-gradient-to-r from-teal-900 to-transparent' : 'bg-gradient-to-r from-slate-50 to-transparent'}`}></div>
            <div className={`absolute right-0 top-0 bottom-0 w-8 md:w-24 z-10 pointer-events-none ${isDark ? 'bg-gradient-to-l from-teal-900 to-transparent' : 'bg-gradient-to-l from-slate-50 to-transparent'}`}></div>
            
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
                           className={`w-full h-32 rounded-xl flex items-center justify-center p-6 group relative transition-all duration-300 ${isDark ? 'bg-white shadow-lg border border-white/10 hover:scale-105' : 'bg-white border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-teal-100'}`}
                           title={client.name}
                         >
                             {client.logo ? (
                               <img 
                                  src={client.logo} 
                                  alt={client.name} 
                                  loading="lazy"
                                  className={`max-w-full max-h-full object-contain transition-transform duration-300 transform group-hover:scale-110 ${isDark ? 'opacity-95 group-hover:opacity-100' : ''}`} 
                               />
                             ) : (
                               <span className={`font-bold text-center ${isDark ? 'text-teal-900' : 'text-gray-700'}`}>{client.name}</span>
                             )}
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
                      ? (isDark ? 'w-8 bg-white' : 'w-8 bg-teal-600')
                      : (isDark ? 'w-2 bg-white/30 hover:bg-white/60' : 'w-2 bg-gray-300 hover:bg-teal-300')
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
        </div>
    </div>
  );
};

export default PartnerSlider;
