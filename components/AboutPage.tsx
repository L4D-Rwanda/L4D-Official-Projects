import React, { useEffect, useState, useRef } from 'react';
import { TEAM } from '../constants';
import Reveal from './Reveal';
import { Award, BookOpen, Users, Milestone, ArrowRight } from 'lucide-react';

const CountUp = ({ end, duration = 2000, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation (easeOutExpo)
      const easeOut = (x: number): number => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      };
      
      setCount(Math.floor(easeOut(progress) * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

const getInitials = (name: string) => {
  if (!name) return '';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const TeamCard = ({ member, index }: { member: any, index: number }) => {
  const [imgError, setImgError] = useState(false);
  const isFounder = member.role.toLowerCase().includes('founder') || member.name.toLowerCase().includes('bizoza');
  const initials = getInitials(member.name);

  return (
    <Reveal delay={index * 100}>
      <div className="group relative bg-white/60 backdrop-blur-md rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
        {member.image && !imgError ? (
          <div className={`aspect-square overflow-hidden relative bg-gray-50 flex items-center justify-center p-6`}>
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full aspect-square object-cover object-center transition-transform duration-700 group-hover:scale-105 rounded-[20%] shadow-sm bg-white"
              style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', objectPosition: 'center', borderRadius: '20%' }}
              loading="lazy"
              onError={() => setImgError(true)}
            />
            <div className="absolute inset-x-6 inset-y-6 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20%] pointer-events-none"></div>
          </div>
        ) : (
          <div className={`aspect-square overflow-hidden relative bg-gradient-to-br from-teal-50 to-teal-100/50 flex items-center justify-center p-6`}>
            <div className="w-24 h-24 rounded-[20%] bg-teal-800 text-white flex items-center justify-center text-3xl font-bold font-serif shadow-inner group-hover:scale-110 transition-transform duration-500">
              {initials}
            </div>
            <div className="absolute inset-x-6 inset-y-6 bg-gradient-to-t from-teal-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20%]"></div>
          </div>
        )}
        <div className="p-8 relative flex-1 flex flex-col">
          <div className="absolute -top-10 right-8 w-16 h-16 bg-burgundy-700 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
             <Users size={24} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-teal-700 transition-colors">{member.name}</h3>
          <p className="text-teal-600 font-medium text-sm mb-4 uppercase tracking-wide">{member.role}</p>
          <p className="text-gray-600 leading-relaxed">
            {member.bio}
          </p>
        </div>
      </div>
    </Reveal>
  );
};

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const yearsActive = new Date().getFullYear() - 2012;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-teal-900 py-24 text-white mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-teal-800/30 transform skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-burgundy-900/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <span className="inline-block py-1 px-3 rounded-full bg-teal-800/50 border border-teal-700/50 text-teal-300 font-bold uppercase tracking-wider text-xs mb-6 backdrop-blur-sm">
              Since 2012
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Bridging Policy Research <br/> & Policy Action
            </h1>
            <p className="text-xl text-teal-100 max-w-2xl leading-relaxed font-light">
              Leading the way in evidence-based policy research and strategic advisory in Africa. We turn complex data into actionable insights.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story & Stats */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-burgundy-700 font-bold uppercase tracking-wider text-sm mb-3">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Our Establishment & Mission</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  The High Lands Centre of Leadership for Development (L4D) was established in 2012 with a clear mandate: to bridge the gap between academic research and practical policy implementation.
                </p>
                <p>
                  With expertise spanning agriculture, economic development, natural resource management, climate resilience, gender, youth empowerment, and social protection, we have delivered evidence-based solutions that advance sustainable development across these sectors. Our interdisciplinary team combines local expertise with international best practices to produce objective, reliable, and impactful policy research.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                 <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-4xl font-bold text-teal-700 mb-1">
                      <CountUp end={60} suffix="+" />
                    </h4>
                    <p className="text-sm text-gray-600 font-medium">Major Research Assignments</p>
                 </div>
                 <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-4xl font-bold text-teal-700 mb-1">
                      <CountUp end={yearsActive} suffix="+" />
                    </h4>
                    <p className="text-sm text-gray-600 font-medium">Years Active</p>
                 </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-teal-100 rounded-[30px] transform rotate-3 scale-95"></div>
              <img referrerPolicy="no-referrer" 
                src="https://lh3.googleusercontent.com/d/1De3GysxtCdJ8VaMuM9HUpaycNcXi2-aA" 
                alt="L4D Collaboration" 
                className="relative rounded-[30px] shadow-xl w-full object-cover h-[500px]"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="mb-24">
           <Reveal>
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-serif font-bold text-gray-900">Our Journey</h2>
                 <p className="text-gray-500 mt-2">Key milestones that define our growth</p>
              </div>
           </Reveal>

           <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>
              
              <div className="space-y-12">
                 {[
                   { year: '2012', title: 'Establishment', desc: 'L4D founded in Kigali as a think-tank.', icon: Milestone },
                   { year: '2015', title: 'Regional Expansion', desc: 'Started operations in neighboring East African countries.', icon: ArrowRight },
                   { year: '2018', title: 'Strategic Partnerships', desc: 'Signed MOUs with key UN agencies and Government bodies.', icon: Users },
                   { year: '2023', title: 'Centre of Excellence', desc: 'Recognized as a leading policy research hub.', icon: Award },
                 ].map((item, idx) => {
                    const isEven = idx % 2 === 0;
                    const Icon = item.icon;
                    return (
                      <Reveal key={idx} delay={idx * 100}>
                         <div className={`flex flex-col md:flex-row items-center justify-between ${isEven ? '' : 'md:flex-row-reverse'}`}>
                            <div className="w-full md:w-5/12"></div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-teal-700 border-4 border-white shadow-lg flex items-center justify-center text-white z-10 hidden md:flex">
                               <Icon size={18} />
                            </div>
                            <div className={`w-full md:w-5/12 bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all ${isEven ? 'text-right' : 'text-left'}`}>
                               <span className="text-burgundy-700 font-bold text-xl block mb-1">{item.year}</span>
                               <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                               <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                         </div>
                      </Reveal>
                    );
                 })}
              </div>
           </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <Reveal>
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Team</h2>
               <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                 Our team combines academic rigor with practical experience in government and international development.
               </p>
            </div>
          </Reveal>

          {/* Advisory Board */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold font-serif text-gray-900 mb-8 pb-4 border-b border-gray-100">Advisory Board</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM.filter(m => m.type === 'Board' || m.type === 'Leadership').map((member, index) => (
                 <TeamCard key={index} member={member} index={index} />
              ))}
            </div>
          </div>

          {/* Staff */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold font-serif text-gray-900 mb-8 pb-4 border-b border-gray-100">Our Experts & Staff</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM.filter(m => m.type === 'Staff').map((member, index) => (
                 <TeamCard key={index} member={member} index={index} />
              ))}
            </div>
          </div>

          {/* Associate Researchers */}
          {TEAM.filter(m => m.type === 'Consultant').length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold font-serif text-gray-900 mb-8 pb-4 border-b border-gray-100">Associate Researchers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {TEAM.filter(m => m.type === 'Consultant').map((member, index) => (
                   <TeamCard key={index} member={member} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Legal Status CTA */}
        <Reveal>
          <div className="bg-gradient-to-r from-teal-900 to-teal-800 rounded-[30px] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            
            <BookOpen className="w-12 h-12 mx-auto mb-6 text-teal-300" />
            <h3 className="text-3xl font-serif font-bold mb-4">Officially Registered & Compliant</h3>
            <p className="text-teal-100 leading-relaxed max-w-2xl mx-auto text-lg">
              L4D is legally registered with the Rwanda Development Board (RDB) under Company Code 102803581. We operate in full compliance with national regulations and adhere to international standards.
            </p>
          </div>
        </Reveal>

      </div>
    </div>
  );
};

export default AboutPage;