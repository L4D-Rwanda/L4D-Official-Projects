import React, { useEffect, useState } from 'react';
import { PUBLICATIONS } from '../constants';
import Reveal from './Reveal';
import { FileText, Download, Search, Filter, ArrowRight, BookOpen, Calendar, ChevronRight, Loader2, Share2, Eye, X } from 'lucide-react';

interface PublicationsPageProps {
  initialCategory?: string;
  initialPublicationTitle?: string;
}

const PublicationsPage: React.FC<PublicationsPageProps> = ({ initialCategory, initialPublicationTitle }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState(initialCategory || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);
  
  const categories = ['All', 'Report', 'Policy Brief', 'Working Paper', 'News & Insights'];

  // Determine featured publication
  const featuredPub = initialPublicationTitle 
    ? PUBLICATIONS.find(pub => pub.title === initialPublicationTitle) || PUBLICATIONS[0]
    : PUBLICATIONS[0];

  const filteredPublications = PUBLICATIONS.filter(pub => {
    const matchesCategory = activeTab === 'All' || pub.type === activeTab;
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const visiblePublications = filteredPublications.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPublications.length;

  const handleLoadMore = () => {
    setLoadingMore(true);
    // Simulate network delay
    setTimeout(() => {
      setVisibleCount(prev => prev + 3);
      setLoadingMore(false);
    }, 800);
  };

  const [selectedAbstract, setSelectedAbstract] = useState<typeof PUBLICATIONS[0] | null>(null);

  const handleDownload = async (pub: typeof PUBLICATIONS[0]) => {
    if (pub.pdfUrl) {
      try {
        const response = await fetch(pub.pdfUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${pub.title}.pdf`;
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
      } catch (error) {
        console.error('Download failed:', error);
        // Fallback to opening in new tab
        window.open(pub.pdfUrl, '_blank');
      }
    } else {
      setSelectedAbstract(pub);
    }
  };

  const handleRead = (pub: typeof PUBLICATIONS[0]) => {
    if (pub.pdfUrl) {
      window.open(pub.pdfUrl, '_blank');
    } else {
      setSelectedAbstract(pub);
    }
  };

  const handleShare = async (pub: typeof PUBLICATIONS[0]) => {
    const shareData = {
      title: pub.title,
      text: `Check out this publication: ${pub.title}`,
      url: pub.pdfUrl || window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 font-sans">
      
      {/* Featured Publication Hero */}
      <div className="bg-white border-b border-gray-100 pb-16 pt-10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50/50 -skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-burgundy-50/30 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <Reveal>
             <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                   <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy-100/50 text-burgundy-800 text-xs font-bold uppercase tracking-wider mb-6 border border-burgundy-200">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-burgundy-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-burgundy-600"></span>
                      </span>
                      Featured Insight
                   </div>
                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                     {featuredPub.title}
                   </h1>
                   <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                     Our latest comprehensive analysis providing actionable recommendations for stakeholders in the region.
                   </p>
                   <div className="flex flex-wrap gap-4">
                      {featuredPub.pdfUrl ? (
                        <button 
                          onClick={() => handleDownload(featuredPub)}
                          className="px-8 py-4 bg-teal-700 text-white font-bold rounded-full hover:bg-teal-800 transition-all shadow-lg hover:shadow-teal-900/20 hover:-translate-y-1 active:scale-95 flex items-center gap-2 group"
                        >
                          <Download size={20} />
                          Download Full Report
                        </button>
                      ) : (
                        <button 
                          onClick={() => setSelectedAbstract(featuredPub)}
                          className="px-8 py-4 bg-gray-100 text-gray-600 font-bold rounded-full hover:bg-gray-200 transition-all active:scale-95 flex items-center gap-2 group"
                        >
                          <FileText size={20} />
                          View Abstract
                        </button>
                      )}
                      
                      {featuredPub.pdfUrl && (
                        <button 
                          onClick={() => handleRead(featuredPub)}
                          className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-bold rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95 flex items-center gap-2"
                        >
                          Read Online <ArrowRight size={18} />
                        </button>
                      )}
                   </div>
                </div>
                <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
                   <div className="absolute inset-0 bg-gradient-to-tr from-teal-600 to-teal-400 rounded-[30px] rotate-3 opacity-10 transform scale-95 translate-y-4"></div>
                   <div className="bg-white rounded-[30px] w-full max-w-md aspect-[4/3] flex items-center justify-center border border-gray-100 shadow-2xl relative z-10 overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                      <div className="absolute inset-0 bg-gray-50 pattern-grid-lg opacity-50"></div>
                      <BookOpen size={80} className="text-teal-700/20 group-hover:scale-110 group-hover:text-teal-700/30 transition-all duration-700" />
                      
                      {/* Document Preview Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-between p-8">
                         <div className="flex justify-between items-start">
                             <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700">
                                <FileText size={24} />
                             </div>
                             <span className="px-3 py-1 bg-gray-900 text-white text-xs font-bold uppercase rounded-full tracking-wider">
                                {featuredPub.type}
                             </span>
                         </div>
                         <div>
                            <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-1">Publication Date</p>
                            <p className="text-gray-900 font-bold text-lg">{featuredPub.date}</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
           </Reveal>
        </div>
      </div>

      {/* Main Library Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Controls - Enhanced Search Visibility */}
        <Reveal delay={100}>
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12 gap-6 sticky top-24 z-30 bg-white/95 backdrop-blur-md py-4 rounded-3xl px-6 border border-gray-100 shadow-lg transition-all">
             <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => { setActiveTab(category); setVisibleCount(6); }}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 active:scale-95 border ${
                      activeTab === category
                        ? 'bg-teal-900 text-white border-teal-900 shadow-md'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-teal-300 hover:text-teal-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
             </div>
             
             <div className="relative w-full md:w-96 group">
                {/* Glow effect for search bar */}
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-200 to-blue-200 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative">
                   <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search publications..." 
                      className="pl-12 pr-4 py-3.5 bg-white border-2 border-gray-100 rounded-full text-sm font-medium focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 w-full shadow-sm hover:shadow-md transition-all placeholder:text-gray-400 text-gray-800"
                   />
                   <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-teal-600 transition-colors" />
                </div>
             </div>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
           {visiblePublications.length > 0 ? (
              visiblePublications.map((pub, index) => (
                <Reveal key={`${pub.title}-${index}`} delay={index % 3 * 100}>
                  <div 
                    onClick={() => handleRead(pub)}
                    className="group bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 hover:border-teal-100 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer relative overflow-hidden"
                  >
                     {/* Top colored bar based on type */}
                     <div className={`absolute top-0 left-0 w-full h-1.5 ${
                        pub.type === 'Report' ? 'bg-blue-500' :
                        pub.type === 'Policy Brief' ? 'bg-emerald-500' :
                        pub.type === 'News & Insights' ? 'bg-purple-500' :
                        'bg-amber-500'
                     }`} />

                     <div className="flex justify-between items-start mb-6">
                        <div className={`p-3.5 rounded-2xl ${
                          pub.type === 'Report' ? 'bg-blue-50 text-blue-600' :
                          pub.type === 'Policy Brief' ? 'bg-emerald-50 text-emerald-600' :
                          pub.type === 'News & Insights' ? 'bg-purple-50 text-purple-600' :
                          'bg-amber-50 text-amber-600'
                        } transition-colors`}>
                           <FileText size={24} strokeWidth={1.5} />
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-wider bg-gray-50 px-3 py-1.5 rounded-full">
                           <Calendar size={12} />
                           {pub.date}
                        </div>
                     </div>
                     
                     <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors line-clamp-2 leading-tight">
                        {pub.title}
                     </h3>
                     
                     <p className="text-gray-500 text-sm mb-8 line-clamp-3 leading-relaxed">
                        Detailed analysis and findings regarding {pub.title.toLowerCase()}. This resource offers key data, methodological insights, and strategic recommendations for policymakers.
                     </p>
                     
                     <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-6">
                        <span className={`text-xs font-bold uppercase tracking-wider ${
                           pub.type === 'Report' ? 'text-blue-700' :
                           pub.type === 'Policy Brief' ? 'text-emerald-700' :
                           pub.type === 'News & Insights' ? 'text-purple-700' :
                           'text-amber-700'
                        }`}>
                           {pub.type}
                        </span>
                        
                        <div className="flex gap-2">
                          <button 
                            onClick={(e) => { e.stopPropagation(); handleShare(pub); }}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-700 hover:bg-teal-100 hover:text-teal-700 transition-all duration-300"
                            title="Share"
                          >
                             <Share2 size={18} />
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); handleDownload(pub); }}
                            className={`flex items-center justify-center w-10 h-10 rounded-full ${pub.pdfUrl ? 'bg-gray-50 text-gray-700 hover:bg-teal-700 hover:text-white' : 'bg-gray-50 text-gray-400 hover:bg-gray-200 hover:text-gray-600'} transition-all duration-300`}
                            title={pub.pdfUrl ? "Download" : "View Abstract"}
                          >
                             {pub.pdfUrl ? <Download size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                     </div>
                  </div>
                </Reveal>
              ))
           ) : (
             <div className="col-span-full py-24 text-center">
                <div className="inline-flex p-6 bg-gray-100 rounded-full mb-6">
                   <Filter size={32} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-500 max-w-md mx-auto">We couldn't find any publications matching your current filters. Try adjusting your search terms.</p>
                <button 
                  onClick={() => {setActiveTab('All'); setSearchQuery('');}}
                  className="mt-8 px-6 py-2.5 bg-white border border-gray-300 text-gray-700 font-bold rounded-full hover:bg-gray-50 transition-colors active:scale-95"
                >
                   Clear all filters
                </button>
             </div>
           )}
        </div>

        {/* Load More Pagination */}
        {hasMore && (
           <div className="text-center">
              <button 
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-full hover:bg-gray-50 hover:border-teal-200 hover:text-teal-700 transition-all shadow-sm hover:shadow-md active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                 {loadingMore ? (
                   <>
                     <Loader2 size={18} className="animate-spin" />
                     Loading...
                   </>
                 ) : (
                   <>
                     Load More Publications <ChevronRight size={18} />
                   </>
                 )}
              </button>
           </div>
        )}

      </div>

      {/* Abstract Modal */}
      {selectedAbstract && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 relative">
            <button 
              onClick={() => setSelectedAbstract(null)}
              className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                    selectedAbstract.type === 'Report' ? 'bg-blue-50 text-blue-700' :
                    selectedAbstract.type === 'Policy Brief' ? 'bg-emerald-50 text-emerald-700' :
                    selectedAbstract.type === 'News & Insights' ? 'bg-purple-50 text-purple-700' :
                    'bg-amber-50 text-amber-700'
                }`}>
                  {selectedAbstract.type}
                </span>
                <span className="text-gray-400 text-sm font-medium flex items-center gap-1">
                  <Calendar size={14} />
                  {selectedAbstract.date}
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6">
                {selectedAbstract.title}
              </h2>
              
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  Detailed analysis and findings regarding {selectedAbstract.title.toLowerCase()}. This resource offers key data, methodological insights, and strategic recommendations for policymakers.
                </p>
                <p className="mt-4">
                  This publication is currently available for abstract view only. For full access or inquiries, please contact our research department.
                </p>
              </div>
              
              <div className="flex justify-end pt-6 border-t border-gray-100">
                <button 
                  onClick={() => window.location.href = `mailto:info@hlcl4d.rw?subject=Request for Publication: ${selectedAbstract.title}`}
                  className="px-6 py-3 bg-teal-700 text-white font-bold rounded-xl hover:bg-teal-800 transition-colors"
                >
                  Request Full Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicationsPage;