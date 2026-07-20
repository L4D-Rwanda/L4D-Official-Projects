import React, { useEffect } from 'react';
import { SERVICES } from '../constants';
import Reveal from './Reveal';
import { ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
       <div className="bg-gray-50 py-16 mb-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">What We Do</h1>
              <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                L4D is committed to driving lasting change through evidence-based policy research, strategic policy advisory, and capacity building. We operate at the intersection of academic rigor and practical policy implementation, providing a comprehensive suite of services tailored to complex developmental challenges.
              </p>
            </Reveal>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* New Section: Thematic Areas & Methodologies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Thematic Areas */}
            <Reveal>
               <div className="bg-white/60 backdrop-blur-md p-8 md:p-10 rounded-[30px] shadow-sm h-full border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Thematic Areas</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    L4D specializes in critical sectors that drive sustainable development and poverty reduction in East Africa. Our core focus areas include:
                  </p>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center mt-0.5 mr-4 border border-teal-100">
                        <div className="w-2.5 h-2.5 rounded-full bg-teal-600"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed"><span className="font-bold text-gray-900 block mb-1">Agri-food System</span> Analyzing value chains, market dynamics, and sustainable farming practices from a food systems perspective.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center mt-0.5 mr-4 border border-teal-100">
                        <div className="w-2.5 h-2.5 rounded-full bg-teal-600"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed"><span className="font-bold text-gray-900 block mb-1">Rural Transformation</span> Assessing interventions that improve socio-economic conditions in rural communities.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center mt-0.5 mr-4 border border-teal-100">
                        <div className="w-2.5 h-2.5 rounded-full bg-teal-600"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed"><span className="font-bold text-gray-900 block mb-1">Environment & Climate Change</span> Researching resilient strategies for vulnerable populations facing environmental shifts.</p>
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
               <div className="bg-white/60 backdrop-blur-md p-8 md:p-10 rounded-[30px] shadow-sm h-full border border-gray-100">
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
                      <p className="text-gray-700 leading-relaxed"><span className="font-bold text-gray-900 block mb-1">Spatial Economic Analysis</span> Applying advanced spatial econometrics and Geographic Information Systems (GIS) to analyze geographic patterns in economic development and resource allocation.</p>
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600">Discover how our specialized expertise translates into practical solutions for our clients.</p>
            </div>
          </Reveal>

          <div className="max-w-5xl mx-auto space-y-8">
            {SERVICES.map((service, index) => {
               const Icon = service.icon;
               return (
                 <Reveal key={index}>
                   <div className="bg-white/60 backdrop-blur-md p-8 md:p-10 rounded-[24px] border border-gray-100 shadow-sm flex flex-col text-left">
                      {/* Icon Container */}
                      <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-6">
                         <Icon className="h-6 w-6 text-teal-700" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight font-sans">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Action Button */}
                      <div>
                        <button
                          onClick={() => onNavigate(`service/${service.id}`)}
                          className="inline-flex items-center gap-2 px-6 py-2.5 border border-teal-600 rounded-full text-teal-700 font-bold text-sm hover:bg-teal-700 hover:text-white transition-all group"
                        >
                          Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
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