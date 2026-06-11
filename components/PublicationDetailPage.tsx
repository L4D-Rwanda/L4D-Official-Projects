import React, { useEffect } from 'react';
import { PUBLICATIONS, PROJECTS } from '../constants';
import Reveal from './Reveal';
import { ArrowLeft, Download, Calendar, FileText, Share2, Printer, Activity, User, ArrowRight } from 'lucide-react';

interface PublicationDetailPageProps {
  title: string;
  onBack: () => void;
  onNavigateToProject?: (id: string) => void;
}

const PublicationDetailPage: React.FC<PublicationDetailPageProps> = ({ title, onBack, onNavigateToProject }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  const publication = PUBLICATIONS.find(p => p.title === title);

  if (!publication) {
    return (
      <div className="pt-32 pb-20 min-h-screen text-center">
        <h1 className="text-2xl font-bold">Publication Not Found</h1>
        <button onClick={onBack} className="text-teal-700 underline mt-4">Go Back</button>
      </div>
    );
  }

  // Find related projects based on matching publication title keywords to project category or title
  const relatedProjects = PROJECTS.filter(project => {
    const categoryKeywords = project.category.split(' ').filter((w: string) => w.length > 3);
    if (project.category === 'Socioeconomic Development') categoryKeywords.push('Economic', 'Urban', 'Employment');
    const titleKeywords = project.title.split(' ').filter((w: string) => w.length > 4);
    const searchTerms = [...categoryKeywords, ...titleKeywords];
    
    return searchTerms.some((term: string) => publication.title.toLowerCase().includes(term.toLowerCase()));
  }).slice(0, 2);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadFile = () => {
    const textContent = `
Publication: ${publication.title}
Type: ${publication.type}
Date: ${publication.date}

=========================================
ABSTRACT & KEY FINDINGS
=========================================
Detailed analysis and findings regarding ${publication.title.toLowerCase()}. This resource offers key data, methodological insights, and strategic recommendations for policymakers.

--- Executive Summary ---
In response to growing challenges in the region, this publication examines the core drivers and potential solutions related to ${publication.title.toLowerCase()}. Through extensive data collection and stakeholder engagement, we outline actionable insights designed to support evidence-based decision making.

The findings emphasize the critical need for coordinated policy frameworks, sustained investment in local capacity, and adaptive strategies to navigate an evolving socioeconomic landscape.

--- Methodology ---
Our approach combined qualitative and quantitative methods, including extensive literature review, field surveys, and key informant interviews. Data was analyzed using advanced statistical software to ensure validity and reliability of the outcomes.

--- Key Recommendations ---
1. Strengthen institutional frameworks to enable long-term impact.
2. Enhance local capacity through targeted training and resources.
3. Promote multi-sectoral collaboration to address systemic challenges.
4. Invest in comprehensive monitoring and evaluation systems.

Published by High Lands Centre of Leadership for Development (L4D).
  `.trim();

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    // Replace characters that might be invalid in filenames
    link.download = `${publication.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_details.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const shareData = {
      title: publication.title,
      text: `Read this publication: ${publication.title}`,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 font-sans print:bg-white print:pt-0">
      <div className="bg-white py-16 mb-16 border-b border-gray-100 print:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-500 hover:text-teal-700 transition-colors mb-6 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Publications
          </button>
          
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                  publication.type === 'Report' ? 'bg-blue-50 text-blue-700' :
                  publication.type === 'Policy Brief' ? 'bg-emerald-50 text-emerald-700' :
                  publication.type === 'News & Insights' ? 'bg-purple-50 text-purple-700' :
                  'bg-amber-50 text-amber-700'
              }`}>
                {publication.type}
              </span>
              <span className="text-gray-500 text-sm font-medium flex items-center gap-1">
                <Calendar size={14} />
                {publication.date}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              {publication.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <button 
                onClick={handlePrint}
                className="px-6 py-3 bg-teal-700 text-white font-bold rounded-full hover:bg-teal-800 transition-all shadow-md flex items-center gap-2 group print:hidden"
              >
                <Printer size={18} />
                Download / Print View
              </button>
              
              <button 
                onClick={handleDownloadFile}
                className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-full hover:bg-gray-50 transition-all flex items-center gap-2 print:hidden"
              >
                <Download size={18} />
                Download File
              </button>
              
              <button 
                onClick={handleShare}
                className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full hover:bg-teal-50 hover:text-teal-700 transition-colors border border-gray-100 print:hidden"
              >
                 <Share2 size={18} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 print:p-0">
         <Reveal delay={100}>
            <div className="bg-white p-8 md:p-12 rounded-[30px] shadow-sm mb-12 print:shadow-none print:p-0">
               <div className="prose prose-lg prose-teal max-w-none text-gray-700">
                  <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4 print:mt-12">Abstract & Key Findings</h2>
                  <p className="lead text-xl text-gray-600 mb-8">
                     Detailed analysis and findings regarding {publication.title.toLowerCase()}. This resource offers key data, methodological insights, and strategic recommendations for policymakers.
                  </p>
                  
                  <div className="bg-teal-50/50 p-6 rounded-2xl border border-teal-100 my-8 print:border-teal-700 print:border">
                     <h3 className="text-lg font-bold text-teal-900 mb-3 flex items-center gap-2">
                        <FileText className="text-teal-600 w-5 h-5"/>
                        Executive Summary
                     </h3>
                     <p className="mb-4">
                       In response to growing challenges in the region, this publication examines the core drivers and potential solutions related to {publication.title.toLowerCase()}. Through extensive data collection and stakeholder engagement, we outline actionable insights designed to support evidence-based decision making.
                     </p>
                     <p>
                       The findings emphasize the critical need for coordinated policy frameworks, sustained investment in local capacity, and adaptive strategies to navigate an evolving socioeconomic landscape.
                     </p>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-gray-900 mt-8 mb-4">Methodology</h3>
                  <p className="mb-6">
                    Our approach combined qualitative and quantitative methods, including extensive literature review, field surveys, and key informant interviews. Data was analyzed using advanced statistical software to ensure validity and reliability of the outcomes.
                  </p>

                  <h3 className="text-xl font-bold font-serif text-gray-900 mt-8 mb-4">Key Recommendations</h3>
                  <ul className="space-y-3 mb-8 list-disc pl-5">
                    <li>Strengthen institutional frameworks to enable long-term impact.</li>
                    <li>Enhance local capacity through targeted training and resources.</li>
                    <li>Promote multi-sectoral collaboration to address systemic challenges.</li>
                    <li>Invest in comprehensive monitoring and evaluation systems.</li>
                  </ul>
                  
                  {/* Related Projects Section */}
                  {relatedProjects.length > 0 && (
                     <div className="mt-12 pt-8 border-t border-gray-100 print:hidden">
                        <h3 className="text-xl font-bold font-serif text-gray-900 mb-6 flex items-center gap-2">
                           Related Projects
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           {relatedProjects.map((project, idx) => (
                              <div 
                                key={idx} 
                                onClick={() => onNavigateToProject && onNavigateToProject(project.id)}
                                className="flex flex-col bg-slate-50 border border-gray-100 rounded-2xl overflow-hidden hover:border-teal-200 hover:shadow-md transition-all group/project cursor-pointer"
                              >
                                 <div className="h-32 w-full overflow-hidden relative">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/project:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-3 left-4">
                                       <span className="text-xs font-bold uppercase tracking-wider text-white bg-teal-600/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
                                          {project.category}
                                       </span>
                                    </div>
                                 </div>
                                 <div className="p-5 flex-1 flex flex-col">
                                    <h4 className="font-bold text-gray-900 mb-2 group-hover/project:text-teal-700 transition-colors line-clamp-2">
                                       {project.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 line-clamp-2 flex-1">
                                       {project.description}
                                    </p>
                                    <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center justify-between">
                                       <span className="text-xs font-medium text-gray-500">{project.year}</span>
                                       <span className="text-teal-600 group-hover/project:translate-x-1 transition-transform flex items-center gap-1 text-sm font-medium">
                                          View Project <ArrowRight className="w-3.5 h-3.5" />
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  )}

                  <hr className="my-8 border-gray-100" />
                  
                  <p className="text-sm text-gray-500 italic">
                    Published by High Lands Centre of Leadership for Development (L4D). For further inquiries regarding this publication, please contact our research department.
                  </p>
               </div>
            </div>
         </Reveal>
      </div>
    </div>
  );
};

export default PublicationDetailPage;
