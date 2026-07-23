import React, { useEffect } from 'react';
import Reveal from './Reveal';
import BackButton from './BackButton';

interface StaticPageProps {
  title: string;
  onBack?: () => void;
}

const StaticPage: React.FC<StaticPageProps> = ({ title, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {onBack && <BackButton onClick={onBack} label="Back" className="mb-6" />}
        <Reveal>
          <div className="bg-white/60 backdrop-blur-md p-8 md:p-16 rounded-[30px] shadow-sm border border-gray-100">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">{title}</h1>
            <div className="prose pburgundy-lg pburgundy-teal max-w-none text-gray-600">
              <p className="lead">
                This page is currently under review and its content will be available soon. 
                Please check back later for updates regarding our {title.toLowerCase()}.
              </p>
              <p>
                At High Lands Centre of Leadership for Development (L4D), we take our policies and terms seriously. 
                Our team is currently finalizing the document to ensure it meets our standards and regulatory requirements.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default StaticPage;
