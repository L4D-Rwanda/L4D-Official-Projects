import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import Reveal from './Reveal';

interface ServicesProps {
  onViewMore?: () => void;
  onServiceClick?: (serviceId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onViewMore, onServiceClick }) => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-24">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-teal-900/5 blur-3xl" />
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-burgundy-900/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block py-1.5 px-4 rounded-full bg-teal-100/80 text-teal-800 text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Comprehensive Policy Solutions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We deliver rigorous research and strategic advisory services tailored to the unique challenges of development in East Africa.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={index} delay={index * 100}>
                <div 
                  onClick={() => onServiceClick?.(service.id)}
                  className={`group relative bg-white rounded-[30px] p-8 md:p-12 h-full border border-gray-100 shadow-md hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-500 hover:-translate-y-2 flex flex-col ${onServiceClick ? 'cursor-pointer' : ''}`}
                >
                  
                  {/* Icon & Header */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-500 shadow-inner group-hover:shadow-lg group-hover:shadow-teal-600/30">
                      <Icon className="h-8 w-8 text-teal-700 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div className="w-12 h-12 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 group-hover:rotate-45">
                      <ArrowUpRight className="h-5 w-5 text-teal-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-teal-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Impact Footer */}
                  <div className="mt-auto relative overflow-hidden rounded-2xl bg-gray-50/80 p-6 group-hover:bg-teal-50/40 transition-colors duration-300 border border-gray-100 group-hover:border-teal-100">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-burgundy-700" />
                    <p className="text-xs font-bold text-burgundy-700 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-burgundy-700"></span>
                      Impact Highlight
                    </p>
                    <p className="text-base font-medium text-gray-800 italic leading-snug">
                      "{service.impact}"
                    </p>
                  </div>
                  
                </div>
              </Reveal>
            );
          })}
        </div>

        {onViewMore && (
          <div className="text-center">
            <button 
              onClick={onViewMore}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-700 text-teal-700 font-bold rounded-[30px] hover:bg-teal-700 hover:text-white transition-all duration-300 hover:shadow-lg"
            >
              View Detailed Services <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;