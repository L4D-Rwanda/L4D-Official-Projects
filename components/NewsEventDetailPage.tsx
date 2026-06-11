import React, { useEffect } from 'react';
import { NEWS_EVENTS, PROJECTS } from '../constants';
import Reveal from './Reveal';
import { ArrowLeft, Calendar, Share2, Printer, Tag, ArrowRight } from 'lucide-react';

interface NewsEventDetailPageProps {
  id: string;
  onBack: () => void;
  onNavigateToProject?: (id: string) => void;
}

const NewsEventDetailPage: React.FC<NewsEventDetailPageProps> = ({ id, onBack, onNavigateToProject }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const item = NEWS_EVENTS.find(i => i.id === id);

  if (!item) {
    return (
      <div className="pt-32 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Item not found</h2>
          <button 
            onClick={onBack}
            className="text-teal-600 font-bold hover:text-teal-800 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Find related projects (if explicitly linked, or based on title matching)
  const relatedProjects = item.relatedProjectId 
    ? PROJECTS.filter(p => p.id === item.relatedProjectId)
    : PROJECTS.filter(project => {
      const categoryKeywords = project.category.split(' ').filter((w: string) => w.length > 3);
      const titleKeywords = project.title.split(' ').filter((w: string) => w.length > 4);
      const searchTerms = [...categoryKeywords, ...titleKeywords];
      return searchTerms.some((term: string) => item.title.toLowerCase().includes(term.toLowerCase()));
    }).slice(0, 2);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.summary,
        url: window.location.href,
      }).catch(console.error);
    }
  };

  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <button 
            onClick={onBack}
            className="flex items-center text-gray-500 hover:text-teal-600 font-bold mb-8 transition-colors group print:hidden"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to News & Events
          </button>

          {/* Hero Section */}
          <div className="bg-white rounded-t-[40px] overflow-hidden shadow-sm border border-gray-100 border-b-0">
             <div className="h-[400px] w-full relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 w-full">
                   <div className="flex flex-wrap items-center gap-3 mb-4">
                     <span className="bg-teal-500/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                       {item.type}
                     </span>
                     <span className="bg-black/50 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs flex items-center justify-center border border-white/20">
                       <Calendar className="w-3.5 h-3.5 mr-1.5" />
                       {item.date}
                     </span>
                   </div>
                   <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                     {item.title}
                   </h1>
                </div>
             </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-b-[40px] shadow-sm border border-gray-100 border-t-0 flex flex-col md:flex-row gap-12 relative animate-in slide-in-from-bottom-8 duration-700">
             
             {/* Toolbar */}
             <div className="md:w-16 flex md:flex-col gap-4 sticky top-32 h-fit print:hidden shrink-0">
                <button 
                  onClick={handleShare}
                  className="w-12 h-12 bg-gray-50 hover:bg-teal-50 text-gray-500 hover:text-teal-600 rounded-full flex items-center justify-center transition-all shadow-sm border border-gray-100"
                  title="Share"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                <button 
                  onClick={handlePrint}
                  className="w-12 h-12 bg-gray-50 hover:bg-teal-50 text-gray-500 hover:text-teal-600 rounded-full flex items-center justify-center transition-all shadow-sm border border-gray-100"
                  title="Print"
                >
                  <Printer className="w-5 h-5" />
                </button>
             </div>

             {/* Main Content */}
             <div className="flex-1">
                <div className="prose prose-lg prose-teal max-w-none text-gray-700 leading-relaxed">
                  <p className="text-xl font-medium text-gray-900 mb-8 leading-snug">
                    {item.summary}
                  </p>
                  
                  {/* Simulate markdown paragraphs for content */}
                  {item.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-6">{paragraph}</p>
                  ))}
                  
                  <blockquote className="border-l-4 border-burgundy-700 pl-6 my-10 italic text-xl text-gray-900 bg-burgundy-50/50 p-6 rounded-r-2xl">
                     "Our commitment to disseminating valuable information through our events and news platform ensures that evidence-based knowledge reaches those who can enact real change."
                  </blockquote>

                  {/* Related Projects Section */}
                  {relatedProjects.length > 0 && (
                     <div className="mt-16 pt-8 border-t border-gray-100 print:hidden">
                        <h3 className="text-2xl font-bold font-serif text-gray-900 mb-8 flex items-center gap-2">
                           <Tag className="w-6 h-6 text-teal-600" />
                           Related Projects
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                           {relatedProjects.map((project, idx) => (
                              <div 
                                key={idx} 
                                onClick={() => onNavigateToProject && onNavigateToProject(project.id)}
                                className="flex flex-col bg-slate-50 border border-gray-100 rounded-2xl overflow-hidden hover:border-teal-200 hover:shadow-lg transition-all group/project cursor-pointer"
                              >
                                 <div className="h-40 w-full overflow-hidden relative">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/project:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-3 left-4">
                                       <span className="text-xs font-bold uppercase tracking-wider text-white bg-teal-600/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
                                          {project.category}
                                       </span>
                                    </div>
                                 </div>
                                 <div className="p-6 flex-1 flex flex-col">
                                    <h4 className="font-bold text-gray-900 mb-2 group-hover/project:text-teal-700 transition-colors line-clamp-2">
                                       {project.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 line-clamp-2 flex-1">
                                       {project.description}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-gray-200/60 flex items-center justify-between">
                                       <span className="text-xs font-medium text-gray-500">{project.year}</span>
                                       <span className="text-teal-600 group-hover/project:translate-x-1 transition-transform flex items-center gap-1 text-sm font-medium">
                                          View Project <ArrowRight className="w-4 h-4" />
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  )}

                  <hr className="my-12 border-gray-100" />
                  
                  <p className="text-sm text-gray-500 italic">
                    Published by L4D Communications on {item.date}
                  </p>
                </div>
             </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default NewsEventDetailPage;
