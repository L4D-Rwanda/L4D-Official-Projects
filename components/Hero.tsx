import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Page } from './Navbar';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Optimization: Only update state when the hero section is likely visible
      if (window.scrollY <= window.innerHeight) {
        setOffset(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Parallax Wrapper */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          transform: `translateY(${offset * 0.5}px)`,
          willChange: 'transform'
        }}
      >
        {/* High quality background video representing Rwanda/Development */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1547623644-8aa47b6678b8?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover scale-110"
        >
          <source src="https://cdn.coverr.co/videos/coverr-tea-plantation-in-sri-lanka-4528/1080p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Reinforced gradients for better text visibility */}
        <div className="absolute inset-0 bg-teal-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center sm:block mt-16 sm:mt-24 md:mt-32">
        <div className="max-w-3xl text-center sm:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-50 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
            Policy Research & Advisory
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 lg:mb-8 leading-tight drop-shadow-lg animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Shaping Policy <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-400">Practice</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-10 lg:mb-12 leading-relaxed font-light drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            High Lands Centre of Leadership for Development (L4D) is a premier Kigali-based centre dedicated to informing policy practices through applied research, mentorship, and strategic advisory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start sm:justify-start animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 w-full sm:w-auto">
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 border border-transparent text-base font-bold rounded-[30px] text-teal-900 bg-white hover:bg-gray-100 transition-all shadow-lg hover:shadow-teal-500/20 hover:-translate-y-1 group"
            >
              Work With Us
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#publications" 
              onClick={(e) => { e.preventDefault(); onNavigate('publications'); }}
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 border border-white/30 text-base font-bold rounded-[30px] text-white bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm shadow-sm"
            >
              Read Our Research
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;