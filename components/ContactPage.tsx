import React, { useEffect } from 'react';
import Contact from './Contact'; // Reusing existing Contact component logic/UI
import Reveal from './Reveal';
import SocialMediaFeed from './SocialMediaFeed';
import BackButton from './BackButton';

interface ContactPageProps {
  onBack?: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Header section with clean background and border-b */}
      <div className="bg-gray-50 py-16 border-b border-gray-100 relative overflow-hidden mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {onBack && (
            <div className="text-left mb-6">
              <BackButton onClick={onBack} label="Back" />
            </div>
          )}
          <Reveal>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We are always ready to discuss new opportunities for collaboration. Reach out to us using the form below or visit our offices.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <SocialMediaFeed />
      <Contact />
    </div>
  );
};

export default ContactPage;