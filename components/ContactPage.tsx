import React, { useEffect } from 'react';
import Contact from './Contact'; // Reusing existing Contact component logic/UI
import Reveal from './Reveal';
import SocialMediaFeed from './SocialMediaFeed';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 text-center">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
            We are always ready to discuss new opportunities for collaboration. Reach out to us using the form below or visit our offices.
          </p>
        </Reveal>
      </div>

      <SocialMediaFeed />
      <Contact />
    </div>
  );
};

export default ContactPage;