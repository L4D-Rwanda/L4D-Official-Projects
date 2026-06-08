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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left mt-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-50 text-xs font-bold uppercase tracking-wider shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
            Policy Research & Advisory
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Shaping Policy <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-400">Practice</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed max-w-2xl font-light drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            High Lands Centre of Leadership for Development (L4D) is a premier Kigali-based centre dedicated to informing policy practices through applied research, mentorship, and strategic advisory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-[30px] text-teal-900 bg-white hover:bg-gray-100 transition-all shadow-lg hover:shadow-teal-500/20 hover:-translate-y-1"
            >
              Work With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#publications" 
              onClick={(e) => { e.preventDefault(); onNavigate('publications'); }}
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-base font-bold rounded-[30px] text-white bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm shadow-sm"
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