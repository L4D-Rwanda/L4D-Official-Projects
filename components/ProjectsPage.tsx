import React, { useEffect, useState } from 'react';
import { PROJECTS, FOCUS_AREAS, PUBLICATIONS, NEWS_EVENTS } from '../constants';
import Reveal from './Reveal';
import { Project } from '../types';
import { X, Calendar, User, Tag, Activity, ArrowRight, ArrowLeft, CheckCircle2, FileText, Download, ExternalLink } from 'lucide-react';
import LazyImage from './LazyImage';

interface ProjectsPageProps {
  initialCategory?: string;
  initialProjectId?: string;
  onNavigateToPublicationCategory?: (category: string, title?: string) => void;
  onNavigateToNewsEvent?: (id: string) => void;
  onBack?: () => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ initialCategory, initialProjectId, onNavigateToPublicationCategory, onNavigateToNewsEvent, onBack }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial data load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (initialProjectId) {
      const project = PROJECTS.find(p => p.id === initialProjectId);
      if (project) {
        setSelectedProject(project);
        if (!initialCategory) {
           setActiveCategory('All');
        }
      }
    }
  }, [initialProjectId]);


  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const categories = ['All', ...FOCUS_AREAS.map(area => area.title)];

  const filteredProjects: Project[] = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeCategory);

  // Filter related publications based on category or title keywords
  const relatedPublications = selectedProject ? PUBLICATIONS.filter(pub => {
    const categoryKeywords = selectedProject.category.split(' ').filter(w => w.length > 3);
    // Add specific mapping for some categories
    if (selectedProject.category === 'Socioeconomic Development') categoryKeywords.push('Economic', 'Urban', 'Employment');
    
    const titleKeywords = selectedProject.title.split(' ').filter(w => w.length > 4);
    const searchTerms = [...categoryKeywords, ...titleKeywords];
    
    return searchTerms.some(term => pub.title.toLowerCase().includes(term.toLowerCase()));
  }).slice(0, 2) : [];

  const relatedNewsEvents = selectedProject ? NEWS_EVENTS.filter(item => {
    if (item.relatedProjectId === selectedProject.id) return true;
    const categoryKeywords = selectedProject.category.split(' ').filter(w => w.length > 3);
    if (selectedProject.category === 'Socioeconomic Development') categoryKeywords.push('Economic', 'Urban', 'Employment');
    const titleKeywords = selectedProject.title.split(' ').filter(w => w.length > 4);
    const searchTerms = [...categoryKeywords, ...titleKeywords];
    return searchTerms.some(term => item.title.toLowerCase().includes(term.toLowerCase()) || item.summary.toLowerCase().includes(term.toLowerCase()));
  }).slice(0, 2) : [];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {onBack && (
          <button 
            onClick={onBack}
            className="flex items-center text-gray-500 hover:text-teal-700 transition-colors mb-6 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Impact
          </button>
        )}
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of research and advisory projects across key development sectors.
            </p>
          </div>
        </Reveal>

        {/* Filter Tabs */}
        <Reveal delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-teal-700 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-700 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-md hover:backdrop-blur-xl hover:scale-[1.02] rounded-[30px] overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full animate-pulse">
                <div className="h-64 bg-gray-200 w-full" />
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-4 bg-gray-200 rounded w-1/4" />
                    <div className="h-4 bg-gray-200 rounded w-1/4" />
                  </div>
                  <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
                  <div className="space-y-2 mb-6 flex-grow">
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                  </div>
                  <div className="pt-6 border-t border-gray-100 mt-auto flex items-center justify-between">
                    <div className="h-4 bg-gray-200 rounded w-1/3" />
                    <div className="h-8 bg-gray-200 rounded-full w-24" />
                  </div>
                </div>
              </div>
            ))
          ) : filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 100}>
                <div className="group bg-white/60 backdrop-blur-md hover:backdrop-blur-xl hover:scale-[1.02] rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col h-full">
                  <div className="h-64 overflow-hidden relative cursor-pointer" onClick={() => setSelectedProject(project)}>
                    <LazyImage 
                      src={project.image} 
                      alt={project.title} 
                      wrapperClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-teal-800 uppercase tracking-wider shadow-sm">
                      {project.status}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-bold text-burgundy-700 flex items-center gap-2">
                        <Tag className="w-3 h-3" />
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 
                      className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      {project.title}
                    </h3>
                    
                    <div className="mb-6 flex-grow">
                      <p className="text-gray-600 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-gray-100 mt-auto flex items-center justify-between">
                      <p className="text-sm text-gray-500 truncate max-w-[50%]">
                        <span className="font-semibold text-gray-900">Client:</span> {project.client}
                      </p>
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="text-teal-700 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all group/btn"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-white/60 backdrop-blur-md hover:backdrop-blur-xl hover:scale-[1.02] rounded-[30px] border border-dashed border-gray-300">
              <p className="text-gray-500 text-lg">No projects found in this category yet.</p>
            </div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
           <div 
             className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" 
             onClick={() => setSelectedProject(null)}
           />
           
           <div className="relative bg-white/60 backdrop-blur-md hover:backdrop-blur-xl hover:scale-[1.02] rounded-[30px] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col">
               
               {/* Close Button */}
               <button 
                 onClick={() => setSelectedProject(null)} 
                 className="absolute top-6 right-6 z-20 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-all transform hover:scale-110"
               >
                  <X size={20} />
               </button>

               {/* Hero Image */}
               <div className="h-64 sm:h-96 w-full relative flex-shrink-0">
                  <LazyImage 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    wrapperClassName="w-full h-full"
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 sm:p-10 w-full">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="bg-teal-500/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-teal-400/30">
                          {selectedProject.category}
                        </span>
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${selectedProject.status === 'Completed' ? 'bg-teal-500/90 border-teal-400/30 text-white' : 'bg-teal-500/90 border-teal-400/30 text-white'} backdrop-blur-md`}>
                          {selectedProject.status}
                        </span>
                      </div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                        {selectedProject.title}
                      </h2>
                  </div>
               </div>

               {/* Content */}
               <div className="p-8 sm:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-8">
                       <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">Project Overview</h3>
                         <p className="text-gray-600 text-lg leading-relaxed">
                           {selectedProject.description}
                         </p>
                         <p className="text-gray-600 text-lg leading-relaxed mt-4">
                           {/* Placeholder for expanded content simulation since data source is limited */}
                           This project represents a significant step forward in our mission to inform policy through rigorous research. By collaborating closely with local stakeholders and utilizing advanced analytical frameworks, L4D was able to identify key levers for change. The findings from this initiative have been instrumental in shaping subsequent strategic planning and resource allocation.
                         </p>
                       </div>

                       <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                          <h4 className="font-bold text-teal-900 mb-3 flex items-center gap-2">
                             <CheckCircle2 className="w-5 h-5 text-teal-600" />
                             Key Outcomes
                          </h4>
                          <ul className="space-y-2 text-teal-800">
                             <li className="flex items-start gap-2">
                               <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></span>
                               <span>Comprehensive data collection and analysis completed across target regions.</span>
                             </li>
                             <li className="flex items-start gap-2">
                               <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></span>
                               <span>Strategic policy recommendations adopted by key stakeholders.</span>
                             </li>
                             <li className="flex items-start gap-2">
                               <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></span>
                               <span>Capacity building workshops conducted for local partners.</span>
                             </li>
                          </ul>
                       </div>

                       {/* Related Publications Section */}
                       {relatedPublications.length > 0 && (
                          <div className="pt-8 border-t border-gray-100">
                             <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif flex items-center gap-2">
                               Related Publications
                             </h3>
                             <div className="grid grid-cols-1 gap-4">
                                {relatedPublications.map((pub, idx) => (
                                   <div 
                                     key={idx} 
                                     onClick={() => onNavigateToPublicationCategory && onNavigateToPublicationCategory(pub.type, pub.title)}
                                     className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all group/pub cursor-pointer"
                                   >
                                      <div className="p-3 bg-teal-50 rounded-xl text-teal-700">
                                         <FileText size={20} />
                                      </div>
                                      <div className="flex-1">
                                         <h4 className="font-bold text-gray-900 mb-1 group-hover/pub:text-teal-700 transition-colors leading-tight">
                                            {pub.title}
                                         </h4>
                                         <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">
                                            <span className={`px-2 py-0.5 rounded-full ${
                                                pub.type === 'Report' ? 'bg-teal-50 text-teal-700' :
                                                pub.type === 'Policy Brief' ? 'bg-teal-50 text-teal-700' :
                                                'bg-gray-100 text-gray-700'
                                            } font-bold uppercase tracking-wide`}>
                                                {pub.type}
                                            </span>
                                            <span>{pub.date}</span>
                                         </div>
                                      </div>
                                      <button className="self-center p-2 text-gray-400 hover:text-teal-700 transition-colors">
                                         <ArrowRight size={18} />
                                      </button>
                                   </div>
                                ))}
                             </div>
                          </div>
                       )}

                       {/* Related News & Events Section */}
                       {relatedNewsEvents.length > 0 && (
                          <div className="pt-8 border-t border-gray-100">
                             <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif flex items-center gap-2">
                               Related News & Events
                             </h3>
                             <div className="grid grid-cols-1 gap-4">
                                {relatedNewsEvents.map((item, idx) => (
                                   <div 
                                     key={idx} 
                                     onClick={() => onNavigateToNewsEvent && onNavigateToNewsEvent(item.id)}
                                     className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all group/pub cursor-pointer"
                                   >
                                      <div className="h-16 w-16 shrink-0 rounded-xl overflow-hidden relative">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover/pub:scale-105 transition-transform" />
                                      </div>
                                      <div className="flex-1">
                                         <h4 className="font-bold text-gray-900 mb-1 group-hover/pub:text-teal-700 transition-colors leading-tight line-clamp-2">
                                            {item.title}
                                         </h4>
                                         <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">
                                            <span className={`px-2 py-0.5 rounded-full ${
                                                item.type === 'News' ? 'bg-teal-50 text-teal-700' :
                                                'bg-burgundy-50 text-burgundy-700'
                                            } font-bold uppercase tracking-wide`}>
                                                {item.type}
                                            </span>
                                            <span>{item.date}</span>
                                         </div>
                                      </div>
                                      <button className="self-center p-2 text-gray-400 hover:text-teal-700 transition-colors">
                                         <ArrowRight size={18} />
                                      </button>
                                   </div>
                                ))}
                             </div>
                          </div>
                       )}
                    </div>

                    {/* Sidebar Metadata */}
                    <div className="md:col-span-1 space-y-6">
                       <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Project Details</h4>
                          
                          <div className="space-y-5">
                             <div>
                                <div className="flex items-center gap-2 text-teal-700 mb-1">
                                   <User className="w-4 h-4" />
                                   <span className="font-bold text-sm">Client</span>
                                </div>
                                <p className="text-gray-700 font-medium">{selectedProject.client}</p>
                             </div>
                             
                             <div>
                                <div className="flex items-center gap-2 text-teal-700 mb-1">
                                   <Calendar className="w-4 h-4" />
                                   <span className="font-bold text-sm">Timeline</span>
                                </div>
                                <p className="text-gray-700 font-medium">{selectedProject.year}</p>
                             </div>

                             <div>
                                <div className="flex items-center gap-2 text-teal-700 mb-1">
                                   <Activity className="w-4 h-4" />
                                   <span className="font-bold text-sm">Status</span>
                                </div>
                                <p className="text-gray-700 font-medium">{selectedProject.status}</p>
                             </div>
                          </div>
                       </div>

                       <button 
                         className="w-full bg-burgundy-700 text-white font-bold py-3.5 rounded-xl hover:bg-burgundy-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                         onClick={() => window.location.href = `mailto:info@hlcl4d.rw?subject=Inquiry about ${selectedProject.title}`}
                       >
                         Inquire About This
                       </button>
                    </div>

                  </div>
               </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;