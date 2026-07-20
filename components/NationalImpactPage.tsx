import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';
import Logo from './Logo';
import { 
  Activity, BookOpen, Globe, GraduationCap, Scale, Sprout, TrendingUp, 
  MapPin, Calendar, FileText, ArrowRight, Download, ArrowLeft,
  Users, Briefcase, Leaf, Heart, Shield, Compass, Handshake, 
  ShieldAlert, Award, FileSpreadsheet, Sparkles
} from 'lucide-react';

interface NationalImpactPageProps {
  onNavigate: (page: string) => void;
}

interface StatItem {
  value: string;
  label: string;
  desc: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
}

interface PolicyItem {
  title: string;
  highlight: string;
  desc: string;
  impact: string;
  icon: React.ComponentType<any>;
  color: 'teal' | 'burgundy';
}

interface BriefItem {
  id: string;
  title: string;
  category: string;
  tagColor: string;
  coverGradient: string;
  desc: string;
  date: string;
  pages: string;
}

interface SectorHighlight {
  title: string;
  desc: string;
}

interface SectorData {
  title: string;
  subtitle: string;
  icon: React.ComponentType<any>;
  highlights: SectorHighlight[];
}

const STATS: StatItem[] = [
  {
    value: "14+",
    label: "Years of Policy Research",
    desc: "Formulating and refining national policies and strategic evaluations since 2012.",
    icon: Award,
    color: "text-teal-400",
    bgColor: "bg-teal-950/60"
  },
  {
    value: "60+",
    label: "Major Research Projects",
    desc: "Rigorous research and strategic advisory projects across Rwanda's development priority areas.",
    icon: FileSpreadsheet,
    color: "text-teal-400",
    bgColor: "bg-teal-950/60"
  },
  {
    value: "5",
    label: "East African Countries Covered",
    desc: "Active regional research in Rwanda, Kenya, Uganda, Burundi, and South Sudan.",
    icon: Globe,
    color: "text-teal-400",
    bgColor: "bg-teal-950/60"
  },
  {
    value: "25+",
    label: "Strategic Global Partners",
    desc: "Collaborating with UN agencies, development partners, and research bodies.",
    icon: Handshake,
    color: "text-teal-400",
    bgColor: "bg-teal-950/60"
  }
];

const POLICIES: PolicyItem[] = [
  {
    title: "Rwanda's National Unity and Civic Engagement Policy",
    highlight: "National-Level Policy Design",
    desc: "L4D supported and co-developed the comprehensive national policy guiding civic engagement, national identity, and unity across Rwanda.",
    impact: "Adopted as Rwanda's primary framework for civic engagement initiatives.",
    icon: Shield,
    color: "teal"
  },
  {
    title: "Long-Term Education Sector Strategy",
    highlight: "Sustainable Education Planning",
    desc: "Contributed strategic advisory inputs and frameworks to develop Rwanda's Long-Term Education Sector Strategy, strengthening quality, access, and lifelong learning.",
    impact: "Influenced national budget allocations for rural teacher capacity building.",
    icon: GraduationCap,
    color: "burgundy"
  },
  {
    title: "Rwanda's National Strategy for Transformation (NST-1)",
    highlight: "Flagship National Evaluation",
    desc: "Provided critical, independent evidence and field studies to assess the Governance Pillar of Rwanda's flagship National Strategy for Transformation.",
    impact: "Delivered direct advisory inputs to the Prime Minister's Office for policy recalibration.",
    icon: TrendingUp,
    color: "teal"
  },
  {
    title: "National E-Commerce Strategy for Agriculture",
    highlight: "Digital Agricultural Evolution",
    desc: "Mapped existing agribusiness interventions and co-authored the national policy blueprint to scale agricultural e-commerce platforms.",
    impact: "Enabled localized market-access solutions for over 50,000 smallholder farmers.",
    icon: Sprout,
    color: "burgundy"
  },
  {
    title: "COVID-19 Economic Recovery Policies",
    highlight: "Crisis Recovery Response",
    desc: "Produced rapid, rigorous research informing recovery strategies for informal cross-border trade, MSMEs, women entrepreneurs, and smallholder farmers across East Africa.",
    impact: "Informed targeted economic stimulus relief packages funded by regional banks.",
    icon: ShieldAlert,
    color: "teal"
  },
  {
    title: "Land Husbandry & Irrigation Evaluation",
    highlight: "World Bank Partnership",
    desc: "Conducted the rigorous baseline and impact evaluations on sustainable land husbandry and hillside irrigation infrastructures.",
    impact: "Evaluated a multi-million dollar program scaling hillside water-harvesting across several districts.",
    icon: Leaf,
    color: "burgundy"
  }
];

const BRIEFS: BriefItem[] = [
  {
    id: "brief-01",
    title: "Agricultural Credit Units & Smallholder Finance",
    category: "Agriculture",
    tagColor: "bg-teal-100 text-teal-800",
    coverGradient: "from-teal-700 via-teal-800 to-teal-900",
    desc: "Formulating frameworks for agricultural credit units and evaluating value-chain financing model implementations across East Africa.",
    date: "June 2026",
    pages: "12 Pages"
  },
  {
    id: "brief-02",
    title: "COVID-19 Cross-Border Trade & MSME Economic Recovery",
    category: "Trade & Recovery",
    tagColor: "bg-teal-100 text-teal-800",
    coverGradient: "from-teal-700 via-teal-800 to-gray-900",
    desc: "Quantitative analysis of pandemic disruption in informal border markets and recommended financial relief measures.",
    date: "May 2026",
    pages: "24 Pages"
  },
  {
    id: "brief-03",
    title: "FinScope Agribusiness: Gender Gap in Rural Credit",
    category: "Gender Equality",
    tagColor: "bg-burgundy-100 text-burgundy-800",
    coverGradient: "from-burgundy-700 via-burgundy-800 to-burgundy-950",
    desc: "Investigating systemic bottlenecks to mobile money, formal lending, and banking penetration for women farmers and micro-entrepreneurs.",
    date: "April 2026",
    pages: "18 Pages"
  },
  {
    id: "brief-04",
    title: "Governance Pillar Evaluation: NST-1 Strategy Lessons",
    category: "National Strategy",
    tagColor: "bg-teal-100 text-teal-800",
    coverGradient: "from-teal-700 via-teal-800 to-gray-900",
    desc: "A comprehensive evaluation of the Governance Pillar of Rwanda's National Strategy for Transformation, highlighting capacity achievements.",
    date: "March 2026",
    pages: "32 Pages"
  }
];

const SECTORS: Record<string, SectorData> = {
  agriculture: {
    title: "Agriculture & Food Security",
    subtitle: "Driving agricultural transformation, farmer commercialization, and value chain resiliency.",
    icon: Sprout,
    highlights: [
      { title: "Improved agricultural productivity programs", desc: "Evaluated nationwide food production initiatives to optimize inputs." },
      { title: "Coffee value chain research", desc: "Assessed smallholder yields and trade bottlenecks to boost exporter pricing." },
      { title: "Food security studies", desc: "Analyzed regional food systems to build climate-proof supply routes." },
      { title: "Farmer commercialization", desc: "Mapped the transition of subsistence smallholders to market-active cooperatives." },
      { title: "Seed system strategy", desc: "Advised on policies for the distribution of high-yield, disease-resistant seeds." },
      { title: "Feed production research", desc: "Analyzed local input markets to support sustainable dairy and poultry sectors." },
      { title: "Irrigation and land husbandry evaluation", desc: "Assessed structural hillside soil protection and water management systems." }
    ]
  },
  education: {
    title: "Education Sector Impact",
    subtitle: "Shaping long-term educational planning, quality metrics, and digital literacy.",
    icon: GraduationCap,
    highlights: [
      { title: "Long-Term Education Sector Strategy", desc: "Co-developed key pillars of Rwanda's educational strategy to foster sustainable quality education." },
      { title: "Digital Literacy in Primary Schools", desc: "Evaluated the integration of digital tools and laptops in rural primary classrooms." },
      { title: "Research Capacity Building", desc: "Delivered institutional training in quantitative and qualitative analysis for educational supervisors." }
    ]
  },
  gender: {
    title: "Gender Equality & Social Inclusion",
    subtitle: "Advancing women's empowerment, financial inclusion, and social equity across policies.",
    icon: Users,
    highlights: [
      { title: "National Gender Equality Assessments", desc: "Conducted high-level studies to assess gender gaps in economic and public leadership." },
      { title: "Women in Agribusiness Solutions", desc: "Identified structural credit barriers and formulated policy roadmaps for women-led agribusinesses." },
      { title: "Women's Empowerment Initiatives", desc: "Evaluated vocational and savings group frameworks designed for marginalized rural women." }
    ]
  },
  youth: {
    title: "Youth Employment & Work Readiness",
    subtitle: "Researching employability trends, job creation, and entrepreneurship ecosystems.",
    icon: Briefcase,
    highlights: [
      { title: "Youth Employability Assessments", desc: "Conducted nationwide studies on skill gaps in the service and digital industries." },
      { title: "Work Readiness Frameworks", desc: "Evaluated the impact of internship and accelerator programs for vocational school graduates." },
      { title: "Youth Entrepreneurship Support", desc: "Informed regional programs supporting startup funding and mentorship pipelines." }
    ]
  },
  climate: {
    title: "Climate & Environment",
    subtitle: "Synthesizing actionable insights for community resilience and natural resource conservation.",
    icon: Globe,
    highlights: [
      { title: "Climate Adaptation & Smallholder Resiliency", desc: "Researched community-led adaptation strategies for areas prone to erratic weather." },
      { title: "Natural Resource Management Research", desc: "Evaluated community forest and land-use programs to protect crucial water catchment zones." },
      { title: "Green Economy & Circularity", desc: "Provided policy recommendations on clean energy transitions and agricultural residue recycling." }
    ]
  }
};

const NationalImpactPage: React.FC<NationalImpactPageProps> = ({ onNavigate }) => {
  const [activeSector, setActiveSector] = useState<string>("agriculture");
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = (id: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
    }, 1500);
  };

  return (
    <div id="national-impact-root" className="pt-24 pb-20 min-h-screen bg-gray-50/50 font-sans">
      
      {/* Header section with floating blur graphics */}
      <div className="bg-gray-50 py-20 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-50 rounded-full filter blur-3xl opacity-30 -translate-y-12"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-burgundy-50 rounded-full filter blur-3xl opacity-30 translate-y-12"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <span className="text-teal-700 font-bold tracking-widest uppercase text-xs mb-3 inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 rounded-full border border-teal-100/50">
              <Activity size={12} /> L4D POLICY INSIGHTS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Impact
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              We translate rigorous, localized evidence and strategic advisory directly into national frameworks. L4D bridges academic excellence with hands-on field research to support transformative policy outcomes.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Stats overlay grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-[#002b24] p-8 rounded-[2.5rem] border border-[#003e34] shadow-xl shadow-teal-950/20 hover:shadow-2xl hover:shadow-teal-900/30 hover:bg-[#00342b] hover:border-teal-700/60 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden group">
                  
                  {/* Target Circle SVG Decorator */}
                  <div className="absolute right-[-30px] bottom-[-30px] w-32 h-32 text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full">
                      <circle cx="50" cy="50" r="15" strokeWidth="1.5" />
                      <circle cx="50" cy="50" r="30" strokeWidth="1.5" />
                      <circle cx="50" cy="50" r="45" strokeWidth="1" />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-teal-950/60 border border-teal-800/40 text-teal-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <IconComponent size={22} />
                      </div>
                      <span className="text-teal-400 font-bold tracking-widest text-[9px] uppercase bg-teal-950/50 px-2.5 py-1 rounded-full border border-teal-900/40">
                        L4D Impact
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 tracking-tight">
                      {stat.value}
                    </h3>
                    <p className="text-teal-300 font-bold text-sm tracking-wide mb-3 group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                  <p className="text-teal-100/60 text-xs leading-relaxed mt-2 relative z-10 font-medium">
                    {stat.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Flagship Policy Contributions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-burgundy-50 border border-burgundy-100 text-burgundy-700 flex items-center justify-center">
                <Award size={24} />
              </div>
              <div>
                <span className="text-burgundy-700 font-bold tracking-widest uppercase text-xs block mb-1">CONCRETE INFLUENCE</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Flagship Policy Contributions</h2>
              </div>
            </div>
            <p className="text-gray-600 text-sm md:text-base max-w-md leading-relaxed mt-4 md:mt-0">
              National strategy evaluations, policy designs, and development frameworks. These demonstrate L4D's direct advisory trust at the highest governance levels.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POLICIES.map((policy, idx) => {
            const IconComp = policy.icon;
            return (
              <Reveal key={idx} delay={idx * 100}>
                <div className="group bg-white/60 backdrop-blur-md hover:backdrop-blur-xl hover:scale-[1.02] rounded-[2.5rem] p-8 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1.5 transition-all duration-500 ${policy.color === "teal" ? "bg-gradient-to-r from-teal-500 to-teal-500 group-hover:h-3" : "bg-gradient-to-r from-burgundy-700 to-burgundy-600 group-hover:h-3"}`} />
                  
                  <div className="pt-2">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${policy.color === "teal" ? "bg-teal-50 text-teal-700" : "bg-burgundy-50 text-burgundy-700"}`}>
                        <IconComp size={18} />
                      </div>
                      <span className={`text-[11px] font-bold tracking-widest uppercase ${policy.color === "teal" ? "text-teal-700" : "text-burgundy-700"}`}>
                        {policy.highlight}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif leading-snug group-hover:text-teal-700 transition-colors">
                      {policy.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-6">
                      {policy.desc}
                    </p>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-md hover:backdrop-blur-xl hover:scale-[1.02] rounded-2xl p-4 border border-gray-100/50">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">MEASURABLE IMPACT</span>
                    <p className="text-gray-900 font-medium text-xs leading-relaxed">
                      {policy.impact}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Focus Notes & Policy Briefs Section */}
      <div id="briefs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center">
                <FileText size={24} />
              </div>
              <div>
                <span className="text-teal-700 font-bold tracking-widest uppercase text-xs block mb-1">KNOWLEDGE HUB</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Focus Notes & Policy Briefs</h2>
              </div>
            </div>
            <div 
              onClick={() => onNavigate('publications')}
              className="flex items-center gap-2 text-teal-700 font-bold text-sm cursor-pointer hover:text-teal-900 transition-colors group mt-4 md:mt-0"
            >
              <span>View all publications</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRIEFS.map((brief, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="bg-white/60 backdrop-blur-md hover:backdrop-blur-xl hover:scale-[1.02] rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden h-full group">
                <div className={`p-6 bg-gradient-to-br ${brief.coverGradient} text-white relative h-48 flex flex-col justify-between overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 opacity-30 pattern-grid-sm"></div>
                  <div className="flex justify-between items-start relative z-10">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${brief.tagColor}`}>
                      {brief.category}
                    </span>
                    <span className="text-[10px] text-white/70 font-mono">{brief.pages}</span>
                  </div>
                  
                  {/* Decorative circular badge */}
                  <div className="absolute right-[-20px] bottom-[-20px] w-28 h-28 text-white/15">
                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full">
                      <circle cx="50" cy="50" r="15" strokeWidth="2" />
                      <circle cx="50" cy="50" r="30" strokeWidth="3" />
                      <circle cx="50" cy="50" r="45" strokeWidth="2" />
                    </svg>
                  </div>

                  <div className="relative z-10 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/10">
                    <FileText size={18} className="text-white" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-400 text-[10px] font-semibold">
                      <Calendar size={12} />
                      <span>{brief.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-base leading-snug group-hover:text-teal-700 transition-colors">
                      {brief.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                      {brief.desc}
                    </p>
                  </div>

                  <button 
                    onClick={() => handleDownload(brief.id)}
                    className={`w-full py-2.5 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border transition-all duration-300 ${downloadingId === brief.id ? "bg-teal-50 text-teal-700 border-teal-200" : "bg-teal-50 text-teal-700 hover:bg-teal-700 hover:text-white border-teal-100 hover:border-transparent hover:shadow-md"}`}
                  >
                    <Download size={14} className={downloadingId === brief.id ? "animate-bounce" : ""} />
                    {downloadingId === brief.id ? "Downloading..." : "Download Brief"}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Sectors Transformed / Thematic Focus Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
        <div className="bg-gradient-to-br from-teal-950 via-teal-900 to-gray-950 text-white rounded-[3rem] p-8 md:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-teal-950/20 pattern-grid-lg opacity-30"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-teal-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

          <div className="relative z-10">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div className="max-w-2xl">
                  <span className="text-teal-400 font-bold tracking-widest uppercase text-xs block mb-3">THEMATIC FOCUS</span>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Sectors Transformed</h2>
                  <p className="text-teal-100/80 leading-relaxed text-sm md:text-base">
                    Click on the sectors below to explore specific policy research, baseline indicators, and program interventions completed across our key thematic focus areas.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2.5 mb-10 border-b border-teal-800/60 pb-6">
              {Object.keys(SECTORS).map((key) => {
                const sector = SECTORS[key];
                const SecIcon = sector.icon;
                const isSelected = activeSector === key;
                return (
                  <button 
                    key={key}
                    onClick={() => setActiveSector(key)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${isSelected ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-xl shadow-teal-950/50 scale-105 border border-teal-400/20" : "bg-teal-900/30 text-teal-200 hover:bg-teal-900/70 border border-teal-800/40"}`}
                  >
                    <SecIcon size={14} />
                    {key === "education" ? "Education" : key === "gender" ? "Gender Equality" : key === "youth" ? "Youth Employment" : key === "climate" ? "Climate & Environment" : "Agriculture"}
                  </button>
                );
              })}
            </div>

            {/* Sector Highlights Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start min-h-[350px]">
              <div className="lg:col-span-5 space-y-4">
                <div className="w-14 h-14 bg-gradient-to-tr from-teal-800 to-teal-700 text-teal-300 rounded-2xl flex items-center justify-center border border-teal-700/50">
                  {React.createElement(SECTORS[activeSector].icon, { size: 28 })}
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                  {SECTORS[activeSector].title}
                </h3>
                <p className="text-teal-100/70 text-sm md:text-base leading-relaxed">
                  {SECTORS[activeSector].subtitle}
                </p>
                <div className="pt-4 hidden lg:block">
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2 text-teal-400 font-bold hover:text-white transition-colors group text-sm"
                  >
                    Request custom briefing on this sector
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 bg-teal-950/40 backdrop-blur-md hover:backdrop-blur-xl hover:scale-[1.02] rounded-3xl p-6 md:p-8 border border-teal-800/50 space-y-4 max-h-[500px] overflow-y-auto">
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block mb-2">KEY INTERVENTIONS & EVALUATIONS</span>
                <div className="divide-y divide-teal-800/40 space-y-4">
                  {SECTORS[activeSector].highlights.map((highlight, idx) => (
                    <div key={idx} className="pt-4 first:pt-0 group/item">
                      <div className="flex gap-3">
                        <Sparkles size={16} className="text-teal-400 shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                        <div>
                          <h4 className="font-bold text-white text-sm group-hover/item:text-teal-300 transition-colors">
                            {highlight.title}
                          </h4>
                          <p className="text-teal-100/60 text-xs leading-relaxed mt-1">
                            {highlight.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default NationalImpactPage;
