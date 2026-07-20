import React from 'react';
import Reveal from './Reveal';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { NEWS_EVENTS } from '../constants';

interface NewsEventsPreviewProps {
  onViewMore?: () => void;
  onNavigateToNewsEvent?: (id: string) => void;
}

const NewsEventsPreview: React.FC<NewsEventsPreviewProps> = ({ onViewMore, onNavigateToNewsEvent }) => {
  const latestEvents = NEWS_EVENTS.slice(0, 3); // Get latest 3

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-sm font-bold tracking-widest text-teal-700 uppercase mb-3">News & Events</h2>
              <h3 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900">Latest Updates</h3>
            </Reveal>
          </div>
          {onViewMore && (
            <Reveal delay={200}>
              <button 
                onClick={onViewMore}
                className="hidden md:flex items-center text-teal-700 font-bold hover:text-teal-800 transition-colors group"
              >
                View All News & Events <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </Reveal>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestEvents.map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <div 
                className="bg-white/60 backdrop-blur-md rounded-[24px] border border-white/60 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,128,128,0.08)] hover:-translate-y-1 hover:border-teal-100 transition-all duration-300 group cursor-pointer h-full flex flex-col"
                onClick={() => onNavigateToNewsEvent && onNavigateToNewsEvent(item.id)}
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                   <div className="absolute top-4 left-4 z-10">
                     <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md ${
                       item.type === 'Event' ? 'bg-burgundy-500/90 text-white' : 'bg-teal-600/90 text-white'
                     }`}>
                       {item.type}
                     </span>
                   </div>
                   {item.image ? (
                     <img 
                       src={item.image} 
                       alt={item.title} 
                       className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                     />
                   ) : (
                     <div className="w-full h-full bg-gray-100 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                        <Calendar className="h-12 w-12 text-gray-300" />
                     </div>
                   )}
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5"><Calendar size={16} /> {item.date}</span>
                    {item.author && <span className="flex items-center gap-1.5"><User size={16} /> {item.author}</span>}
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed max-w-none text-base line-clamp-3 mb-6 flex-grow">
                    {item.summary}
                  </p>

                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <span className="text-teal-700 font-bold text-sm tracking-wide group-hover:text-teal-800 flex items-center gap-1">
                      Read More <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {onViewMore && (
           <div className="mt-12 text-center md:hidden">
             <button 
               onClick={onViewMore}
               className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-teal-50 text-teal-700 font-bold rounded-full hover:bg-teal-100 transition-colors"
             >
               View All News & Events <ArrowRight className="ml-2 h-5 w-5" />
             </button>
           </div>
        )}
      </div>
    </section>
  );
};

export default NewsEventsPreview;
