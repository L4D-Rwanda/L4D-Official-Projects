import React, { useEffect } from 'react';
import { SERVICES } from '../constants';
import Reveal from './Reveal';
import { ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigateToService: (serviceId: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigateToService }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
       <div className="bg-white py-16 mb-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">What we do</h1>
              <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                We provide a comprehensive suite of services designed to support evidence-based decision-making. From data collection to strategic advisory, we are your partners in development.
              </p>
            </Reveal>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="space-y-16">
            {SERVICES.map((service, index) => {
               const Icon = service.icon;
               const isEven = index % 2 === 0;
               return (
                 <Reveal key={index}>
                   <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center bg-white p-8 md:p-12 rounded-[30px] shadow-sm`}>
                      <div className="flex-1">
                        <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
                            <Icon className="h-8 w-8 text-teal-700" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <div className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500 mb-6">
                          <h4 className="font-bold text-teal-900 mb-2">Impact Highlight</h4>
                          <p className="text-teal-800 italic">"{service.impact}"</p>
                        </div>
                        <button
                          onClick={() => onNavigateToService(service.id)}
                          className="inline-flex items-center px-6 py-3 border-2 border-teal-700 rounded-full text-teal-700 font-bold hover:bg-teal-700 hover:text-white group transition-all duration-300"
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                      <div className="flex-1 w-full h-80 lg:h-auto">
                         <img 
                           src={`https://picsum.photos/seed/${service.id}/800/600`} 
                           alt={service.title} 
                           className="w-full h-full object-cover rounded-2xl shadow-md"
                         />
                      </div>
                   </div>
                 </Reveal>
               );
            })}
         </div>
       </div>
    </div>
  );
};

export default ServicesPage;