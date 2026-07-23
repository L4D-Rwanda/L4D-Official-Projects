import React, { useEffect } from 'react';
import Reveal from '../Reveal';
import BackButton from '../BackButton';
import { BookOpen, Users, Globe2, Briefcase, Leaf, Building, Lightbulb } from 'lucide-react';

const THEMES = [
  { name: 'Inclusive Development', icon: Users },
  { name: 'Governance and Institutions', icon: Building },
  { name: 'Youth Employment', icon: Briefcase },
  { name: 'Gender and Social Inclusion', icon: Users },
  { name: 'Agriculture and Food Systems', icon: Leaf },
  { name: 'Climate Change and Resilience', icon: Globe2 },
  { name: 'Market Systems Development', icon: Lightbulb },
];

interface PolicyResearchPageProps {
  onNavigate?: (page: string) => void;
  onBack?: () => void;
}

const PolicyResearchPage: React.FC<PolicyResearchPageProps> = ({ onNavigate, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (onNavigate) {
      onNavigate('services');
    } else if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="bg-gray-50 py-16 md:py-24 mb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="text-left mb-6">
            <BackButton onClick={handleBack} label="Back to Services" />
          </div>
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Policy Research</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We generate evidence and policy-oriented policy research to support governments, development partners, and institutions in designing more effective and inclusive policies.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 text-center">
             <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Policy Research Themes</h2>
             <p className="text-gray-600 max-w-2xl mx-auto">
               Our policy research spans across multiple critical areas of sustainable development, focusing on actionable insights and systemic change.
             </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20 relative z-10">
          {THEMES.map((theme, idx) => (
            <Reveal key={idx} delay={idx * 50}>
               <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center text-center group cursor-default">
                  <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-4 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    <theme.icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                    {theme.name}
                  </h3>
               </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="bg-teal-900 rounded-[32px] p-12 text-center text-white relative overflow-hidden">
             <div className="absolute inset-0 pattern-grid-lg opacity-10"></div>
             <div className="relative z-10">
               <BookOpen className="w-16 h-16 text-teal-400 mx-auto mb-6" />
               <h2 className="text-3xl font-serif font-bold mb-4">Featured Publications</h2>
               <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
                 Explore our library of policy research papers, policy briefs, and reports documenting our findings and recommendations.
               </p>
               <button onClick={() => window.location.href='/#publications'} className="px-8 py-4 bg-teal-400 text-teal-900 font-bold rounded-full hover:bg-teal-300 transition-colors shadow-lg">
                 Browse Our Publications
               </button>
             </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default PolicyResearchPage;
