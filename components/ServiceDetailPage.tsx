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

  if (serviceId === 'policy-research') {
    return (
      <div className="pt-24 pb-20 min-h-screen bg-gray-50">
        <div className="bg-gray-50 py-16 mb-16 border-b border-gray-100">
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
          <Reveal>
            <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[30px] shadow-sm border border-gray-100/80">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Our Approach</h2>
              <p className="text-gray-600 leading-relaxed mb-10 text-lg max-w-5xl">
                At L4D, our approach to policy research is deeply rooted in rigorous methodology and practical application. We work closely with stakeholders to ensure that our insights translate directly into actionable outcomes that drive sustainable development.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Objectives Box */}
                <div className="bg-[#f0f9f9] p-8 rounded-2xl border-l-4 border-teal-600 flex flex-col h-full text-left">
                  <h3 className="text-xl font-bold text-teal-950 mb-6">Objectives</h3>
                  <ul className="space-y-4">
                    {[
                      'Generate evidence for informed decision-making',
                      'Support policy design, review, and evaluation',
                      'Bridge research and practice',
                      'Facilitate policy dialogue and knowledge sharing',
                      'Strengthen institutional capacity',
                      'Promote effective and efficient policy implementation',
                      'Provide strategic advisory'
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-teal-600 mr-2.5 mt-1.5 flex-shrink-0">•</span>
                        <span className="text-gray-700 leading-relaxed font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Thematic Areas Box */}
                <div className="bg-[#f0f9f9] p-8 rounded-2xl border-l-4 border-teal-600 flex flex-col h-full text-left">
                  <h3 className="text-xl font-bold text-teal-950 mb-6">Thematic Areas</h3>
                  <ul className="space-y-4">
                    {[
                      'Economic Development',
                      'Agri-food systems',
                      'environment & natural resources',
                      'Governance and Public Policy',
                      'Gender, Youth & Social Inclusion',
                      'Sustainable Development'
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-teal-600 mr-2.5 mt-1.5 flex-shrink-0">•</span>
                        <span className="text-gray-700 leading-relaxed font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }

  if (serviceId === 'policy-advisory') {
    return (
      <div className="pt-24 pb-20 min-h-screen bg-gray-50">
        <div className="bg-gray-50 py-16 mb-16 border-b border-gray-100">
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
          <Reveal>
            <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[30px] shadow-sm border border-gray-100/80">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Our Approach</h2>
              <p className="text-gray-600 leading-relaxed mb-10 text-lg max-w-5xl">
                At L4D, our approach to policy advisory is deeply rooted in rigorous methodology and practical application. We work closely with stakeholders to ensure that our insights translate directly into actionable outcomes that drive sustainable development.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Objectives Box */}
                <div className="bg-[#f0f9f9] p-8 rounded-2xl border-l-4 border-teal-600 flex flex-col h-full text-left">
                  <h3 className="text-xl font-bold text-teal-950 mb-6">Objectives</h3>
                  <ul className="space-y-4">
                    {[
                      'Generate evidence for informed decision-making',
                      'Support policy design, review, and evaluation',
                      'Bridge research and practice',
                      'Facilitate policy dialogue and knowledge sharing',
                      'Strengthen institutional capacity',
                      'Promote effective and efficient policy implementation',
                      'Provide strategic advisory'
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-teal-600 mr-2.5 mt-1.5 flex-shrink-0">•</span>
                        <span className="text-gray-700 leading-relaxed font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Thematic Areas Box */}
                <div className="bg-[#f0f9f9] p-8 rounded-2xl border-l-4 border-teal-600 flex flex-col h-full text-left">
                  <h3 className="text-xl font-bold text-teal-950 mb-6">Thematic Areas</h3>
                  <ul className="space-y-4">
                    {[
                      'Economic Development',
                      'Agri-food systems',
                      'environment & natural resources',
                      'Governance and Public Policy',
                      'Gender, Youth & Social Inclusion',
                      'Sustainable Development'
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-teal-600 mr-2.5 mt-1.5 flex-shrink-0">•</span>
                        <span className="text-gray-700 leading-relaxed font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }

  if (serviceId === 'research-mentorship') {
    return (
      <div className="pt-24 pb-20 min-h-screen bg-gray-50">
        <div className="bg-gray-50 py-16 mb-16 border-b border-gray-100">
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
          <Reveal>
            <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[30px] shadow-sm border border-gray-100/80">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Our Approach</h2>
              <p className="text-gray-600 leading-relaxed mb-10 text-lg max-w-5xl">
                At L4D, our approach to research mentorship is built around growing a critical mass of skilled researchers and policy analysts in Rwanda, pairing hands-on technical training with sustained coaching so learning translates into real research and policy capability.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Objectives Box */}
                <div className="bg-[#f0f9f9] p-8 rounded-2xl border-l-4 border-teal-600 flex flex-col h-full text-left">
                  <h3 className="text-xl font-bold text-teal-950 mb-6">Objectives</h3>
                  <ul className="space-y-4">
                    {[
                      'Build a critical mass of researchers and policy analysts in Rwanda',
                      'Equip researchers with statistical software and analytical skills',
                      'Strengthen capacity of public, private sector, and NGO program implementers',
                      'Pair emerging researchers with experienced mentors for guided growth',
                      'Enable policy makers and implementers to perform their roles effectively',
                      'Foster a sustainable culture of research and evidence use nationally'
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-teal-600 mr-2.5 mt-1.5 flex-shrink-0">•</span>
                        <span className="text-gray-700 leading-relaxed font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Beneficiaries Box */}
                <div className="bg-[#f0f9f9] p-8 rounded-2xl border-l-4 border-teal-600 flex flex-col h-full text-left">
                  <h3 className="text-xl font-bold text-teal-950 mb-6">Target Beneficiaries</h3>
                  <ul className="space-y-4">
                    {[
                      'Early-career researchers and policy analysts',
                      'Program and policy implementers in the public sector',
                      'Private sector professionals engaged in research or M&E',
                      'Non-government organization (NGO) staff',
                      'Statisticians and data analysts seeking applied skills',
                      'Postgraduate students transitioning into research careers'
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-teal-600 mr-2.5 mt-1.5 flex-shrink-0">•</span>
                        <span className="text-gray-700 leading-relaxed font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }

  if (serviceId === 'monitoring-evaluation') {
    return (
      <div className="pt-24 pb-20 min-h-screen bg-gray-50">
        <div className="bg-gray-50 py-16 mb-16 border-b border-gray-100">
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
          <Reveal>
            <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[30px] shadow-sm border border-gray-100/80">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Our Approach</h2>
              <p className="text-gray-600 leading-relaxed mb-10 text-lg max-w-5xl">
                At L4D, our approach to impact evaluation combines rigorous methodology with practical, field-tested tools to measure whether policies and programs deliver the outcomes they promise — helping partners adapt, scale, or redesign based on real evidence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Objectives Box */}
                <div className="bg-[#f0f9f9] p-8 rounded-2xl border-l-4 border-teal-600 flex flex-col h-full text-left">
                  <h3 className="text-xl font-bold text-teal-950 mb-6">Objectives</h3>
                  <ul className="space-y-4">
                    {[
                      'Assess the effectiveness, relevance, and outcomes of policies and programs',
                      'Generate credible evidence on what works, for whom, and why',
                      'Conduct socio-economic impact assessments across priority sectors',
                      'Support evidence-based decision-making and adaptive program management',
                      'Measure progress against program and policy objectives over time',
                      'Inform scale-up, redesign, or discontinuation of interventions'
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-teal-600 mr-2.5 mt-1.5 flex-shrink-0">•</span>
                        <span className="text-gray-700 leading-relaxed font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Evaluation Focus Areas Box */}
                <div className="bg-[#f0f9f9] p-8 rounded-2xl border-l-4 border-teal-600 flex flex-col h-full text-left">
                  <h3 className="text-xl font-bold text-teal-950 mb-6">Evaluation Focus Areas</h3>
                  <ul className="space-y-4">
                    {[
                      'Baseline, midline, and endline evaluations',
                      'Randomized control trials and quasi-experimental designs',
                      'Cost-effectiveness and cost-benefit analysis',
                      'Impact assessment framework design',
                      'Sector coverage: Agriculture, Environment & Climate Change, Gender & Social Inclusion',
                      'Dissemination of findings to policymakers and implementing partners'
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-teal-600 mr-2.5 mt-1.5 flex-shrink-0">•</span>
                        <span className="text-gray-700 leading-relaxed font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="bg-gray-50 py-16 mb-16 border-b border-gray-100">
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
            <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[30px] shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                At L4D, our approach to {service.title.toLowerCase()} is deeply rooted in rigorous methodology and practical application. We work closely with stakeholders to ensure that our insights translate directly into actionable outcomes that drive sustainable development.
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
