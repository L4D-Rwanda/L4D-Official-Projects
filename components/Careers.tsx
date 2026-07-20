import React from 'react';
import { Users, Zap, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

interface CareersProps {
  onViewAll: () => void;
}

const Careers: React.FC<CareersProps> = ({ onViewAll }) => {
  return (
    <section id="careers" className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-700/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-burgundy-700/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal>
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            
            {/* Centered Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-block py-1.5 px-4 rounded-full bg-burgundy-50 text-burgundy-700 text-xs font-bold uppercase tracking-wider border border-burgundy-100">
                Join Our Team
              </span>
            </div>

            {/* Centered Heading */}
            <h2 className="text-4xl md:text-6xl font-sans font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Shape the Future of <br/>
              <span className="text-teal-700 font-extrabold">Development</span>
            </h2>

            {/* Centered Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              At L4D, we are always looking for passionate researchers, analysts, and change-makers. Join a team dedicated to evidence-based policy research and impactful mentorship.
            </p>

            {/* Centered Two-Column Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-3xl mb-12 text-left">
              <div className="flex items-start gap-4 bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm">
                <div className="p-3 bg-teal-50 border border-teal-100 text-teal-600 rounded-xl shrink-0 flex items-center justify-center">
                  <Users className="h-6 w-6 text-teal-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Collaborative Culture</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Work alongside experts and mentors in a supportive environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm">
                <div className="p-3 bg-teal-50 border border-teal-100 text-teal-600 rounded-xl shrink-0 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-teal-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Impactful Work</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Contribute to projects that shape national and regional policies.
                  </p>
                </div>
              </div>
            </div>

            {/* Centered Button */}
            <div className="flex justify-center w-full">
              <button 
                onClick={onViewAll}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-teal-700 text-white font-bold rounded-full hover:bg-teal-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 group gap-2"
              >
                View Career Opportunities
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Careers;