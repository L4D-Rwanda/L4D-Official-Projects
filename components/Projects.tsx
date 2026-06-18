import React, { useEffect, useRef } from 'react';
import Reveal from './Reveal';
import { ArrowRight, BarChart3, Users, Award, ShieldCheck } from 'lucide-react';
import PartnerSlider from './PartnerSlider';

interface ProjectsProps {
  onViewMore?: () => void;
  onContact?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewMore, onContact }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
                <div className="mt-8">
                  <PartnerSlider theme="light" />
                </div>
            </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Projects;