import React, { useEffect, useState, useRef } from 'react';
import Reveal from './Reveal';
import { 
  ArrowRight, 
  Activity, 
  Users, 
  Award, 
  Coins, 
  TrendingUp, 
  Briefcase, 
  GraduationCap, 
  Zap, 
  Percent, 
  Building2, 
  Calendar,
  Globe2,
  LineChart,
  UserCheck,
  Equal
} from 'lucide-react';

interface ImpactPageProps {
  onNavigate: (path: string) => void;
}

// Custom Counter for Integers
const CountUp = ({ end, duration = 2000, suffix = '', prefix = '' }: { end: number, duration?: number, suffix?: string, prefix?: string }) => {
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
      
      const easeOut = (x: number): number => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      };
      
      setCount(Math.floor(easeOut(progress) * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}
      {isVisible ? count.toLocaleString() : "0"}
      {suffix}
    </span>
  );
};

// Custom Counter for Decimals
const CountUpDecimal = ({ end, decimals = 1, duration = 2000, suffix = '', prefix = '' }: { end: number, decimals?: number, duration?: number, suffix?: string, prefix?: string }) => {
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
      
      const easeOut = (x: number): number => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      };
      
      setCount(easeOut(progress) * end);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}
      {isVisible ? count.toFixed(decimals) : "0.0"}
      {suffix}
    </span>
  );
};

const ImpactPage: React.FC<ImpactPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'economic' | 'human-capital'>('economic');
  const [activeLevel, setActiveLevel] = useState<'senior' | 'supervisor' | 'enumerator'>('enumerator');
  const [activeCategory, setActiveCategory] = useState<'youth' | 'women' | 'community'>('youth');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gray-50 py-16 mb-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-teal-700 font-bold uppercase tracking-wider text-sm">Empowerment Through Evidence</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2 mb-6">14-Years Impact Journey</h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Since 2012, High Lands Centre of Leadership for Development (L4D) has translated rigorous policy research and strategic advisory into tangible economic progress and human capital excellence.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Main Core Navigation Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-serif font-bold text-gray-900">Explore Our Impact Areas</h2>
          <p className="text-gray-500 mt-2">Navigate to deep-dives or read our integrated impact report below.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Policy & National Impact Card */}
          <Reveal delay={50}>
            <div 
              onClick={() => onNavigate('national-impact')}
              className="bg-white/60 backdrop-blur-md rounded-[30px] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer h-full flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-teal-700" />
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-700 transition-colors duration-300">
                <Award className="h-7 w-7 text-teal-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">Policy & National Impact</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                Explore our direct contributions to Rwanda's national policies, strategy formulations, and post-crisis economic recovery frameworks.
              </p>
              <div className="inline-flex items-center text-teal-700 font-semibold text-sm group-hover:text-teal-800">
                Explore Policy Impact <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Reveal>

          {/* Projects Card */}
          <Reveal delay={100}>
            <div 
              onClick={() => onNavigate('projects')}
              className="bg-white/60 backdrop-blur-md rounded-[30px] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer h-full flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-teal-600" />
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-700 transition-colors duration-300">
                <Activity className="h-7 w-7 text-teal-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">Research Projects</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                Explore our comprehensive portfolio of 60+ major research projects spanning agricultural transformation, climate adaptation, and gender.
              </p>
              <div className="inline-flex items-center text-teal-700 font-semibold text-sm group-hover:text-teal-800">
                View All Projects <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Reveal>

          {/* Programs & Partnerships Card */}
          <Reveal delay={150}>
            <div 
              onClick={() => onNavigate('programs')}
              className="bg-white/60 backdrop-blur-md rounded-[30px] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer h-full flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-teal-700" />
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-700 transition-colors duration-300">
                <Users className="h-7 w-7 text-teal-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">Programs & Partnerships</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                Discover our strategic alliances with international development partners, UN agencies, government ministries, and global institutions.
              </p>
              <div className="inline-flex items-center text-teal-700 font-semibold text-sm group-hover:text-teal-800">
                Learn About Partnerships <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* NEW: L4D Interactive Socio-Economic & Job Impact Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-teal-950 text-white rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Accent Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-700/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-800/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 border-b border-teal-800/50 pb-8">
                <div>
                  <span className="text-teal-400 font-bold uppercase tracking-wider text-xs">Interactive Dashboard</span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mt-1 text-gray-100">Local Impact & Job Engine</h2>
                  <p className="text-gray-400 text-sm md:text-base mt-2 max-w-xl">
                    Our evidence-based research generates robust economic multiplier effects and deep human capital in the communities we serve.
                  </p>
                </div>

                {/* Dashboard Tabs Toggle */}
                <div className="flex bg-teal-900/40 p-1.5 rounded-2xl border border-teal-800/50 mt-6 md:mt-0 self-start">
                  <button
                    onClick={() => setActiveTab('economic')}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeTab === 'economic'
                        ? 'bg-teal-700 text-white shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Users className="h-4 w-4" />
                    <span>Employment Engine</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('human-capital')}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeTab === 'human-capital'
                        ? 'bg-teal-700 text-white shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Globe2 className="h-4 w-4" />
                    <span>Capacity & Society</span>
                  </button>
                </div>
              </div>

              {/* TAB 1: EMPLOYMENT ENGINE */}
              {activeTab === 'economic' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left stats summary cards */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div className="bg-teal-950/60 backdrop-blur-md rounded-2xl border border-teal-800/50 hover:border-teal-700/50 transition-all group overflow-hidden">
                      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-teal-800/50 relative">
                        {/* Connection visual element */}
                        <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-teal-900/60 border border-teal-700/50 rounded-full items-center justify-center z-10 text-gray-400">
                          <Equal className="w-4 h-4 text-teal-500" />
                        </div>

                        <div className="p-6 relative">
                          <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-teal-900/50 rounded-xl flex items-center justify-center">
                              <Users className="h-5 w-5 text-teal-400" />
                            </div>
                            <span className="text-xs text-teal-400 font-semibold bg-teal-950/40 px-2 py-0.5 rounded-full">Youth</span>
                          </div>
                          <h4 className="text-3xl md:text-4xl font-bold text-gray-100 mb-1">
                            <CountUp end={13246} suffix="+" />
                          </h4>
                          <p className="text-sm font-semibold text-gray-300">Days of Employment</p>
                          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                            Created high-quality work opportunities for educated youth in a country with a young and growing workforce.
                          </p>
                        </div>

                        <div className="p-6 relative">
                          <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-teal-900/50 rounded-xl flex items-center justify-center">
                              <Briefcase className="h-5 w-5 text-teal-400" />
                            </div>
                            <span className="text-xs text-teal-400 font-semibold bg-teal-950/40 px-2 py-0.5 rounded-full">Continuous</span>
                          </div>
                          <h4 className="text-3xl md:text-4xl font-bold text-gray-100 mb-1">
                            <CountUp end={53} suffix="" /> <span className="text-lg font-serif text-gray-400">FTEs</span>
                          </h4>
                          <p className="text-sm font-semibold text-gray-300">Full-Time Equivalent Positions</p>
                          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                            Maintained continuously throughout our existence, providing stable livelihoods and professional growth.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-teal-950/80 px-6 py-4 border-t border-teal-800/50 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-teal-950/80 flex flex-shrink-0 items-center justify-center border border-teal-800/50">
                           <TrendingUp className="w-5 h-5 text-teal-400" />
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          Our operations have created over <strong className="text-teal-400 font-semibold">13,246 days</strong> of employment, equivalent to <strong className="text-teal-400 font-semibold">53 full-time positions</strong> maintained throughout our existence.
                        </p>
                      </div>
                    </div>

                    {/* Community Impact Visualization Bar */}
                    <div className="bg-teal-950/40 backdrop-blur-md p-6 rounded-2xl border border-teal-800/50">
                      <div className="flex justify-between text-xs text-gray-400 font-medium mb-2">
                        <span>Local Opportunities Created</span>
                        <span>Multi-Level Empowerment</span>
                      </div>
                      <div className="w-full bg-teal-900/60 rounded-full h-4 overflow-hidden p-0.5 border border-teal-800/50">
                        <div className="bg-gradient-to-r from-teal-600 to-teal-400 h-full rounded-full transition-all duration-1000" style={{ width: '100%' }}>
                          <div className="w-[40%] h-full bg-teal-900/50 rounded-l-full border-r border-teal-950/50 inline-block" />
                          <div className="w-[30%] h-full bg-teal-700/50 border-r border-teal-950/50 inline-block" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-3 text-[11px] text-gray-500">
                        <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-teal-600 mr-1.5" /> Enumerators & Field Agents</span>
                        <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-teal-500 mr-1.5" /> Supervisors</span>
                        <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-teal-300 mr-1.5" /> Senior Advisors</span>
                      </div>
                    </div>
                  </div>

                  {/* Right societal impact card */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-teal-950 to-teal-900/80 p-8 rounded-2xl border border-teal-800/50 flex flex-col justify-between relative group overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-600/5 rounded-full blur-2xl" />
                    
                    <div>
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-teal-900/50 rounded-xl flex items-center justify-center">
                          <Globe2 className="h-5 w-5 text-teal-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-serif font-bold text-gray-100">Societal Footprint</h4>
                          <p className="text-xs text-gray-400">Driving Change Across Communities</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between text-xs text-gray-400 mb-1 font-semibold">
                            <span>Policy Improvements</span>
                            <span className="text-teal-400">Real-World</span>
                          </div>
                          <h5 className="text-xl font-bold text-gray-100 mb-2">
                            Enhancing Livelihoods
                          </h5>
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                            Our studies have informed policy adjustments that protect and enhance the livelihoods of thousands of small-scale traders and farmers, driving value far beyond direct employment.
                          </p>
                        </div>

                        <div className="border-t border-teal-800/50 pt-6">
                          <div className="flex justify-between text-xs text-gray-400 mb-1 font-semibold">
                            <span>Local Governance</span>
                            <span className="text-teal-400">Capacity Building</span>
                          </div>
                          <h5 className="text-xl font-bold text-gray-100 mb-2">
                            Evidence-Based Leadership
                          </h5>
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                            Government officials and community representatives who participate in our research gain valuable exposure to evidence-based practices, creating a multiplier effect in local governance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: HUMAN CAPITAL & METODOLOGICAL INNOVATION */}
              {activeTab === 'human-capital' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left: Mentorship and Gender */}
                  <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-teal-950/60 backdrop-blur-md p-6 rounded-2xl border border-teal-800/50 hover:border-teal-700/50 transition-all group">
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-10 h-10 bg-teal-900/50 rounded-xl flex items-center justify-center">
                            <GraduationCap className="h-5 w-5 text-teal-400" />
                          </div>
                          <span className="text-xs text-teal-400 font-semibold bg-teal-950/40 px-2 py-0.5 rounded-full">Mentorship</span>
                        </div>
                        <h4 className="text-4xl font-bold text-gray-100 mb-1">
                          <CountUp end={50} suffix="+" />
                        </h4>
                        <p className="text-sm font-semibold text-gray-300">University Graduates Trained</p>
                        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                          Equipped with advanced research methods, SurveyCTO, data analysis, and report writing, launching prominent careers in public and private sectors.
                        </p>
                      </div>

                      <div className="bg-teal-950/60 backdrop-blur-md p-6 rounded-2xl border border-teal-800/50 hover:border-teal-700/50 transition-all group">
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-10 h-10 bg-teal-900/50 rounded-xl flex items-center justify-center">
                            <Percent className="h-5 w-5 text-teal-400" />
                          </div>
                          <span className="text-xs text-teal-400 font-semibold bg-teal-950/40 px-2 py-0.5 rounded-full">Gender Target</span>
                        </div>
                        <h4 className="text-4xl font-bold text-gray-100 mb-1">
                          <CountUp end={40} suffix="%" />
                        </h4>
                        <p className="text-sm font-semibold text-gray-300">Women Field Researchers</p>
                        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                          Consistently maintained throughout all field data collections, ensuring robust career pathways for female professionals.
                        </p>
                      </div>
                    </div>

                    {/* Female Participation progress visualizer */}
                    <div className="bg-teal-950/40 backdrop-blur-md p-6 rounded-2xl border border-teal-800/50">
                      <div className="flex justify-between text-xs text-gray-400 font-medium mb-2">
                        <span>Gender Inclusivity in Field Teams: 40% Women Representation</span>
                        <span className="text-teal-400">Industry Leader</span>
                      </div>
                      <div className="w-full bg-teal-900/60 rounded-full h-3 overflow-hidden p-0.5">
                        <div className="bg-gradient-to-r from-teal-500 to-teal-400 h-full rounded-full" style={{ width: '40%' }} />
                      </div>
                      <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                        L4D actively designs field rosters to prioritize gender inclusion, providing female university graduates with key professional entry points.
                      </p>
                    </div>
                  </div>

                  {/* Right: Technological Innovation (SurveyCTO) */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-teal-950 to-teal-900/80 p-8 rounded-2xl border border-teal-800/50 flex flex-col justify-between relative group overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-600/5 rounded-full blur-2xl" />
                    
                    <div>
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-teal-900/50 rounded-xl flex items-center justify-center">
                          <Zap className="h-5 w-5 text-teal-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-serif font-bold text-gray-100">Digital Transformation</h4>
                          <p className="text-xs text-gray-400">Methodological Excellence & Tech</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between text-xs text-gray-400 mb-1 font-semibold">
                            <span>Mobile Data Collection</span>
                            <span className="text-teal-400">SurveyCTO</span>
                          </div>
                          <h5 className="text-4xl font-bold text-gray-100">
                            <CountUp end={30} suffix="%" />
                            <span className="text-sm font-serif text-gray-400 ml-2">Efficiency Gains</span>
                          </h5>
                          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                            By integrating mobile technology, we cut research turnaround times and processing costs by nearly 30%, passing those efficiency gains to our clients while ensuring uncompromised data quality.
                          </p>
                        </div>

                        <div className="border-t border-teal-800/50 pt-6">
                          <h6 className="text-xs font-semibold text-gray-400 mb-2">Technological Standards Used</h6>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-[11px] bg-teal-900/60 text-gray-300 px-2.5 py-1 rounded-md border border-teal-800/50">SurveyCTO</span>
                            <span className="text-[11px] bg-teal-900/60 text-gray-300 px-2.5 py-1 rounded-md border border-teal-800/50">CommCare</span>
                            <span className="text-[11px] bg-teal-900/60 text-gray-300 px-2.5 py-1 rounded-md border border-teal-800/50">Super Voice Recorder</span>
                            <span className="text-[11px] bg-teal-900/60 text-gray-300 px-2.5 py-1 rounded-md border border-teal-800/50">Cloud Data Sync</span>
                            <span className="text-[11px] bg-teal-900/60 text-gray-300 px-2.5 py-1 rounded-md border border-teal-800/50">Advanced QA Filters</span>
                            <span className="text-[11px] bg-teal-900/60 text-gray-300 px-2.5 py-1 rounded-md border border-teal-800/50">Econometrics</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>

      {/* NEW SECTION: Job Creation & Talent Empowerment Engine */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-700 font-bold uppercase tracking-wider text-sm">Socio-Economic Development</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2 mb-4">Job Creation & Capacity Building</h2>
            <p className="text-gray-600 leading-relaxed">
              For 14 years, L4D has actively structured its research operations to serve as a high-caliber employment engine, providing high-quality opportunities for different categories of people across multiple technical levels.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Level/Tier Selector */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Our 3-Tier Job Architecture</h3>
                <p className="text-sm text-gray-500 mb-6">
                  Select a tier below to explore how L4D structures responsibilities, technical training, and professional growth.
                </p>

                <div className="space-y-4">
                  {/* Tier 1: Senior */}
                  <button
                    onClick={() => setActiveLevel('senior')}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start space-x-4 ${
                      activeLevel === 'senior'
                        ? 'border-teal-600 bg-teal-50/50 shadow-sm'
                        : 'border-gray-100 hover:border-gray-200 bg-white'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl ${activeLevel === 'senior' ? 'bg-teal-700 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900 text-sm">Level 1: Senior Level</span>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-teal-700">Advisory</span>
                      </div>
                      <p className="text-xs text-gray-600 font-medium mt-1">Senior Researchers & Consultant Scholars</p>
                    </div>
                  </button>

                  {/* Tier 2: Supervisor */}
                  <button
                    onClick={() => setActiveLevel('supervisor')}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start space-x-4 ${
                      activeLevel === 'supervisor'
                        ? 'border-teal-600 bg-teal-50/50 shadow-sm'
                        : 'border-gray-100 hover:border-gray-200 bg-white'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl ${activeLevel === 'supervisor' ? 'bg-teal-700 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900 text-sm">Level 2: Mid Level</span>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-teal-700">Operations</span>
                      </div>
                      <p className="text-xs text-gray-600 font-medium mt-1">Field Supervisors & Quality Assurance leads</p>
                    </div>
                  </button>

                  {/* Tier 3: Enumerator */}
                  <button
                    onClick={() => setActiveLevel('enumerator')}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start space-x-4 ${
                      activeLevel === 'enumerator'
                        ? 'border-teal-600 bg-teal-50/50 shadow-sm'
                        : 'border-gray-100 hover:border-gray-200 bg-white'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl ${activeLevel === 'enumerator' ? 'bg-teal-700 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <UserCheck className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900 text-sm">Level 3: Technical Level</span>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-teal-700">Technical</span>
                      </div>
                      <p className="text-xs text-gray-600 font-medium mt-1">Survey Enumerators & Primary Field Agents</p>
                    </div>
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Micro-impact Highlight Badge */}
            <Reveal delay={100}>
              <div className="bg-gradient-to-br from-teal-800 to-teal-900 rounded-3xl p-6 text-white shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-2xl">
                    <Zap className="h-6 w-6 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-teal-100">Human Capital Legacy</h4>
                    <p className="text-xs text-white/80 mt-1 leading-relaxed">
                      "While we provide immediate professional opportunities, the technical mastery and hands-on experience we transfer create a lifelong asset."
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Displaying Active Level details in a highly styled container */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="bg-white/60 backdrop-blur-md rounded-3xl border border-gray-100 p-8 shadow-sm min-h-[460px] flex flex-col justify-between relative overflow-hidden">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-tight">
                      {activeLevel === 'senior' && "Senior Research Scholars & Advisory Consultants"}
                      {activeLevel === 'supervisor' && "Field Coordinators & Quality Assurance Supervisors"}
                      {activeLevel === 'enumerator' && "Survey Enumerators & Primary Field Data Agents"}
                    </h3>
                    <div className="inline-flex shrink-0 px-3.5 py-1 bg-teal-50 rounded-full border border-teal-100 text-[11px] font-bold text-teal-800 uppercase tracking-wider">
                      {activeLevel === 'senior' && "Strategic & Advisory"}
                      {activeLevel === 'supervisor' && "Quality Assurance"}
                      {activeLevel === 'enumerator' && "Primary Field Ingestion"}
                    </div>
                  </div>

                  <div className="h-px bg-gray-100 my-5" />

                  {/* Role Description */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                    {activeLevel === 'senior' && (
                      "At this premier level, L4D partners with senior Rwandan scholars, development economists, and technical sector advisors. By hiring local high-level consultants to design complex survey methodologies, create rigorous sampling frames, and lead econometric analyses, we reduce national reliance on external international advisors and build robust homegrown analytical capacity."
                    )}
                    {activeLevel === 'supervisor' && (
                      "Supervisors serve as the operational bridge of L4D research, managing field logistical structures and overseeing quality-control audits. These mid-level roles coordinate field deployments across Rwanda's 30 districts, conduct in-person data auditing, and validate automated digital inputs in real-time, providing scholars with flawless, audit-ready data."
                    )}
                    {activeLevel === 'enumerator' && (
                      "Enumerators represent L4D's primary ground force, engaging directly with households, smallholders, and traders. They are responsible for executing structured face-to-face interviews, translating questionnaires into local dialects, navigating complex topography, and capturing high-quality primary data digitally via the SurveyCTO platform."
                    )}
                  </p>

                  {/* Core Metrics & Responsibilities */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="text-xs font-bold text-teal-800 uppercase tracking-widest mb-2">Core Responsibilities</h4>
                      <ul className="space-y-2 text-xs text-gray-600 font-medium">
                        {activeLevel === 'senior' && (
                          <>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" /> Sampling Frame & Design</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" /> Econometric Modelling (STATA, R)</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" /> Policy Brief Synthesis & Advisory</li>
                          </>
                        )}
                        {activeLevel === 'supervisor' && (
                          <>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" /> Real-time SurveyCTO Monitoring</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" /> Logistics & Roster Audits</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" /> Spot-checks & Team Training</li>
                          </>
                        )}
                        {activeLevel === 'enumerator' && (
                          <>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" /> Direct Household Questionnaires</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" /> Mobile Tablet-based Data Entries</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" /> Qualitative Focus Group Facilitation</li>
                          </>
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-teal-800 uppercase tracking-widest mb-2">Technical Toolsets & Skills</h4>
                      <ul className="space-y-2 text-xs text-gray-600 font-medium">
                        {activeLevel === 'senior' && (
                          <>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" /> STATA, NVivo, SPSS</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" /> Econometric Regression Frameworks</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" /> High-Level Policy Formulations</li>
                          </>
                        )}
                        {activeLevel === 'supervisor' && (
                          <>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" /> Advanced QA Script Filtering</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" /> Multi-District Resource Logistics</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" /> Operational Leadership</li>
                          </>
                        )}
                        {activeLevel === 'enumerator' && (
                          <>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" /> SurveyCTO Mobile Data Forms</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" /> Quantitative Interview Techniques</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" /> Local Dialect Adaptation</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Level Outcomes */}
                <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-gray-100 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <h5 className="text-[11px] uppercase tracking-wider font-bold text-gray-500">Employment Legacy & Trajectory</h5>
                    <p className="text-xs text-gray-800 font-semibold mt-0.5">
                      {activeLevel === 'senior' && "Drives local evidence-based policymaking and fosters high-level academic research consultancies."}
                      {activeLevel === 'supervisor' && "Alumni frequently transition to senior operational project officers in global UN bodies & NGOs."}
                      {activeLevel === 'enumerator' && "Serves as the vital professional launchpad for educated youth entering development careers."}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Categories of People Empowered - Demographic Focus Grid */}
        <div className="mt-24">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-teal-700 font-bold uppercase tracking-wider text-sm">Targeted Demographic Empowerment</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mt-1">Empowering Key Socio-Economic Groups</h3>
              <p className="text-gray-500 text-sm mt-2">
                Our active hiring frameworks target specific, vulnerable, and educated demographics to generate maximum systemic impact.
              </p>
            </div>
          </Reveal>

          {/* Demographic Interactive Selector Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Demographic Card: Educated Youth */}
            <Reveal delay={50}>
              <div 
                onClick={() => setActiveCategory('youth')}
                className={`bg-white rounded-3xl p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full group relative ${
                  activeCategory === 'youth'
                    ? 'border-teal-700 shadow-md ring-1 ring-teal-700'
                    : 'border-gray-100 hover:border-gray-200 shadow-sm'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                    activeCategory === 'youth' ? 'bg-teal-700 text-white' : 'bg-teal-50 text-teal-700'
                  }`}>
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">Educated Youth & Graduates</h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    Fresh university graduates in Rwanda often face critical structural hurdles transitioning to technical research work. L4D's comprehensive research mentorship program bridges this gap.
                  </p>
                </div>

                {activeCategory === 'youth' && (
                  <div className="bg-teal-50 rounded-2xl p-4 border border-teal-100">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-teal-800 block mb-1">Impact Highlight</span>
                    <p className="text-xs text-teal-950 font-semibold leading-normal">
                      Over <span className="font-bold">50+ graduates</span> trained. Alumni have progressed directly to technical analyst and leadership positions in the World Bank, Mastercard Foundation, FAO, and government agencies.
                    </p>
                  </div>
                )}
                {activeCategory !== 'youth' && (
                  <div className="text-xs font-semibold text-teal-700 group-hover:text-teal-800 flex items-center mt-4">
                    View Mentorship Impact <ArrowRight className="ml-1 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </div>
            </Reveal>

            {/* Demographic Card: Women Researchers */}
            <Reveal delay={100}>
              <div 
                onClick={() => setActiveCategory('women')}
                className={`bg-white rounded-3xl p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full group relative ${
                  activeCategory === 'women'
                    ? 'border-teal-700 shadow-md ring-1 ring-teal-700'
                    : 'border-gray-100 hover:border-gray-200 shadow-sm'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                    activeCategory === 'women' ? 'bg-teal-700 text-white' : 'bg-teal-50 text-teal-700'
                  }`}>
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">Women in STEM & Research</h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    Our strict gender inclusivity mandate ensures women are proactively recruited and integrated into field collection rosters, creating high-quality entry points for female economists and social scientists.
                  </p>
                </div>

                {activeCategory === 'women' && (
                  <div className="bg-teal-50 rounded-2xl p-4 border border-teal-100">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-teal-800 block mb-1">Impact Highlight</span>
                    <p className="text-xs text-teal-950 font-semibold leading-normal">
                      A consistent <span className="font-bold">40% gender inclusivity standard</span> is maintained across all operations, facilitating robust professional paths and ensuring findings reflect a wider range of perspectives.
                    </p>
                  </div>
                )}
                {activeCategory !== 'women' && (
                  <div className="text-xs font-semibold text-teal-700 group-hover:text-teal-800 flex items-center mt-4">
                    View Inclusivity Details <ArrowRight className="ml-1 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </div>
            </Reveal>

            {/* Demographic Card: Local Communities */}
            <Reveal delay={150}>
              <div 
                onClick={() => setActiveCategory('community')}
                className={`bg-white rounded-3xl p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full group relative ${
                  activeCategory === 'community'
                    ? 'border-teal-700 shadow-md ring-1 ring-teal-700'
                    : 'border-gray-100 hover:border-gray-200 shadow-sm'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                    activeCategory === 'community' ? 'bg-teal-700 text-white' : 'bg-teal-50 text-teal-700'
                  }`}>
                    <Users className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">Local Governance & Leaders</h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    L4D actively transfers knowledge to local community representatives, village leaders, and district focal points during catchment and agricultural assessments, boosting local governance capacity.
                  </p>
                </div>

                {activeCategory === 'community' && (
                  <div className="bg-teal-50 rounded-2xl p-4 border border-teal-100">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-teal-800 block mb-1">Impact Highlight</span>
                    <p className="text-xs text-teal-950 font-semibold leading-normal">
                      Exposes decentralized administrators to rigorous, evidence-based decision-making methodologies, creating a multiplier effect that elevates local program implementation.
                    </p>
                  </div>
                )}
                {activeCategory !== 'community' && (
                  <div className="text-xs font-semibold text-teal-700 group-hover:text-teal-800 flex items-center mt-4">
                    View Governance Impact <ArrowRight className="ml-1 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Narrative Section: Impact Highlights & Sector Achievements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-teal-700 font-bold uppercase tracking-wider text-sm">Where We Make a Difference</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">Socio-Economic Sector Footprint</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Through strategic policy research and field assessments, L4D has helped transform livelihoods in East Africa.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Agri & Food Security Card */}
          <Reveal delay={50}>
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                <Globe2 className="h-6 w-6 text-teal-700" />
              </div>
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">Agricultural Intensification</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Evaluated core national initiatives including the <span className="font-bold">Land Husbandry Water Harvesting & Hillside Irrigation Project</span> and <span className="font-bold">SAIP II</span> to optimize food security, local agricultural productivity, and market linkages across Rwanda.
              </p>
            </div>
          </Reveal>

          {/* Cross Border Trade Card */}
          <Reveal delay={100}>
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                <UserCheck className="h-6 w-6 text-teal-700" />
              </div>
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">Cross-Border Livelihoods</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pioneered strategic studies examining <span className="font-bold">informal cross-border trade</span> dynamics. Our research influenced crucial policy changes to protect, regularize, and expand the livelihoods of thousands of smallholder cross-border traders.
              </p>
            </div>
          </Reveal>

          {/* Post Pandemic Recovery */}
          <Reveal delay={150}>
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                <LineChart className="h-6 w-6 text-teal-700" />
              </div>
              <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">Emergency & Crisis Advisory</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                During the COVID-19 pandemic, L4D pivoted quickly to analyze supply chain shocks on MSMEs, women, and traders, providing the government and FAO with critical data for national economic recovery planning.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

    </div>
  );
};

export default ImpactPage;
