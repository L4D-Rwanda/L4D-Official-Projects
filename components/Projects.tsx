import React, { useRef, useState, useEffect } from 'react';
import Reveal from './Reveal';
import { ArrowRight, Info, ImageIcon } from 'lucide-react';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  onViewMore?: () => void;
  onContact?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewMore }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuredProjects = PROJECTS.slice(0, 3); // Get first 3
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-sm font-bold tracking-widest text-teal-700 uppercase mb-3">Featured Projects</h2>
              <h3 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900">Driving Change Through Action</h3>
            </Reveal>
          </div>
          {onViewMore && (
            <Reveal delay={200}>
              <button 
                onClick={onViewMore}
                className="hidden md:flex items-center text-teal-700 font-bold hover:text-teal-800 transition-colors group"
              >
                View All Projects <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </Reveal>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
             Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="bg-white/60 backdrop-blur-md hover:backdrop-blur-xl hover:scale-[1.02] rounded-3xl overflow-hidden border border-gray-100 shadow-sm animate-pulse h-full flex flex-col">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                     <ImageIcon className="h-10 w-10 text-gray-300" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                     <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
                     <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                     <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                     <div className="h-4 bg-gray-200 rounded w-4/5 mb-6" />
                     <div className="h-4 bg-gray-200 rounded w-32 mt-auto" />
                  </div>
                </div>
             ))
          ) : (
            featuredProjects.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 100}>
              <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,128,128,0.08)] hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply z-10"></div>
                  {project.image ? (
                     <img 
                       src={project.image} 
                       alt={project.title}
                       loading="lazy"
                       className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                     />
                  ) : (
                     <div className="w-full h-full bg-gray-200 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                        <Info className="h-10 w-10 text-gray-400" />
                     </div>
                  )}
                  <div className="absolute top-4 left-4 z-20">
                     <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-teal-800 text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
                       {project.category}
                     </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                   <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors line-clamp-2">
                     {project.title}
                   </h4>
                   <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                     {project.description}
                   </p>
                   {onViewMore && (
                     <button onClick={onViewMore} className="inline-flex items-center text-teal-700 font-bold text-sm tracking-wide group-hover:text-teal-800 mt-auto">
                        Explore Project <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                     </button>
                   )}
                </div>
              </div>
            </Reveal>
            ))
          )}
        </div>

        {onViewMore && (
           <div className="mt-12 text-center md:hidden">
             <button 
               onClick={onViewMore}
               className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-teal-50 text-teal-700 font-bold rounded-full hover:bg-teal-100 transition-colors"
             >
               View All Projects <ArrowRight className="ml-2 h-5 w-5" />
             </button>
           </div>
        )}



      </div>
    </section>
  );
};

export default Projects;