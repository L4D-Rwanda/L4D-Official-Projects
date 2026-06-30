import React, { useEffect } from 'react';
import Reveal from '../Reveal';
import { Target, Users, BookOpen, Layers, BarChart3, Repeat, MessageSquare, Award, UserPlus, HeartHandshake, Briefcase, Building } from 'lucide-react';

const AREAS = [
  { name: 'Leadership Development', icon: Award },
  { name: 'Executive Coaching', icon: MessageSquare },
  { name: 'Mentorship Programmes', icon: UserPlus },
  { name: 'Capacity Strengthening', icon: HeartHandshake },
  { name: 'Organizational Development', icon: Briefcase },
];

const GROUPS = [
  { name: 'Young Professionals', icon: Users },
  { name: 'Entrepreneurs', icon: Lightbulb },
  { name: 'Researchers', icon: BookOpen },
  { name: 'Public Institutions', icon: Building },
  { name: 'Civil Society Organisations', icon: Users },
];

// Fallback import or manual icon map
import { Lightbulb } from 'lucide-react';

const LeadershipCoachingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="bg-white py-16 md:py-24 mb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Leadership, Mentorship & Coaching</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We support individuals and organisations through capacity strengthening, mentorship, and leadership development initiatives.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <Reveal>
            <div>
               <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 border-b-2 border-teal-100 pb-4 inline-block">Areas of Support</h2>
               <div className="space-y-6">
                 {AREAS.map((area, idx) => (
                   <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                     <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                       <area.icon size={24} />
                     </div>
                     <h3 className="font-bold text-gray-800 text-lg">{area.name}</h3>
                   </div>
                 ))}
               </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
               <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 border-b-2 border-teal-100 pb-4 inline-block">Target Groups</h2>
               <div className="space-y-6">
                 {GROUPS.map((group, idx) => (
                   <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                     <div className="w-12 h-12 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                       <group.icon size={24} />
                     </div>
                     <h3 className="font-bold text-gray-800 text-lg">{group.name}</h3>
                   </div>
                 ))}
               </div>
            </div>
          </Reveal>
        </div>

        {/* Success Stories Preview */}
        <Reveal>
          <div className="bg-teal-900 rounded-[32px] p-12 text-center text-white">
             <HeartHandshake className="w-16 h-16 text-teal-400 mx-auto mb-6" />
             <h2 className="text-3xl font-serif font-bold mb-4">Success Stories</h2>
             <p className="text-teal-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
               Read testimonials and case studies from professionals and organizations that have elevated their impact through our mentorship and coaching.
             </p>
             <button onClick={() => window.location.href='/#contact'} className="px-8 py-4 bg-white text-teal-900 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
               Get in Touch
             </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default LeadershipCoachingPage;
