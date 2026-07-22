import { 
  BookOpen, 
  BarChart3, 
  Lightbulb, 
  GraduationCap, 
  Leaf, 
  Users, 
  Globe, 
  Sprout, 
  Scale 
} from 'lucide-react';
import { NavItem, Service, FocusArea, Project, Publication, NewsEvent, Client, Stat, Testimonial, Job, TeamMember } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'Who We Are', href: 'about' },
  { 
    label: 'What We Do', 
    href: 'services',
    subItems: [
      { label: 'Policy Research', href: 'service/policy-research' },
      { label: 'Impact Assessment', href: 'service/monitoring-evaluation' },
      { label: 'Policy Advisory', href: 'service/policy-advisory' },
      { label: 'Policy Research Mentorship', href: 'service/research-mentorship' }
    ]
  },
  { label: 'Impact', href: 'impact' },
  { label: 'Publications', href: 'publications' },
  { label: 'News & Events', href: 'news-events' },
  { label: 'Careers', href: 'careers' }
];

export const SERVICES: Service[] = [
  {
    id: 'policy-research',
    title: 'Policy Research',
    description: 'In-depth analysis and evidence-based studies to inform national and regional strategic policy decisions',
    impact: 'Produced key reports adopted by government ministries.',
    icon: BookOpen,
  },
  {
    id: 'monitoring-evaluation',
    title: 'Impact Assessment',
    description: 'Rigorous assessment of development programs to inform efficiency, accountability, and effectiveness.',
    impact: 'Evaluated multi-million dollar projects for international donors.',
    icon: BarChart3,
  },
  {
    id: 'policy-advisory',
    title: 'Policy Advisory',
    description: 'Strategic guidance for stakeholders navigating complex policy and developmental landscapes.',
    impact: 'Advised on the formulation of new agricultural guidelines.',
    icon: Lightbulb,
  },
  {
    id: 'research-mentorship',
    title: 'Research Mentorship',
    description: 'Building capacity for young researchers through hands-on training and policy research.',
    impact: 'Trained over 50 junior policy researchers in advanced methodologies.',
    icon: GraduationCap,
  },
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    title: 'Agri-food Systems',
    description: 'Analyzing value chains, market dynamics, and sustainable farming practices from food systems perspective.',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Rural Transformation',
    description: 'Assessing interventions that improve socio-economic conditions in rural communities.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Environment & Climate Change',
    description: 'Researching resilient strategies for vulnerable populations facing environmental shifts.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Gender & Social Inclusion',
    description: 'Ensuring equitable policy outcomes through gender-disaggregated analysis and inclusive methodologies.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800',
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Design a Regional Agrifood Systems Investment Plan (RASIP) for the East African Community (EAC) for 2026–2035',
    category: 'Agri-food Systems',
    client: 'Alliance for a Green Revolution in Africa (AGRA)',
    description: 'Coordinating and designing the high-level regional agrifood investment plan for 2026-2035 across East African Community member states to accelerate sustainable agricultural transformation, climate adaptation, and trade integration.',
    status: 'Completed',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Assessment on Decentralization of Small-Scale Irrigation Technology (SSIT) In Rwanda for TWIYUBAKIRE - ENGAGE PROJECT',
    category: 'Agri-food Systems',
    client: "CCOAIB",
    description: 'Evaluating the decentralization frameworks of small-scale irrigation technologies (SSIT) across Rwanda to identify key operational bottlenecks and provide evidence-based recommendations to enhance local ownership and irrigation efficiency.',
    status: 'Completed',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Impact Monitoring and Evaluation of Development Initiatives',
    category: 'Rural Transformation',
    client: 'Mastercard Foundation',
    description: 'Ongoing longitudinal impact monitoring and strategic evaluations of regional youth empowerment and job creation interventions, assessing systemic livelihood shifts and program attribution.',
    status: 'Ongoing',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Agricultural Land Market Policy Formulation in Rwanda',
    category: 'Agri-food Systems',
    client: 'Alliance for a Green Revolution in Africa (AGRA)',
    description: 'Critical policy research examining land market dynamics, land lease constraints, and agricultural productivity in Rwanda to establish a robust and inclusive land utilization guidelines framework.',
    status: 'Ongoing',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    title: 'Sustainable Agricultural Intensification and Food Security Project (SAIP II)',
    category: 'Agri-food Systems',
    client: 'Rwanda Agriculture And Animal Resources Development Board (RAB)',
    description: 'Conducting baseline, midline, and endline evaluations of Rwanda\'s core national agricultural intensification program, focusing on crop yield, market linkages, and household nutritional status.',
    status: 'Completed',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    title: 'Midline Survey for the Sustainable Agricultural Productivity and Market Linkage Project (SAPMP)',
    category: 'Agri-food Systems',
    client: 'RAB & Korea International Cooperation Agency (KOICA)',
    description: 'Rigorous quantitative and qualitative midline survey evaluating irrigation infrastructure, horticultural value chains, and marketing channels in target districts.',
    status: 'Completed',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '7',
    title: 'Formative Qualitative Research: Barriers and Opportunities for Youth in Agricultural Value Chains',
    category: 'Gender & Social Inclusion',
    client: 'International Food Policy Research Institute (IFPRI)',
    description: 'In-depth research identifying socio-economic barriers and entry opportunities for young women and young men in high-value agricultural value chains across multiple provinces in Rwanda.',
    status: 'Completed',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '8',
    title: 'Contextualizing Food Loss and Waste in Africa: Case of Rwanda',
    category: 'Agri-food Systems',
    client: 'World Resources Institute (WRI)',
    description: 'A comprehensive multi-dimensional analysis of food loss and waste (FLW) across four major value chains in Rwanda: maize, cassava, tomatoes, and coffee, using direct measurement and survey methodologies.',
    status: 'Completed',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '9',
    title: 'Developing Long Term Education Sector Strategy for Enhancing Sustainable Quality Education',
    category: 'Education',
    client: 'Ministry of Education (MINEDUC)',
    description: 'Formulating a comprehensive, future-proof strategic roadmap for the Ministry of Education to strengthen instructional quality, teacher professional development, and digital integration across Rwandan schools.',
    status: 'Completed',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '10',
    title: 'Socio-economic and Livelihoods Assessment in Mukungwa and Akagera Catchments',
    category: 'Environment & Climate Change',
    client: 'International Union for Conservation of Nature (IUCN)',
    description: 'Baseline socio-economic mapping and livelihood vulnerability assessments to guide ecosystem-based adaptation and integrated water resource management around key catchments.',
    status: 'Completed',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '11',
    title: 'Development of Rwanda\'s National Unit and Civic Engagement Policy',
    category: 'Rural Transformation',
    client: 'MINUBUMWE',
    description: 'Facilitating research, national consultations, and draft policy framing to deliver a comprehensive policy guiding national unity, social cohesion, and active citizenship.',
    status: 'Completed',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '12',
    title: 'Rapid Appraisals on the Impacts of COVID-19 on MSMEs in the Agro-Food Sector',
    category: 'Rural Transformation',
    client: 'FAO Representation in Ethiopia',
    description: 'Multicountry assessment analyzing COVID-19 related market shocks and supply chain disruptions for micro, small, and medium enterprises (MSMEs) in Burundi, Kenya, Rwanda, South Sudan, and Uganda.',
    status: 'Completed',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1542223175-7582dd7ee9f5?auto=format&fit=crop&q=80&w=800'
  }
];

export const CLIENTS: Client[] = [
  {
    name: 'DOT Rwanda',
    logo: 'https://lh3.googleusercontent.com/d/1irDNc0D5xecAMVdDM1j-yYLKiSmBIUpZ'
  },
  {
    name: 'Mastercard Foundation',
    logo: 'https://lh3.googleusercontent.com/d/1rJwR1qIxjQe8PKkVMNReARlp3LY-01V8'
  },
  {
    name: 'MINAGRI',
    logo: 'https://lh3.googleusercontent.com/d/1HNRnuUniEuZlZgxpJE0xf_VTVFIzs0bU'
  },
  {
    name: 'Ministries',
    logo: 'https://lh3.googleusercontent.com/d/1Lb0wtMXRePoeV_yBDv6-Grg6hyN3RpI7'
  },
  {
    name: 'NAEB',
    logo: 'https://lh3.googleusercontent.com/d/1j1mmdoKZafU-_EFA4oz2J-Lp1AnUREU1'
  },
  {
    name: 'RAB',
    logo: 'https://lh3.googleusercontent.com/d/1pj04BXKJ7en7Qvp3i91yKcDajrBpuzzy'
  },
  {
    name: 'RTI',
    logo: 'https://lh3.googleusercontent.com/d/1GkyFZqIRrmXw66I9tDGp_wYCFlNmq_s9'
  },
  {
    name: 'SNV',
    logo: 'https://lh3.googleusercontent.com/d/1ixX9b01j9A1u9nZysMaqMx5dfNyTiaXF'
  },
  {
    name: 'Trademark',
    logo: 'https://lh3.googleusercontent.com/d/1yjY_MvNI-W8wroTs2ov-c4Z7OR0DltCp'
  },
  {
    name: 'UN Women',
    logo: 'https://lh3.googleusercontent.com/d/1E87NEY2tMGgFqUjSCk9x9B93H_peDPaP'
  },
  {
    name: 'University of Rwanda',
    logo: 'https://lh3.googleusercontent.com/d/1HnvS9xgaj5Pugi8_VwgvhePAur1PhX-m'
  },
  {
    name: 'Urwego Finance',
    logo: 'https://lh3.googleusercontent.com/d/1_O1HeJGeyy_uhb9nQZagZNkbrK1nIeA8'
  },
  {
    name: 'Women For Women International',
    logo: 'https://lh3.googleusercontent.com/d/1deXGC8pPxMHF2MGGEj0U0Vkpfqrr6FmI'
  },
  {
    name: 'FAO',
    logo: 'https://lh3.googleusercontent.com/d/1XupACUJmY2EUYIuis1Rp8gEyzGcQNL-r'
  },
  {
    name: 'World Bank',
    logo: 'https://lh3.googleusercontent.com/d/1Y0EguvtDeSe9_D4DjDUfKVIMEEJyl_vJ'
  },
  {
    name: 'USAID',
    logo: 'https://lh3.googleusercontent.com/d/153gEk5jxMnez80kiSkgJQwLO6kUXtNsd'
  },
  {
    name: 'UNDP',
    logo: 'https://lh3.googleusercontent.com/d/1gezW2xAyHMesrR3lrahjywRR2W3LlOP2'
  },
  {
    name: 'European Union',
    logo: 'https://lh3.googleusercontent.com/d/1y-eFqaDvaTT_lYA5xXoPx5F0MFW6RDGc'
  },
  {
    name: 'GIZ',
    logo: 'https://lh3.googleusercontent.com/d/1WpPRZVvvHcYQxsqrRnY6q3D8ppgsI6Nh'
  },
  {
    name: 'IFPRI',
    logo: 'https://lh3.googleusercontent.com/d/1glB43dFgwNuoqXeIqIX6Lt4RJtkJ_lqA'
  },
  {
    name: 'KOICA',
    logo: 'https://lh3.googleusercontent.com/d/1jSFBS8bM-qYp1rhgdv4yfQgVY_H6zZEv'
  },
  {
    name: 'GMO',
    logo: 'https://lh3.googleusercontent.com/d/15iYDCMzQm5QAQDOJYe0j02vLTJw97ONd'
  },
  {
    name: 'Good Neighbors',
    logo: 'https://lh3.googleusercontent.com/d/1nkP5GZp2x6H4Bg38p5_G2ppSkkuXL6Qg'
  },
  {
    name: 'IUCN',
    logo: 'https://lh3.googleusercontent.com/d/1Ptf_32OZDRXC_LZHWTA6hvmxSBO44Eqq'
  },
  {
    name: 'JICA',
    logo: 'https://lh3.googleusercontent.com/d/13_kZoFpSnpSxSr6tDg7FxSrPmbKdQ4wm'
  },
  {
    name: 'WRI',
    logo: 'https://lh3.googleusercontent.com/d/1HXOjGqUMEcvQr3BSsZRVKTXNxnfjs2l0'
  },
  {
    name: 'MINICOM',
    logo: 'https://lh3.googleusercontent.com/d/15rlBHijykIqPW9MaGgYQ4mntqIX1-SiY'
  },
  {
    name: 'MINEDUC',
    logo: 'https://lh3.googleusercontent.com/d/1WB0888fN67U23kY6M3mPjurQjNLqXOBV'
  },
  {
    name: 'African Development Fund',
    logo: 'https://lh3.googleusercontent.com/d/1LVO1LtvsOnLQf11IXFm68HDblOAT3v1E'
  },
  {
    name: 'World Vision',
    logo: 'https://lh3.googleusercontent.com/d/1lD2XP05H__pWWbl37d6PvnKOeuHpRykr'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: 'Design of Regional Agrifood Systems Investment Plan (RASIP) for the EAC: 2026–2035',
    type: 'Report',
    date: 'June 2026',
    pdfUrl: 'https://pdfobject.com/pdf/sample.pdf'
  },
  {
    title: 'Decentralization of Small-Scale Irrigation Technology (SSIT) in Rwanda: Policy and Practical Insights',
    type: 'Report',
    date: 'March 2026',
    pdfUrl: 'https://pdfobject.com/pdf/sample.pdf'
  },
  {
    title: 'Formative Qualitative Study on Youth Barriers and Opportunities in Rwandan Agriculture Value Chains',
    type: 'Working Paper',
    date: 'March 2025',
    pdfUrl: 'https://pdfobject.com/pdf/sample.pdf'
  },
  {
    title: 'Contextualizing Food Loss and Waste in Rwanda: Maize, Cassava, Tomatoes, and Coffee Value Chains',
    type: 'Report',
    date: 'April 2024',
    pdfUrl: 'https://pdfobject.com/pdf/sample.pdf'
  },
  {
    title: 'Developing Long Term Education Sector Strategy for Sustainable Quality Education in Rwanda',
    type: 'Report',
    date: 'October 2023',
    pdfUrl: 'https://pdfobject.com/pdf/sample.pdf'
  },
  {
    title: 'Gender Integration in Seed Systems Strategy: Policy and Structural Frameworks',
    type: 'Policy Brief',
    date: 'August 2022',
    pdfUrl: 'https://pdfobject.com/pdf/sample.pdf'
  },
  {
    title: 'Ecosystem-based Climate Change Adaptation and Livelihoods in Mukungwa and Akagera catchments',
    type: 'Working Paper',
    date: 'December 2021',
    pdfUrl: 'https://pdfobject.com/pdf/sample.pdf'
  },
  {
    title: 'The State of Gender Equality and Women Empowerment in Rwanda',
    type: 'Policy Brief',
    date: 'February 2018',
    pdfUrl: 'https://pdfobject.com/pdf/sample.pdf'
  }
];

export const NEWS_EVENTS: NewsEvent[] = [
  {
    id: 'news-1',
    title: 'L4D Leads Strategic Formulation of Regional Agrifood Systems Investment Plan (RASIP)',
    type: 'News',
    date: 'June 2026',
    summary: 'A landmark assignment from AGRA to establish the high-level regional agrifood investment plan for the East African Community (2026-2035).',
    content: 'We are proud to share that High Lands Center of Leadership for Development (L4D) has been entrusted with the development of the Regional Agrifood Systems Investment Plan (RASIP) for the East African Community (EAC). Supported by the Alliance for a Green Revolution in Africa (AGRA), this plan establishes strategic directions, policies, and investment priorities across partner states for 2026–2035. This reinforces L4D\'s reputation as a premiere regional center of excellence.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'news-2',
    title: 'Decentralization of Small-Scale Irrigation Technology Study Published',
    type: 'News',
    date: 'March 2026',
    summary: 'Our comprehensive research assessment on SSIT adoption and local frameworks in Rwanda.',
    content: 'Commissioned by CCOAIB under the TWIYUBAKIRE-ENGAGE Project, L4D has completed and released its definitive evaluation on the adoption and decentralization of Small-Scale Irrigation Technology (SSIT) in Rwanda. The study details localized institutional bottlenecks, operational challenges, and the potential for public-private partnerships to enhance climate-resilient water management for smallholders.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'event-1',
    title: 'Annual Policy Research and Mentorship Forum 2026',
    type: 'Event',
    date: 'September 15-16, 2026',
    summary: 'Join us for two days of rigorous policy dialogue, research mentorship highlights, and development discourse.',
    content: 'The Annual Policy Research and Mentorship Forum brings together leading agricultural economists, environmental scientists, gender experts, and policy makers from across East Africa. This year\'s dialogue focuses on regional food systems integration, green economy transitions, and active citizenship frameworks. A dedicated session will celebrate the achievements of our research mentorship graduates.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I joined L4D in 2013 as an intern and later became a Policy Research Assistant under Prof. Alfred Bizoza’s mentorship. His guidance fueled my passion for policy research, enhanced my skills in data and field management, and inspired me to pursue postgraduate studies in Agricultural and Applied Economics.",
    name: "Mugabe Bonaventure",
    title: "Field Supervisor"
  },
  {
    quote: "My journey at L4D under Prof. Alfred Bizoza’s leadership has been truly transformative. His mentorship and commitment to excellence inspired my growth, sharpened my policy research and critical thinking skills, and nurtured curiosity and innovation that continue to guide my professional and personal development.",
    name: "Simeon Sibomana",
    title: "Field Supervisor"
  },
  {
    quote: "I joined L4D in 2013 as an intern, contributing to policy research and proposal writing under Prof. Alfred Bizoza’s mentorship. His guidance and the team’s support strengthened my confidence and skills, leading to my promotion to Policy Research Fellow in 2018 and paving the way for my doctoral studies in 2020.",
    name: "Nkurikiye Jean Bosco",
    title: "Policy Research Fellow/Data Analyst"
  },
  {
    quote: "After earning my Bachelor’s degree in 2013, I joined L4D as one of the pioneer mentees under Prof. Alfred Bizoza. The Centre’s mentorship has shaped my professional growth. Now as a Policy Research Fellow and Data Manager, I lead policy research design, data management, analysis, and policy evaluation with a dynamic, value-driven team.",
    name: "Byishimo Patrick",
    title: "Policy Research Fellow/Data Manager"
  },
  {
    quote: "I first met Prof. Alfred in 2008 during his PhD policy research, where he shared his vision for L4D. Since joining the Centre, I have grown professionally through policy research and mentorship, gaining valuable skills in leadership, teamwork, and analysis while contributing to Rwanda’s sustainable development initiatives.",
    name: "Dr. Jules Rutebuka",
    title: "Senior Policy Research Fellow/GIS Expert"
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Prof. Alfred R. Bizoza",
    role: "Founder & Chair",
    bio: "Renowned expert in agricultural economics and policy research with decades of experience guiding evidence-based development.",
    image: "https://lh3.googleusercontent.com/d/1EiByhvCUjkqYeHLUWL6Swf8JVzTr8TiY",
    type: "Board",
    focusArea: ["Agricultural Economics", "Policy Research", "Institutional Development"]
  },
  {
    name: "Marie Chantal Rwakazina",
    role: "Managing Director",
    bio: "Experienced executive driving operational excellence and strategic partnerships to strengthen credible development initiatives.",
    image: "https://ui-avatars.com/api/?name=Marie+Chantal+Rwakazina&background=115e59&color=fff&size=512",
    type: "Board",
    researchFocus: ["Strategic Management", "Partnerships", "Operational Excellence"]
  },
  {
    name: "Dr. Teferi Tensay Mequaninte",
    role: "Head of Policy Research",
    bio: "Accomplished policy researcher leading comprehensive studies in socio-economic development and guiding policy formulation.",
    image: "https://ui-avatars.com/api/?name=Teferi+Tensay+Mequaninte&background=115e59&color=fff&size=512",
    type: "Staff",
    researchFocus: ["Socio-economic Development", "Policy Formulation", "Quantitative Analysis"]
  },
  {
    name: "Patrick Byishimo",
    role: "Research Fellow/Data Manager",
    bio: "Specializes in data management and quantitative policy research, ensuring data integrity and robust analysis for policy formulation.",
    image: "https://ui-avatars.com/api/?name=Patrick+Byishimo&background=115e59&color=fff&size=512",
    type: "Staff",
    researchFocus: ["Data Management", "Quantitative Methods"]
  },
  {
    name: "Jean Bosco Nkurikiye",
    role: "Research Fellow/Data Analyst",
    bio: "Skilled data analyst with a deep understanding of statistical methods and their application in developmental policy research.",
    image: "/team/jean_bosco_gen_43.jpg",
    type: "Staff",
    researchFocus: ["Statistical Analysis", "Econometrics"]
  },
  {
    name: "Yvette Kagoyire",
    role: "Research Operations Manager",
    bio: "Coordinates policy research activities, manages logistics, and ensures the smooth execution of field operations.",
    image: "https://ui-avatars.com/api/?name=Yvette+Kagoyire&background=115e59&color=fff&size=512",
    type: "Staff",
    researchFocus: ["Field Operations", "Logistics"]
  },
  {
    name: "Divine Irakoze",
    role: "Finance & HR",
    bio: "Manages financial planning and human resources, supporting the administrative backbone of the Centre.",
    image: "/team/divine_gen_43.jpg",
    type: "Staff",
    researchFocus: ["Financial Planning", "Human Resources"]
  },
  {
    name: "Belise Kangabe Hategeka",
    role: "Impact Analyst",
    bio: "Focuses on monitoring and evaluating the impact of policy research findings and developmental interventions.",
    image: "https://ui-avatars.com/api/?name=Belise+Kangabe+Hategeka&background=115e59&color=fff&size=512",
    type: "Staff",
    researchFocus: ["Impact Evaluation", "M&E"]
  },
  {
    name: "Monique Abimpaye",
    role: "Evaluation Coordinator",
    bio: "Leads coordination for project evaluations to ensure alignment with expected outcomes and quality standards.",
    image: "https://ui-avatars.com/api/?name=Monique+Abimpaye&background=115e59&color=fff&size=512",
    type: "Staff",
    researchFocus: ["Project Evaluation", "Quality Assurance"]
  },
  {
    name: "Iris Landi",
    role: "Internal - Research and Knowledge Management Officer",
    bio: "Brings extensive expertise in gender studies, promoting inclusive and equitable policy recommendations.",
    image: "/team/iris_gen_43.jpg",
    type: "Consultant",
    researchFocus: ["Gender Studies", "Social Inclusion"]
  },
  {
    name: "Richard Ngabo",
    role: "IT & Comms Officer",
    bio: "Drives internal IT infrastructure and leads communication strategies to amplify the Centre's policy research impact.",
    image: "/team/richard_gen_43.jpg",
    type: "Staff",
    researchFocus: ["IT Infrastructure", "Science Communication"]
  },
  {
    name: "Simeon Sibomana",
    role: "Research Assistant/Field Supervisor",
    bio: "Supervises field operations and assists in comprehensive data collection strategies for ongoing projects.",
    image: "https://ui-avatars.com/api/?name=Simeon+Sibomana&background=115e59&color=fff&size=512",
    type: "Staff",
    researchFocus: ["Data Collection", "Field Supervision"]
  },
  {
    name: "Bridget Vuguziga",
    role: "Research Assistant/Field Supervisor",
    bio: "Plays a vital role in fieldwork, providing oversight and contributing to crucial qualitative and quantitative assessments.",
    image: "/team/bridget_gen_43.jpg",
    type: "Staff",
    researchFocus: ["Qualitative Assessment", "Field Supervision"]
  },
  {
    name: "Dusabe Ruth",
    role: "Research Assistant/Field Supervisor",
    bio: "Engages in rigorous field monitoring, ensuring data fidelity and bridging community insights with policy research objectives.",
    image: "https://ui-avatars.com/api/?name=Dusabe+Ruth&background=115e59&color=fff&size=512",
    type: "Staff",
    researchFocus: ["Field Monitoring", "Community Engagement"]
  },
  {
    name: "Bonaventure Mugabe",
    role: "Research Assistant/Field Supervisor",
    bio: "Brings deep contextual knowledge to field supervision, guaranteeing the accurate capture of localized policy research inputs.",
    image: "https://ui-avatars.com/api/?name=Bonaventure+Mugabe&background=115e59&color=fff&size=512",
    type: "Staff",
    researchFocus: ["Localized Research", "Data Capture"]
  },
  {
    name: "Kevin Kimenyi",
    role: "Data Analyst",
    bio: "Skilled data analyst contributing to the interpretation of quantitative and qualitative data.",
    image: "/team/kevin_gen_43.jpg",
    type: "Staff",
    researchFocus: ["Data Analysis"]
  },
  {
    name: "Harrison Manyumwa",
    role: "Monitoring, Evaluation, and Learning (MEL) Coordinator",
    bio: "Coordinates monitoring, evaluation, and learning to ensure project effectiveness and continuous improvement.",
    image: "https://ui-avatars.com/api/?name=Harrison+Manyumwa&background=115e59&color=fff&size=512",
    type: "Staff",
    researchFocus: ["Monitoring", "Evaluation"]
  }
];

export const CONTACT_INFO = {
  address: 'KN 14 Avenue 45, Salesians Don Bosco Compound, Office #08, Kimihurura, Gasabo, Kigali-Rwanda',
  email: 'info@hlcl4d.rw',
  website: 'www.hlcl4d.rw',
  phone: '+250 788 000 000', // Placeholder
};

export const JOBS: Job[] = [
  {
    id: '1',
    title: 'Quantitative Field Enumerators',
    type: 'Contract',
    location: 'Various locations, Rwanda',
    department: 'Data Collection',
    description: 'We are seeking motivated Quantitative Field Enumerators to conduct structured interviews and administer surveys for our ongoing policy research projects. You will be responsible for accurate data entry using electronic devices while maintaining policy research ethics.',
    sector: 'Field Policy Research',
    educationLevel: 'Diploma',
    desiredExperience: '1 to 3 years',
    contractType: 'Temporary',
    postedDate: '01-06-2026',
    deadline: '14-06-2026 at 11:59 PM',
    positions: 100,
    requirements: [
      'Bachelor’s degree in Social Sciences, Statistics, Economics, or related fields.',
      'Prior experience in quantitative data collection and survey administration.',
      'Familiarity with electronic data collection tools (e.g., ODK, SurveyCTO, Qualtrics).',
      'Fluency in English and Kinyarwanda; strong communication skills.'
    ]
  },
  {
    id: '2',
    title: 'Qualitative Field Enumerators (Note-Takers)',
    type: 'Contract',
    location: 'Various locations, Rwanda',
    department: 'Data Collection',
    description: 'We are looking for Detail-oriented Qualitative Field Enumerators to serve as Note-Takers during Focus Group Discussions (FGDs) and Key Informant Interviews (KIIs). You will accurately record sessions, capture non-verbal cues, and assist with transcriptions.',
    sector: 'Field Policy Research',
    educationLevel: 'Bachelor',
    desiredExperience: '5+ years',
    contractType: 'Temporary',
    postedDate: '17-06-2026',
    deadline: '30-06-2026 at 11:59 PM',
    positions: 20,
    requirements: [
      'Bachelor’s degree in Anthropology, Sociology, or related qualitative fields.',
      'Excellent listening and fast, accurate typing/note-taking skills.',
      'Experience observing and transcribing interviews and focus groups.',
      'Fluency in English and Kinyarwanda.'
    ]
  },
  {
    id: '3',
    title: 'Qualitative Field Enumerators (Facilitators)',
    type: 'Contract',
    location: 'Various locations, Rwanda',
    department: 'Data Collection',
    description: 'We are hiring Qualitative Field Enumerators to act as Facilitators for Focus Group Discussions (FGDs) and Key Informant Interviews (KIIs). You will guide conversations, probe for in-depth insights, and ensure all policy research objectives are covered.',
    sector: 'Field Policy Research',
    educationLevel: 'Bachelor',
    desiredExperience: '5+ years',
    contractType: 'Temporary',
    postedDate: '17-06-2026',
    deadline: '30-06-2026 at 11:59 PM',
    positions: 20,
    requirements: [
      'Bachelor’s or Master’s degree in Social Sciences or related disciplines.',
      'Proven experience facilitating FGDs and conducting qualitative interviews.',
      'Strong interpersonal skills and ability to build rapport with diverse communities.',
      'Fluency in English and Kinyarwanda.'
    ]
  },
  {
    id: '4',
    title: 'Field Supervisors',
    type: 'Contract',
    location: 'Various locations, Rwanda',
    department: 'Field Operations',
    description: 'We are seeking experienced Field Supervisors to oversee data collection activities across various sites. You will manage teams of enumerators, ensure data quality control, handle logistics, and report daily progress to the policy research coordination team.',
    sector: 'Field Policy Research',
    educationLevel: 'Bachelor',
    desiredExperience: '5+ years',
    contractType: 'Temporary',
    postedDate: '01-06-2026',
    deadline: '30-06-2026 at 11:59 PM',
    positions: 50,
    requirements: [
      'Degree in Social Sciences, Project Management, or related fields.',
      'Extensive experience in field data collection and managing enumerator teams.',
      'Strong leadership, organizational, and problem-solving skills.',
      'Proficiency with data monitoring tools and quality assurance protocols.',
      'Fluency in English and Kinyarwanda.'
    ]
  }
];