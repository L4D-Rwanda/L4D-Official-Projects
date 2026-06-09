import React, { useEffect } from 'react';
import Reveal from './Reveal';
import { Users, Globe2, Handshake, ArrowRight, ArrowLeft } from 'lucide-react';
import { CLIENTS } from '../constants';

interface ProgramsPageProps {
  onBack?: () => void;
  onContact?: () => void;
}

const ProgramsPage: React.FC<ProgramsPageProps> = ({ onBack, onContact }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="bg-white py-16 mb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {onBack && (
            <button 
              onClick={onBack}
              className="flex items-center text-gray-500 hover:text-teal-700 transition-colors mb-6 font-medium"
            >
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Impact
            </button>
          )}
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Programs & Partnerships</h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Achieving sustainable scale requires deep, collaborative relationships. We partner with global institutions, regional governments, and leading NGOs to design and execute long-term development programs.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Approach to Partnership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We act as technical partners, bringing analytical precision to complex multi-stakeholder programs.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal delay={100}>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full">
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                <Globe2 className="h-7 w-7 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Reach, Local Depth</h3>
              <p className="text-gray-600 leading-relaxed">
                We combine global best practices with deep contextual understanding of regional dynamics to ensure programs are relevant and effectively localized.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full">
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                <Handshake className="h-7 w-7 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Capacity Building</h3>
              <p className="text-gray-600 leading-relaxed">
                We embed capacity transfer into our partnerships, ensuring that our institutional counterparts are equipped to sustain impact over the long term.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full">
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ecosystem Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                We bridge the gap between academic research, government policy making, and grassroots implementation through continuous cross-sector dialogues.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <Reveal>
          <div className="bg-teal-900 rounded-[40px] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 relative z-10">Our Partners & Clients</h2>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-16 relative z-10">
              We are proud to collaborate with organizations driving forward sustainable models of growth and equity.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center max-w-4xl mx-auto relative z-10">
              {CLIENTS.slice(0, 8).map((client, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all flex items-center justify-center group h-32">
                   {client.logo ? (
                     <img 
                       src={client.logo} 
                       alt={client.name} 
                       className="max-h-full max-w-full object-contain filter transition-all group-hover:scale-105"
                     />
                   ) : (
                     <span className="font-bold text-lg text-white/80 group-hover:text-white transition-colors text-center">{client.name}</span>
                   )}
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
                <a href="#contact" onClick={(e) => { e.preventDefault(); onContact?.(); }} className="inline-flex items-center px-8 py-4 bg-white text-teal-900 font-bold rounded-full hover:bg-teal-50 transition-colors shadow-lg group">
                   Become a Partner <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
          </div>
        </Reveal>
      </div>

    </div>
  );
};

export default ProgramsPage;
