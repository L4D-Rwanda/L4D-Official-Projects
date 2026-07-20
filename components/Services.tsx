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
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-24">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-teal-900/5 blur-3xl" />
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-burgundy-900/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1.5 px-4 rounded-full bg-teal-100/50 text-teal-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-5">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Comprehensive Policy Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              We provide evidence-based research and strategic advisory services tailored to Africa's evolving development challenges.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={index} delay={index * 100}>
                <div 
                  onClick={() => onServiceClick?.(service.id)}
                  className={`group bg-white/60 backdrop-blur-md rounded-[24px] p-8 md:p-10 h-full border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,128,128,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col text-left ${onServiceClick ? 'cursor-pointer' : ''}`}
                >
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-teal-700" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-sans tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-base">
                      {service.description}
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