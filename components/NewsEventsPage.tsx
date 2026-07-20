import React, { useState, useEffect } from 'react';
import { NEWS_EVENTS } from '../constants';
import Reveal from './Reveal';
import { Calendar, ArrowRight, BookOpen, Share2 } from 'lucide-react';
import { NewsEvent } from '../types';

interface NewsEventsPageProps {
  onNavigateToNewsEvent: (id: string) => void;
}

const NewsEventsPage: React.FC<NewsEventsPageProps> = ({ onNavigateToNewsEvent }) => {
  const [filter, setFilter] = useState<'All' | 'News' | 'Event'>('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = filter === 'All' 
    ? NEWS_EVENTS 
    : NEWS_EVENTS.filter(item => item.type === filter);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="bg-gray-50 py-16 mb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">News & Events</h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Stay updated with our latest organizational news, upcoming workshops, conferences, and stakeholder engagements.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
          <div className="flex flex-wrap gap-2">
            {['All', 'News', 'Event'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  filter === type 
                    ? 'bg-burgundy-700 text-white shadow-md' 
                    : 'bg-white/60 backdrop-blur-md text-gray-600 border border-gray-200 hover:border-burgundy-300 hover:text-burgundy-700'
                }`}
              >
                {type === 'Event' ? 'Events' : type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <div 
                className="group bg-white/60 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col h-full"
                onClick={() => onNavigateToNewsEvent(item.id)}
              >
                <div className="h-60 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="bg-teal-600/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {item.type}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2 text-teal-600" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {item.summary}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-teal-600 font-bold text-sm uppercase tracking-wide group-hover:text-burgundy-700 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsEventsPage;
