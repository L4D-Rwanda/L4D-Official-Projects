import React from 'react';
import { Briefcase, Users, Zap, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

interface CareersProps {
  onViewAll: () => void;
}

const Careers: React.FC<CareersProps> = ({ onViewAll }) => {
  return (
    <section id="careers" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-50/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Content */}
            <div className="flex-1">
              <span className="inline-block py-1.5 px-4 rounded-full bg-burgundy-50 text-burgundy-700 text-xs font-bold uppercase tracking-wider mb-6 border border-burgundy-100">
                Join Our Team
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Shape the Future of <br/><span className="text-teal-700">Development</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At L4D, we are always looking for passionate researchers, analysts, and change-makers. Join a team dedicated to evidence-based policy and impactful mentorship.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                  <div className="p-3 bg-teal-100 rounded-xl shrink-0">
                    <Users className="h-6 w-6 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Collaborative Culture</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Work alongside experts and mentors in a supportive environment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                  <div className="p-3 bg-teal-100 rounded-xl shrink-0">
                    <Zap className="h-6 w-6 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Impactful Work</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Contribute to projects that shape national and regional policies.</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={onViewAll}
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-700 text-white font-bold rounded-[30px] hover:bg-teal-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 group"
              >
                View Career Opportunities
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative group w-full">
               {/* Decorative background shape */}
               <div className="absolute -inset-4 bg-gradient-to-tr from-teal-100 to-burgundy-50 rounded-[40px] rotate-3 transform group-hover:rotate-2 transition-transform duration-700 ease-out"></div>
               
               {/* Image Container */}
               <div className="relative rounded-[30px] overflow-hidden shadow-2xl aspect-square sm:aspect-video lg:aspect-square border-4 border-white transform transition-transform duration-500">
                 <img 
                   src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800" 
                   alt="L4D Career Growth 3D" 
                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out animate-float-delayed"
                   loading="lazy"
                 />
                 {/* Subtle overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
               </div>
               
               {/* Floating Badge */}
               <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white p-6 rounded-[24px] shadow-xl border border-gray-100 max-w-xs animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 z-10 hover:-translate-y-1 transition-transform cursor-default">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 bg-burgundy-50 rounded-xl">
                      <Briefcase className="h-5 w-5 text-burgundy-700" />
                    </div>
                    <span className="font-bold text-gray-900 text-lg">We are hiring!</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">Explore open positions in Policy Research and Operations.</p>
               </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Careers;