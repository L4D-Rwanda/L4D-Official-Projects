import React, { useState } from 'react';
import { Twitter, Linkedin, Facebook, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { Page } from './Navbar';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onNavigateToPublicationCategory?: (category: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onNavigateToPublicationCategory }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleNavClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    // Map footer link text to Page type if necessary, or pass correct string
    // In this case, we pass the page identifier directly
    onNavigate(page as Page);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-24 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1">
             <div className="mb-8">
               <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="inline-block">
                 <Logo variant="white" className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity" />
               </a>
             </div>
            <p className="text-sm leading-relaxed mb-8 text-gray-400">
              High Lands Centre of Leadership for Development. Professionalism, research excellence, and thought leadership in East Africa.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/L4D_Rwanda" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-700 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/high-lands-centre-of-leadership-for-development" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-700 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.facebook.com/L4DRwanda" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-700 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider flex items-center gap-2">
              <span className="w-8 h-0.5 bg-teal-600"></span>
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-teal-500" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-teal-500" />
                  Our Services
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-teal-500" />
                  Projects
                </a>
              </li>
              <li>
                <a href="#careers" onClick={(e) => handleNavClick(e, 'careers')} className="hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-teal-500" />
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-teal-500" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider flex items-center gap-2">
              <span className="w-8 h-0.5 bg-teal-600"></span>
              Resources
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#publications" 
                   onClick={(e) => { 
                     e.preventDefault(); 
                     if (onNavigateToPublicationCategory) onNavigateToPublicationCategory('Report');
                     else handleNavClick(e, 'publications');
                   }} 
                   className="hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-teal-500" />
                  Research Reports
                </a>
              </li>
              <li>
                <a href="#publications" 
                   onClick={(e) => { 
                     e.preventDefault(); 
                     if (onNavigateToPublicationCategory) onNavigateToPublicationCategory('Policy Brief');
                     else handleNavClick(e, 'publications');
                   }} 
                   className="hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-teal-500" />
                  Policy Briefs
                </a>
              </li>
              <li>
                <a href="#publications" 
                   onClick={(e) => { 
                     e.preventDefault(); 
                     if (onNavigateToPublicationCategory) onNavigateToPublicationCategory('News & Insights');
                     else handleNavClick(e, 'publications');
                   }} 
                   className="hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-teal-500" />
                  News & Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider flex items-center gap-2">
              <span className="w-8 h-0.5 bg-teal-600"></span>
              Newsletter
            </h4>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Subscribe to receive updates on our latest research, policy insights, and opportunities.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <div className="relative">
                 <input 
                   type="email" 
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder="Enter your email" 
                   required
                   disabled={status === 'success' || status === 'submitting'}
                   className={`w-full bg-gray-800 border ${status === 'success' ? 'border-green-500 text-green-500' : 'border-gray-700 text-white'} px-4 py-3 rounded-[15px] focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-sm transition-all placeholder:text-gray-500`}
                 />
                 {status === 'success' && (
                    <CheckCircle2 className="absolute right-3 top-3 text-green-500 h-5 w-5 animate-in zoom-in" />
                 )}
              </div>
              <button 
                type="submit" 
                disabled={status === 'success' || status === 'submitting'}
                className={`w-full px-4 py-3 rounded-[15px] text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  status === 'success' 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-teal-700 text-white hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-900/50'
                }`}
              >
                {status === 'submitting' ? (
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : status === 'success' ? (
                  'Subscribed!'
                ) : (
                  <>
                    Subscribe <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} High Lands Centre of Leadership for Development (L4D). All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#privacy" onClick={(e) => handleNavClick(e, 'privacy')} className="hover:text-teal-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#terms" onClick={(e) => handleNavClick(e, 'terms')} className="hover:text-teal-400 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;