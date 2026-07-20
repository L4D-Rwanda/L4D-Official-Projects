import React, { useState } from 'react';
import { FileText, Search, Newspaper } from 'lucide-react';
import { PUBLICATIONS } from '../constants';
import Reveal from './Reveal';

interface PublicationsProps {
  onViewMore?: () => void;
  onNavigateToCategory?: (category: string, title?: string) => void;
}

const Publications: React.FC<PublicationsProps> = ({ onViewMore, onNavigateToCategory }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['All', 'Report', 'Policy Brief', 'Working Paper'];

  // Only show first 3 items on homepage/section view
  const displayLimit = 3;
  
  const filteredPublications = PUBLICATIONS.filter(pub => {
    const matchesTab = activeTab === 'All' || pub.type === activeTab;
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  }).slice(0, displayLimit);

  return (
    <section id="publications" className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-24">
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[300px] h-[300px] rounded-full bg-burgundy-500/5 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
            <div>
               <h2 className="text-burgundy-700 font-bold uppercase tracking-wider text-sm mb-2">Knowledge Hub</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Latest Publications</h3>
            </div>
            <div className="relative group w-full md:w-auto z-10">
               {/* Enhanced Search Bar */}
               <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
               <div className="relative">
                  <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search resources..." 
                      className="pl-12 pr-6 py-4 border-2 border-gray-100 bg-white/60 backdrop-blur-md rounded-full text-base text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 w-full md:w-96 transition-all shadow-lg group-hover:shadow-xl"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 p-1 bg-teal-50 rounded-full text-teal-600 group-hover:text-teal-800 transition-colors">
                    <Search className="h-4 w-4" />
                  </div>
               </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-gray-100 pb-4">
             {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 ${
                    activeTab === category
                      ? 'bg-teal-700 text-white shadow-lg shadow-teal-900/10 transform scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 hover:shadow-sm'
                  }`}
                >
                  {category}
                </button>
             ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="grid gap-6 min-h-[200px]">
            {filteredPublications.length > 0 ? (
                filteredPublications.map((pub, index) => (
                  <div 
                    key={index} 
                    onClick={() => onNavigateToCategory && onNavigateToCategory(pub.type, pub.title)}
                    className="flex flex-col md:flex-row md:items-center justify-between bg-white/60 backdrop-blur-xl border border-white p-6 rounded-3xl hover:border-teal-500 transition-all duration-300 group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,128,128,0.08)] hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 cursor-pointer relative overflow-hidden"
                  >
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    <div className="flex items-start gap-5 relative z-10 w-full">
                      <div className={`p-4 rounded-xl transition-all duration-300 shadow-sm group-hover:shadow-md ${
                          pub.type === 'Report' ? 'bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white' :
                          pub.type === 'Policy Brief' ? 'bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white' :
                          pub.type === 'News & Insights' ? 'bg-burgundy-50 text-burgundy-700 group-hover:bg-burgundy-600 group-hover:text-white' :
                          'bg-gray-50 text-gray-700 group-hover:bg-gray-600 group-hover:text-white'
                        }`}>
                        {pub.type === 'News & Insights' ? <Newspaper className="h-6 w-6" /> : <FileText className="h-6 w-6" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-teal-900 transition-colors mb-2">{pub.title}</h4>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 group-hover:text-gray-600">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${
                             pub.type === 'Report' ? 'bg-teal-50 text-teal-700 border-teal-100' :
                             pub.type === 'Policy Brief' ? 'bg-teal-50 text-teal-700 border-teal-100' :
                             pub.type === 'News & Insights' ? 'bg-burgundy-50 text-burgundy-700 border-burgundy-100' :
                             'bg-gray-50 text-gray-700 border-gray-100'
                          }`}>
                            {pub.type}
                          </span>
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-teal-400 transition-colors"></span>
                          <span className="font-medium">{pub.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            ) : (
                <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300 text-gray-500">
                    <p>No publications found for this category.</p>
                </div>
            )}
          </div>
          
          {onViewMore && (
            <div className="text-center mt-12">
                <button 
                  onClick={onViewMore}
                  className="inline-flex items-center text-burgundy-700 font-bold hover:text-burgundy-900 transition-colors group active:scale-95 px-6 py-2"
                >
                    View All Publications
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default Publications;