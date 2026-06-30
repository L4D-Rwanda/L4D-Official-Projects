import React from 'react';
import Reveal from './Reveal';
import { Calendar, Globe2, Briefcase, Users, FileText, CheckCircle2 } from 'lucide-react';
import { STATS } from '../constants';

const iconMap = {
  Calendar,
  Globe2,
  Briefcase,
  Users,
  FileText,
  CheckCircle2
};

const OurImpact = () => {
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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-center max-w-5xl mx-auto">
          {STATS.map((stat, index) => {
            const Icon = iconMap[stat.iconName as keyof typeof iconMap] || CheckCircle2;
            return (
              <Reveal key={index} delay={index * 100}>
                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-teal-800/50 rounded-2xl flex items-center justify-center mb-6 text-teal-300 group-hover:scale-110 group-hover:bg-teal-700 transition-all duration-300">
                    <Icon size={32} />
                  </div>
                  <h4 className="text-5xl font-serif font-bold mb-2 tracking-tight group-hover:text-teal-300 transition-colors">{stat.value}</h4>
                  <p className="text-teal-100/80 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
