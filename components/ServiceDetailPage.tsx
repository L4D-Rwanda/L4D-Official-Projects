import React, { useEffect } from 'react';
import { SERVICES } from '../constants';
import Reveal from './Reveal';
import { ArrowLeft } from 'lucide-react';

interface ServiceDetailPageProps {
  serviceId: string;
  onBack: () => void;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceId, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="pt-32 pb-20 min-h-screen text-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <button onClick={onBack} className="text-teal-700 underline mt-4">Go Back</button>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="bg-white py-16 mb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-500 hover:text-teal-700 transition-colors mb-6 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Overview
          </button>
          
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center">
                <Icon className="h-8 w-8 text-teal-700" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">{service.title}</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              {service.description}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="bg-white p-8 md:p-12 rounded-[30px] shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                At HLC-L4D, our approach to {service.title.toLowerCase()} is deeply rooted in rigorous methodology and practical application. We work closely with stakeholders to ensure that our insights translate directly into actionable outcomes that drive sustainable development.
              </p>
              
              <div className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500">
                <h4 className="font-bold text-teal-900 mb-2">Impact Highlight</h4>
                <p className="text-teal-800 italic">"{service.impact}"</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="w-full h-[400px]">
              <img 
                src={`https://picsum.photos/seed/${service.id}/800/600`} 
                alt={service.title} 
                className="w-full h-full object-cover rounded-2xl shadow-md"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
