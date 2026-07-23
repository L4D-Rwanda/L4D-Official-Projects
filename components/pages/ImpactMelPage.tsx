import React, { useEffect } from 'react';
import Reveal from '../Reveal';
import BackButton from '../BackButton';
import { Target, Users, BookOpen, Layers, BarChart3, Repeat, MessageSquare } from 'lucide-react';

const APPROACHES = [
  { name: 'Theory of Change', icon: Target },
  { name: 'Mixed-Methods Approaches', icon: Layers },
  { name: 'Participatory Evaluation', icon: Users },
  { name: 'Made-in-Africa Evaluation', icon: BookOpen },
  { name: 'Systems Thinking', icon: Repeat },
  { name: 'Adaptive Management', icon: BarChart3 },
  { name: 'Gender and Social Inclusion', icon: Users },
];

const SERVICES = [
  "Impact Evaluations",
  "Mid-Term Reviews",
  "Baseline and Endline Studies",
  "Monitoring, Evaluation and Learning Systems",
  "Capacity for Impact, Evidence and Learning (CIEL)",
  "Organizational Capacity Assessments",
  "Data Quality Assessments",
  "Sensemaking and Learning Processes",
  "Theory of Change Development and Review",
  "Programme Outcome Assessments"
];

interface ImpactMelPageProps {
  onNavigate?: (page: string) => void;
  onBack?: () => void;
}

const ImpactMelPage: React.FC<ImpactMelPageProps> = ({ onNavigate, onBack }) => {
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Impact Monitoring, Evaluation & Learning</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We design and implement rigorous monitoring, evaluation, and learning processes that strengthen accountability, support adaptive management, and generate actionable insights.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Approach Section */}
        <div className="mb-24">
          <Reveal>
            <div className="text-center mb-12">
               <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Approach</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">
                 L4D’s approach to evidence generation and learning is grounded in principles tailored to our local and regional contexts.
               </p>
            </div>
          </Reveal>
          
          <div className="flex flex-wrap justify-center gap-4">
            {APPROACHES.map((approach, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                 <div className="bg-white/60 backdrop-blur-md rounded-full px-6 py-3 shadow-sm border border-gray-200 flex items-center gap-3 hover:border-teal-400 hover:bg-teal-50 transition-colors">
                    <approach.icon className="text-teal-600 w-5 h-5" />
                    <span className="font-medium text-gray-800">{approach.name}</span>
                 </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <Reveal>
          <div className="bg-teal-950 rounded-[32px] p-8 md:p-16 mb-24 relative overflow-hidden">
             <div className="absolute inset-0 bg-teal-900/20 mix-blend-multiply"></div>
             <div className="relative z-10">
               <div className="text-center mb-12">
                 <h2 className="text-3xl font-serif font-bold text-white mb-4">Key Services</h2>
                 <p className="text-gray-400 max-w-2xl mx-auto">
                   Comprehensive M&E services designed for robust project life-cycle management.
                 </p>
               </div>
               
               <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                 {SERVICES.map((service, idx) => (
                   <div key={idx} className="flex items-center gap-4 border-b border-gray-800 pb-4">
                     <span className="text-teal-400 font-bold text-xl">0{idx + 1}.</span>
                     <p className="text-gray-300 font-medium">{service}</p>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </Reveal>

        {/* Projects Preview (Future enhancement) */}
        <Reveal>
           <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Projects</h2>
              <p className="text-gray-600 mb-8">
                Explore a comprehensive portfolio of our ongoing and completed projects across diverse thematic areas.
              </p>
              <button 
                onClick={() => window.location.href='/#projects'} 
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-700 text-white font-bold rounded-full hover:bg-teal-800 transition-colors shadow-lg"
              >
                Browse Projects
              </button>
           </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ImpactMelPage;
