import React from 'react';
import { FOCUS_AREAS } from '../constants';
import Reveal from './Reveal';
import { ArrowRight } from 'lucide-react';

interface FocusAreasProps {
  onNavigateToCategory: (category: string) => void;
}

const FocusAreas: React.FC<FocusAreasProps> = ({ onNavigateToCategory }) => {
  return (
    <section id="focus-areas" className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-800/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-burgundy-800/5 blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="text-burgundy-700 font-bold uppercase tracking-wider text-sm mb-2">Core Sectors</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Areas of Focus</h3>
              <p className="mt-4 text-lg text-gray-500">
                L4D specializes in critical sectors that define the region's development trajectory. Click on a sector to see related projects.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {FOCUS_AREAS.map((area, index) => (
              <div 
                key={index} 
                onClick={() => onNavigateToCategory(area.title)}
                className="group relative overflow-hidden rounded-[30px] shadow-md cursor-pointer h-72 lg:h-80 hover:shadow-2xl hover:shadow-teal-900/20 transition-all duration-500"
              >
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Improved Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-95" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex justify-between items-end">
                    <div className="flex-1 pr-4">
                      <h4 className="text-2xl font-bold text-white font-serif mb-2 group-hover:text-teal-200 transition-colors">{area.title}</h4>
                      <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 line-clamp-2">
                        {area.description}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100 flex-shrink-0">
                      <div className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-colors">
                         <ArrowRight className="text-white h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FocusAreas;