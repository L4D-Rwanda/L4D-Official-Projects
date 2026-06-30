import React, { useEffect } from 'react';
import Reveal from '../Reveal';
import { ArrowRight, BookOpen, BarChart3, Users } from 'lucide-react';
import PartnerSlider from '../PartnerSlider';

interface OurWorkPageProps {
  onNavigate?: (page: string) => void;
}

const OurWorkPage: React.FC<OurWorkPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="bg-white py-16 md:py-24 mb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">Our Work</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We generate evidence, strengthen learning, and design rigorous monitoring and evaluation processes to support inclusive, sustainable development and informed decision-making.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Policy Research */}
        <Reveal>
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-12 items-center hover:shadow-xl transition-shadow group">
             <div className="flex-shrink-0 w-24 h-24 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center">
               <BookOpen size={48} />
             </div>
             <div className="flex-grow text-center lg:text-left">
               <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">Policy Research</h2>
               <p className="text-gray-600 text-lg leading-relaxed mb-6">
                 We produce policy-oriented research and evidence to inform decision-making and contribute to inclusive and sustainable development.
               </p>
               <button 
                 onClick={() => navigate('policy-research')}
                 className="inline-flex items-center text-teal-700 font-bold hover:text-teal-800 transition-colors group/btn"
               >
                 Discover Policy Research <ArrowRight className="ml-2 h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform" />
               </button>
             </div>
          </div>
        </Reveal>

        {/* Impact MEL */}
        <Reveal delay={100}>
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-12 items-center hover:shadow-xl transition-shadow group">
             <div className="flex-shrink-0 w-24 h-24 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center">
               <BarChart3 size={48} />
             </div>
             <div className="flex-grow text-center lg:text-left">
               <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">Impact Monitoring, Evaluation & Learning</h2>
               <p className="text-gray-600 text-lg leading-relaxed mb-6">
                 We design and implement rigorous monitoring, evaluation, and learning processes that strengthen accountability, support adaptive management, and generate actionable insights.
               </p>
               <button 
                 onClick={() => navigate('impact-mel')}
                 className="inline-flex items-center text-teal-700 font-bold hover:text-teal-800 transition-colors group/btn"
               >
                 Explore Impact MEL <ArrowRight className="ml-2 h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform" />
               </button>
             </div>
          </div>
        </Reveal>

        {/* Leadership Mentorship Coaching */}
        <Reveal delay={200}>
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-12 items-center hover:shadow-xl transition-shadow group">
             <div className="flex-shrink-0 w-24 h-24 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center">
               <Users size={48} />
             </div>
             <div className="flex-grow text-center lg:text-left">
               <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">Leadership, Mentorship & Coaching</h2>
               <p className="text-gray-600 text-lg leading-relaxed mb-6">
                 We support individuals and organisations through capacity strengthening, mentorship, and leadership development initiatives.
               </p>
               <button 
                 onClick={() => navigate('leadership-coaching')}
                 className="inline-flex items-center text-teal-700 font-bold hover:text-teal-800 transition-colors group/btn"
               >
                 Learn About Leadership & Coaching <ArrowRight className="ml-2 h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform" />
               </button>
             </div>
          </div>
        </Reveal>
        
        {/* Partners Section mapping request #6 */}
        <Reveal delay={300}>
            <div className="w-full mt-24 mb-16">
                <div className="text-center mb-10">
                   <h2 className="text-3xl font-serif font-bold text-gray-900">Our Partners</h2>
                   <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">We collaborate with global institutions to drive evidence-based policy and inclusive development.</p>
                </div>
                <PartnerSlider theme="light" />
            </div>
        </Reveal>

      </div>
    </div>
  );
};

export default OurWorkPage;
