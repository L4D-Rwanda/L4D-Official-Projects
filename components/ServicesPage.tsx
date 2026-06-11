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
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">What We Do</h1>
              <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                L4D is committed to driving lasting change through evidence-based research, strategic policy advisory, and capacity building. We operate at the intersection of academic rigor and practical policy implementation, providing a comprehensive suite of services tailored to complex developmental challenges.
              </p>
            </Reveal>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* New Section: Thematic Areas & Methodologies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Thematic Areas */}
            <Reveal>
               <div className="bg-white p-8 md:p-10 rounded-[30px] shadow-sm h-full border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Thematic Areas</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    L4D specializes in critical sectors that drive sustainable development and poverty reduction in East Africa. Our core focus areas include:
                  </p>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center mt-0.5 mr-4 border border-teal-100">
                        <div className="w-2.5 h-2.5 rounded-full bg-teal-600"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed"><span className="font-bold text-gray-900 block mb-1">Agricultural Economics & Food Security</span> Analyzing value chains, market dynamics, and sustainable farming practices.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center mt-0.5 mr-4 border border-teal-100">
                        <div className="w-2.5 h-2.5 rounded-full bg-teal-600"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed"><span className="font-bold text-gray-900 block mb-1">Rural Development & Livelihoods</span> Assessing interventions that improve socio-economic conditions in rural communities.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center mt-0.5 mr-4 border border-teal-100">
                        <div className="w-2.5 h-2.5 rounded-full bg-teal-600"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed"><span className="font-bold text-gray-900 block mb-1">Climate Change Adaptation</span> Researching resilient strategies for vulnerable populations facing environmental shifts.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center mt-0.5 mr-4 border border-teal-100">
                        <div className="w-2.5 h-2.5 rounded-full bg-teal-600"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed"><span className="font-bold text-gray-900 block mb-1">Gender & Social Inclusion</span> Ensuring equitable policy outcomes through gender-disaggregated analysis and inclusive methodologies.</p>
                    </li>
                  </ul>
               </div>
            </Reveal>

            {/* Methodologies */}
            <Reveal delay={100}>
               <div className="bg-white p-8 md:p-10 rounded-[30px] shadow-sm h-full border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Methodologies</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    We employ rigorous, mixed-method approaches customized to the specific needs of each project, ensuring valid, reliable, and actionable insights.
                  </p>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-burgundy-50 flex items-center justify-center mt-0.5 mr-4 border border-burgundy-100">
                        <div className="w-2.5 h-2.5 rounded-full bg-burgundy-600"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed"><span className="font-bold text-gray-900 block mb-1">Quantitative Analysis</span> Surveys, econometrics, and statistical modeling using tools like STATA, R, and SPSS.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-burgundy-50 flex items-center justify-center mt-0.5 mr-4 border border-burgundy-100">
                        <div className="w-2.5 h-2.5 rounded-full bg-burgundy-600"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed"><span className="font-bold text-gray-900 block mb-1">Qualitative Inquiries</span> Key Informant Interviews (KIIs), Focus Group Discussions (FGDs), and participatory appraisals.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-burgundy-50 flex items-center justify-center mt-0.5 mr-4 border border-burgundy-100">
                        <div className="w-2.5 h-2.5 rounded-full bg-burgundy-600"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed"><span className="font-bold text-gray-900 block mb-1">Geospatial Mapping</span> Utilizing GIS technologies to map interventions, assess resource distribution, and visualize data.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-burgundy-50 flex items-center justify-center mt-0.5 mr-4 border border-burgundy-100">
                        <div className="w-2.5 h-2.5 rounded-full bg-burgundy-600"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed"><span className="font-bold text-gray-900 block mb-1">Systematic Reviews</span> Conducting comprehensive evidence synthesis and literature reviews to inform policy design.</p>
                    </li>
                  </ul>
               </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Service Offerings</h2>
              <p className="text-lg text-gray-600">Discover how our specialized expertise translates into practical solutions for our clients.</p>
            </div>
          </Reveal>

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