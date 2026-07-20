import React, { useState } from 'react';
import { Mail, MapPin, Globe, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950 text-white scroll-mt-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-burgundy-900/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info */}
            <div className="lg:pr-8 pt-8">
              <span className="inline-block py-1 px-3 rounded-full bg-teal-800/50 border border-teal-700/50 text-teal-300 font-bold uppercase tracking-wider text-sm mb-4 backdrop-blur-sm">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Let's Start a Conversation</h2>
              <p className="text-teal-100 mb-10 text-lg leading-relaxed">
                Whether you are interested in our policy research, looking for advisory services, or want to partner with us, we are here to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="p-4 bg-teal-800/50 rounded-2xl group-hover:bg-teal-700/50 transition-colors border border-teal-700/30">
                    <MapPin className="h-6 w-6 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Visit Us</h4>
                    <p className="text-teal-200/80 leading-relaxed max-w-xs">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 group">
                  <div className="p-4 bg-teal-800/50 rounded-2xl group-hover:bg-teal-700/50 transition-colors border border-teal-700/30">
                    <Mail className="h-6 w-6 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Email Us</h4>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-teal-200/80 hover:text-white transition-colors block text-lg">{CONTACT_INFO.email}</a>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="p-4 bg-teal-800/50 rounded-2xl group-hover:bg-teal-700/50 transition-colors border border-teal-700/30">
                    <Globe className="h-6 w-6 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Website</h4>
                    <a href={`https://${CONTACT_INFO.website}`} className="text-teal-200/80 hover:text-white transition-colors block text-lg">{CONTACT_INFO.website}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Enhanced Visibility */}
            <div className="relative mt-8 lg:mt-0">
               {/* Decorative shadow/backdrop for form */}
               <div className="absolute inset-0 bg-teal-600 rounded-[30px] rotate-2 transform translate-y-2 opacity-20 blur-sm"></div>
               
               <div className="bg-white/90 backdrop-blur-md hover:backdrop-blur-xl hover:scale-[1.02] rounded-[30px] p-8 md:p-10 text-gray-900 shadow-2xl relative border border-white/10">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Send us a Message</h3>
                  <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you shortly.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-semibold text-gray-700 ml-1">First Name</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          required
                          disabled={status !== 'idle'}
                          className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white/60 backdrop-blur-md focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all placeholder:text-gray-400 text-gray-900 disabled:opacity-50" 
                          placeholder="John" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-semibold text-gray-700 ml-1">Last Name</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          required
                          disabled={status !== 'idle'}
                          className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white/60 backdrop-blur-md focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all placeholder:text-gray-400 text-gray-900 disabled:opacity-50" 
                          placeholder="Doe" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        disabled={status !== 'idle'}
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white/60 backdrop-blur-md focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all placeholder:text-gray-400 text-gray-900 disabled:opacity-50" 
                        placeholder="john@example.com" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
                      <div className="relative">
                        <select id="subject" disabled={status !== 'idle'} className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white/60 backdrop-blur-md focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all appearance-none text-gray-700 cursor-pointer disabled:opacity-50">
                            <option>General Inquiry</option>
                            <option>Partnership Proposal</option>
                            <option>Policy Research Request</option>
                            <option>Media</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        required
                        disabled={status !== 'idle'}
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white/60 backdrop-blur-md focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all placeholder:text-gray-400 text-gray-900 resize-none disabled:opacity-50" 
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={status !== 'idle'}
                      className={`w-full font-bold py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 group mt-2 ${
                        status === 'success' ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-teal-900/20' : 'bg-burgundy-700 hover:bg-burgundy-800 text-white hover:shadow-xl'
                      }`}
                    >
                      {status === 'submitting' ? (
                        <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      ) : status === 'success' ? (
                        <>Message Sent! <CheckCircle2 className="h-5 w-5 animate-in zoom-in" /></>
                      ) : (
                        <>Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>
                      )}
                    </button>
                  </form>
               </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;