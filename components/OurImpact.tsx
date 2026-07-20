import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';
import { Calendar, Globe2, Briefcase, Users, FileText, CheckCircle2, TrendingUp } from 'lucide-react';

const STATS = [
  { value: "14+", label: "Years of Excellence", desc: "Formulating and refining policies since 2012", icon: Calendar },
  { value: "60+", label: "Major Projects", desc: "Rigorous research and strategic advisory", icon: FileText },
  { value: "13,246+", label: "Person-Days", desc: "Of employment created for youth", icon: Users },
  { value: "53", label: "FTEs", desc: "Full-Time Equivalent Positions", icon: Briefcase },
  { value: "5", label: "Countries Covered", desc: "Active regional research across East Africa", icon: Globe2 },
  { value: "300+", label: "Beneficiaries", desc: "Researchers mentored and trained", icon: TrendingUp }
];

const PROGRESS_BARS = [
  { label: 'Job Creation & Employment', value: 85, color: 'bg-teal-400' },
  { label: 'Capacity Building & Mentorship', value: 92, color: 'bg-teal-300' },
  { label: 'Community & Societal Impact', value: 78, color: 'bg-teal-500' },
  { label: 'Policy Influence', value: 88, color: 'bg-teal-300' }
];

const OurImpact = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-24 bg-teal-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-teal-800/20 pattern-grid-lg overlay-grid opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-sm font-bold tracking-widest text-teal-300 uppercase mb-3">Our Impact</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">A Decade of Development</h3>
            <p className="text-teal-100 text-lg leading-relaxed">
              Over the years, L4D has partnered with governments, development agencies, civil society organisations, and communities to generate evidence, strengthen learning, and contribute to development outcomes across multiple sectors and countries.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Reveal key={index} delay={index * 100}>
                  <div className="flex flex-col items-center group bg-teal-950/40 backdrop-blur-md p-6 rounded-2xl border border-teal-800 hover:border-teal-500 transition-all duration-300 text-center h-full">
                    <div className="w-12 h-12 bg-teal-800/50 rounded-xl flex items-center justify-center mb-4 text-teal-300 group-hover:scale-110 group-hover:bg-teal-700 transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <h4 className="text-3xl md:text-4xl font-serif font-bold mb-1 tracking-tight group-hover:text-teal-300 transition-colors">{stat.value}</h4>
                    <p className="text-teal-100/90 font-medium tracking-wide text-[10px] sm:text-xs mb-2 uppercase">{stat.label}</p>
                    <p className="text-teal-200/60 text-[10px] leading-snug hidden sm:block">{stat.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div>
            <Reveal delay={300}>
              <h4 className="text-2xl font-serif font-bold mb-8 text-teal-50">Measuring Our Reach</h4>
              <div className="space-y-8">
                {PROGRESS_BARS.map((bar, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-end text-sm">
                      <span className="font-medium text-teal-100">{bar.label}</span>
                      <span className="text-teal-300 font-bold">{bar.value}%</span>
                    </div>
                    <div className="w-full bg-teal-950/60 rounded-full h-3 overflow-hidden border border-teal-800">
                      <div 
                        className={`h-full rounded-full ${bar.color} transition-all duration-1000 ease-out`}
                        style={{ width: mounted ? `${bar.value}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-teal-950/40 backdrop-blur-md hover:backdrop-blur-xl hover:scale-[1.02] rounded-2xl border border-teal-800">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Users className="w-6 h-6 text-teal-300" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold text-teal-50 mb-1">Direct Beneficiaries</h5>
                    <p className="text-teal-200/80 text-sm leading-relaxed">
                      Through employment, training, and direct intervention, our projects have positively impacted thousands of lives, contributing directly to community resilience and capacity building.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
