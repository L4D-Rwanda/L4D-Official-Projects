import React, { useEffect, useState } from 'react';
import { ArrowLeft, MapPin, Clock, Briefcase, X, Upload, Send, FileText, User, Mail, Phone, CheckCircle, Info, Heart, Zap, Coffee, Globe, Calendar, Users, Star, ArrowRight, Sparkles } from 'lucide-react';
import { JOBS } from '../constants';
import { Job } from '../types';
import Reveal from './Reveal';
import LazyImage from './LazyImage';

interface CareersPageProps {
  onBack: () => void;
}

const CareersPage: React.FC<CareersPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: ''
  });
  const [fileName, setFileName] = useState<string>('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setSubmitStatus('idle');
  };

  const closeForm = () => {
    setSelectedJob(null);
    setFormData({ name: '', email: '', phone: '', coverLetter: '' });
    setFileName('');
    setSubmitStatus('idle');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map((f: File) => f.name).join(', ');
      setFileName(names);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    const subject = encodeURIComponent(`Application for ${selectedJob.title} - ${formData.name}`);
    const body = encodeURIComponent(
      `Dear Hiring Team,\n\n` +
      `I am writing to apply for the position of ${selectedJob.title} in the ${selectedJob.department} department.\n\n` +
      `--- Applicant Details ---\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `--- Cover Letter ---\n` +
      `${formData.coverLetter}\n\n` +
      `[NOTE: My CV and degrees are attached to this email.]`
    );
    
    window.location.href = `mailto:info@hlcl4d.rw?subject=${subject}&body=${body}`;
    setSubmitStatus('success');
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 relative font-sans">
      
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
         <button 
            onClick={onBack}
            className="inline-flex items-center text-teal-700 font-bold hover:text-teal-900 group transition-colors py-2"
          >
            <div className="w-8 h-8 rounded-full bg-white border border-teal-100 flex items-center justify-center mr-3 group-hover:bg-teal-50 transition-colors shadow-sm">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </div>
            Back to Home
          </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Hero Section */}
        <Reveal>
            <div className="relative rounded-[40px] overflow-hidden bg-teal-900 text-white shadow-2xl mb-20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" 
                      alt="Team working together" 
                      className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/90 to-teal-800/80"></div>
                </div>

                <div className="relative z-10 p-10 md:p-20 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-3/5">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800/50 border border-teal-700 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                            <Sparkles size={12} className="text-yellow-400" />
                            We Are Hiring
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                            Build Your Career <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white">With Impact</span>
                        </h1>
                        <p className="text-lg md:text-xl text-teal-100/90 max-w-xl leading-relaxed mb-8">
                            Join a team of dedicated professionals committed to shaping policy and fostering development. We offer a dynamic work environment where research meets real-world application.
                        </p>
                        <div className="flex gap-4">
                            <a href="#open-positions" className="px-8 py-3.5 bg-white text-teal-900 font-bold rounded-full hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                View Positions
                            </a>
                        </div>
                    </div>
                    
                    {/* Floating Stats/Culture Cards */}
                    <div className="md:w-2/5 relative h-64 md:h-auto w-full">
                        <div className="absolute top-0 right-0 p-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 animate-in fade-in slide-in-from-right-8">
                            <Heart className="text-pink-400 h-8 w-8 mb-2" />
                            <p className="text-white font-bold text-lg">Work-Life Balance</p>
                            <p className="text-teal-200 text-sm">Flexible hours & remote options</p>
                        </div>
                        <div className="absolute bottom-4 left-4 p-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 animate-in fade-in slide-in-from-left-8 delay-150">
                            <Zap className="text-yellow-400 h-8 w-8 mb-2" />
                            <p className="text-white font-bold text-lg">Fast Growth</p>
                            <p className="text-teal-200 text-sm">Mentorship & Career paths</p>
                        </div>
                         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-white text-teal-900 rounded-2xl shadow-xl animate-in zoom-in delay-300">
                            <Users className="text-teal-600 h-8 w-8 mb-2" />
                            <p className="font-bold text-lg">Great Culture</p>
                            <p className="text-gray-500 text-sm">Inclusive & Collaborative</p>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>

        {/* Benefits Grid */}
        <div className="mb-20">
            <Reveal>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10 text-center">Why Join L4D?</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { icon: Globe, title: "Remote-First", desc: "Work from where you are most productive.", color: "bg-blue-50 text-blue-600" },
                    { icon: Coffee, title: "Team Retreats", desc: "Regular meetups to bond and brainstorm.", color: "bg-amber-50 text-amber-600" },
                    { icon: Star, title: "Development", desc: "Budget for courses and conferences.", color: "bg-purple-50 text-purple-600" },
                    { icon: Heart, title: "Health & Wellness", desc: "Comprehensive insurance for you and family.", color: "bg-pink-50 text-pink-600" }
                ].map((item, idx) => (
                    <Reveal key={idx} delay={idx * 100}>
                        <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                            <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>

        {/* Job Listings */}
        <div id="open-positions" className="mb-20 scroll-mt-24">
          <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-serif font-bold text-gray-900">Open Positions</h2>
            <span className="text-sm font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full">{JOBS.length} Roles Available</span>
          </div>
          
          <div className="grid gap-6">
            {JOBS.map((job, index) => (
              <Reveal key={job.id} delay={index * 100}>
                <div className="bg-white rounded-[30px] p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    
                    {/* Job Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                         <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          job.department === 'Research & Mentorship' ? 'bg-purple-50 text-purple-700' : 
                          job.department === 'Operations' ? 'bg-orange-50 text-orange-700' :
                          'bg-teal-50 text-teal-700'
                        }`}>
                          {job.department}
                        </span>
                        {index === 0 && (
                            <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> New
                            </span>
                        )}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">
                        {job.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-6">
                        <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-lg">
                          <MapPin className="mr-2 h-4 w-4 text-gray-400" />
                          {job.location}
                        </div>
                        <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-lg">
                          <Clock className="mr-2 h-4 w-4 text-gray-400" />
                          {job.type}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed max-w-3xl">
                        {job.description}
                      </p>
                    </div>

                    {/* Apply Action */}
                    <div className="flex-shrink-0">
                       <button 
                         onClick={() => handleApplyClick(job)}
                         className="w-full lg:w-auto text-center px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-teal-700 transition-all shadow-md transform active:scale-95 duration-200 flex items-center justify-center gap-2 group/btn"
                       >
                         Apply Now <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                       </button>
                    </div>

                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Spontaneous Application CTA */}
        <Reveal delay={300}>
          <div className="bg-gradient-to-br from-burgundy-900 to-burgundy-800 rounded-[30px] p-12 text-center text-white relative overflow-hidden shadow-2xl mb-12">
             <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
             
             <div className="relative z-10 max-w-2xl mx-auto">
               <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/10">
                  <Briefcase className="h-8 w-8 text-burgundy-200" />
               </div>
               <h3 className="text-3xl font-serif font-bold mb-4">Don't see the right fit?</h3>
               <p className="text-burgundy-100 text-lg mb-10 leading-relaxed">
                 We are always interested in meeting talented individuals who share our vision. Send us your resume for future consideration.
               </p>
               <a 
                  href="mailto:info@hlcl4d.rw" 
                  className="inline-flex items-center px-8 py-4 bg-white text-burgundy-900 font-bold rounded-full hover:bg-burgundy-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                >
                  Send Spontaneous Application <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
               </a>
             </div>
          </div>
        </Reveal>

      </div>

      {/* Application Form Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop - Increased contrast */}
          <div 
            className="absolute inset-0 bg-gray-900/80 backdrop-blur-md transition-opacity" 
            onClick={closeForm}
          ></div>

          {/* Modal Content - Enhanced focus */}
          <div className="relative bg-white rounded-[30px] w-full max-w-2xl shadow-2xl ring-1 ring-white/10 animate-in fade-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-100 bg-gray-50/80 backdrop-blur-sm rounded-t-[30px]">
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-900">
                  {submitStatus === 'success' ? 'Next Steps' : 'Apply for Position'}
                </h3>
                <p className="text-teal-700 font-bold text-sm mt-1 flex items-center gap-2">
                    <Briefcase size={14} /> {selectedJob.title}
                </p>
              </div>
              <button 
                onClick={closeForm}
                className="p-2.5 bg-white rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors shadow-sm"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-in zoom-in duration-500">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Draft Prepared!</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
                    We've opened your email client. Please attach your documents to complete the application.
                  </p>
                  
                  <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 text-left max-w-lg mx-auto mb-8 shadow-sm">
                      <h4 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
                        <Info className="h-5 w-5 text-amber-600" />
                        Checklist:
                      </h4>
                      <ul className="space-y-3 text-sm text-amber-900 font-medium">
                        <li className="flex items-center gap-3">
                           <div className="w-5 h-5 rounded-full border border-amber-300 bg-white flex items-center justify-center text-[10px]">1</div>
                           CV/Resume attached
                        </li>
                        <li className="flex items-center gap-3">
                           <div className="w-5 h-5 rounded-full border border-amber-300 bg-white flex items-center justify-center text-[10px]">2</div>
                           Academic Degrees attached
                        </li>
                        <li className="flex items-center gap-3">
                           <div className="w-5 h-5 rounded-full border border-amber-300 bg-white flex items-center justify-center text-[10px]">3</div>
                           Sent
                        </li>
                      </ul>
                  </div>

                  <button 
                    onClick={closeForm}
                    className="px-8 py-3.5 bg-teal-700 text-white font-bold rounded-full hover:bg-teal-800 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2 mx-auto"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <User className="h-4 w-4 text-teal-600" /> Full Name
                      </label>
                      <input 
                        required
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Jean Bosco"
                        className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all bg-white shadow-sm focus:shadow-md"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <Phone className="h-4 w-4 text-teal-600" /> Phone Number
                      </label>
                      <input 
                        required
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +250 788 123 456"
                        className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all bg-white shadow-sm focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-teal-600" /> Email Address
                    </label>
                    <input 
                      required
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. yourname@email.com"
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all bg-white shadow-sm focus:shadow-md"
                    />
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                       <FileText className="h-4 w-4 text-teal-600" /> Upload Documents
                     </label>
                     <div className="relative border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-teal-500 hover:bg-teal-50/50 transition-all cursor-pointer group bg-gray-50/50">
                        <input 
                          type="file" 
                          id="documents" 
                          name="documents"
                          multiple
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="flex flex-col items-center pointer-events-none">
                          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-teal-600 mb-3 shadow-md border border-gray-100 group-hover:scale-110 transition-transform">
                            <Upload className="h-6 w-6" />
                          </div>
                          {fileName ? (
                            <p className="text-sm font-bold text-teal-700 break-all px-4 bg-teal-100/50 py-1 rounded-full">{fileName}</p>
                          ) : (
                            <>
                              <p className="text-sm font-bold text-gray-900 group-hover:text-teal-700 transition-colors">Drop files here or click to upload</p>
                              <p className="text-xs text-gray-500 mt-1">CV & Degrees (PDF, Max 10MB)</p>
                            </>
                          )}
                        </div>
                     </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="coverLetter" className="text-sm font-bold text-gray-700">
                      Cover Letter
                    </label>
                    <textarea 
                      required
                      id="coverLetter" 
                      name="coverLetter"
                      rows={5}
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      placeholder="Tell us why you are a great fit..."
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all bg-white shadow-sm focus:shadow-md resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit" 
                      className="w-full bg-teal-700 text-white font-bold py-4 rounded-full hover:bg-teal-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group ring-4 ring-teal-500/20"
                    >
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Submit Application
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-4">
                      We respect your privacy. Your data is sent securely.
                    </p>
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;