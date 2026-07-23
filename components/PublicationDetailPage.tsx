import React, { useEffect } from 'react';
import { PUBLICATIONS, PROJECTS } from '../constants';
import Reveal from './Reveal';
import BackButton from './BackButton';
import { Download, Calendar, FileText, Share2, Printer, Activity, User, ArrowRight } from 'lucide-react';

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
        <h1 className="text-2xl font-bold mb-4">Publication Not Found</h1>
        <BackButton onClick={onBack} label="Go Back" />
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
    // Generate a mock PDF file since documents are only available in PDF format
    const pdfContent = `%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> >> >> >>\nendobj\n4 0 obj\n<< /Length 53 >>\nstream\nBT\n/F1 24 Tf\n100 700 Td\n(Publication Downloaded) Tj\nET\nendstream\nendobj\nxref\n0 5\n0000000000 65535 f \n0000000009 00000 n \n0000000058 00000 n \n0000000115 00000 n \n0000000288 00000 n \ntrailer\n<< /Size 5 /Root 1 0 R >>\nstartxref\n390\n%%EOF`;
    
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    
    // Replace characters that might be invalid in filenames
    link.download = `${publication.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`;
    
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
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 font-sans print:bg-white print:pt-0">
      <div className="bg-white/60 backdrop-blur-md py-16 mb-16 border-b border-gray-100 print:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <BackButton onClick={onBack} label="Back to Publications" className="mb-6" />
          
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                  publication.type === 'Report' ? 'bg-teal-50 text-teal-700' :
                  publication.type === 'Policy Brief' ? 'bg-teal-50 text-teal-700' :
                  publication.type === 'News & Insights' ? 'bg-burgundy-50 text-burgundy-700' :
                  'bg-gray-50 text-gray-700'
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
                Preview
              </button>
              
              <button 
                onClick={handleDownloadFile}
                className="px-6 py-3 bg-white/60 backdrop-blur-md border border-gray-200 text-gray-700 font-bold rounded-full hover:bg-gray-50 transition-all flex items-center gap-2 print:hidden"
              >
                <Download size={18} />
                Download
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
            <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[30px] shadow-sm mb-12 print:shadow-none print:p-0">
               <div className="prose pburgundy-lg pburgundy-teal max-w-none text-gray-700">
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
                                className="flex flex-col bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:border-teal-200 hover:shadow-md transition-all group/project cursor-pointer"
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
