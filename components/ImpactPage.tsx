import React, { useEffect } from 'react';
import Reveal from './Reveal';
import { ArrowRight, Activity, Users } from 'lucide-react';

interface ImpactPageProps {
  onNavigate: (path: string) => void;
}

const ImpactPage: React.FC<ImpactPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="bg-white py-16 mb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Our Impact</h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              We translate rigorous research and strategic advisory into tangible outcomes. Discover how our initiatives and collaborative partnerships drive sustainable development across multiple sectors.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Projects Card */}
          <Reveal delay={100}>
            <div 
              onClick={() => onNavigate('projects')}
              className="bg-white rounded-[30px] p-8 md:p-12 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full flex flex-col group"
            >
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-700 transition-colors duration-300">
                <Activity className="h-8 w-8 text-teal-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 group-hover:text-teal-700 transition-colors">Projects</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 flex-1">
                Explore our portfolio of evidence-based interventions. We showcase targeted initiatives where our analytical rigor and strategic planning have yielded measurable improvements in policy and practice.
              </p>
              <div className="inline-flex items-center text-teal-700 font-bold group-hover:text-teal-800">
                View All Projects <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Reveal>

          {/* Programs & Partnerships Card */}
          <Reveal delay={200}>
            <div 
              onClick={() => onNavigate('programs')}
              className="bg-white rounded-[30px] p-8 md:p-12 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full flex flex-col group"
            >
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-700 transition-colors duration-300">
                <Users className="h-8 w-8 text-teal-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 group-hover:text-teal-700 transition-colors">Programs & Partnerships</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 flex-1">
                Collaboration is at the core of our methodology. Discover the long-term programs and strategic alliances we have forged with global institutions, donors, and regional stakeholders to scale our impact.
              </p>
              <div className="inline-flex items-center text-teal-700 font-bold group-hover:text-teal-800">
                Learn More <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ImpactPage;
