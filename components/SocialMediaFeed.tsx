import React from 'react';
import Reveal from './Reveal';
import { Linkedin } from 'lucide-react';

// SVG for X (Twitter)
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const SocialMediaFeed: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-0.5 bg-teal-800"></span>
                <span className="text-teal-700 font-bold tracking-wider uppercase text-sm">
                  STAY CONNECTED
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
                Join the Conversation
              </h2>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                Follow our latest field research updates, professional milestones, and policy insights across our social channels.
              </p>
            </div>
            <div className="flex gap-4 shrink-0 items-center">
              <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-16 h-16 rounded-full bg-white/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,128,128,0.08)] border border-white/60 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/20 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 fill-current" />
              </a>
              <a 
                href="https://x.com/L4DRwanda" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-16 h-16 rounded-full bg-white/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,128,128,0.08)] border border-white/60 flex items-center justify-center text-gray-400 hover:text-black hover:border-black/20 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
              >
                <XIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SocialMediaFeed;
