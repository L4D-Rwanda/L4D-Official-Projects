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
      { label: 'Monitoring & Evaluation', href: 'service/monitoring-evaluation' },
      { label: 'Policy Advisory', href: 'service/policy-advisory' },
      { label: 'Research Mentorship', href: 'service/research-mentorship' }
    ]
  },
  { 
    label: 'Impact', 
    href: 'impact',
    subItems: [
      { label: 'Projects', href: 'projects' },
      { label: 'Programs & Partnerships', href: 'programs' }
    ]
  },
  { label: 'Publications', href: 'publications' },
  { label: 'News & Events', href: 'news-events' },
  { label: 'Careers', href: 'careers' }
];

export const SERVICES: Service[] = [
  {
    id: 'policy-research',
    title: 'Policy Research',
    description: 'In-depth analysis and evidence-based studies to inform national and regional policy frameworks.',
    impact: 'Produced key reports adopted by government ministries.',
    icon: BookOpen,
  },
  {
    id: 'monitoring-evaluation',
    title: 'Monitoring & Evaluation',
    description: 'Rigorous assessment of development programs to ensure efficiency, accountability, and effectiveness.',
    impact: 'Evaluated multi-million dollar projects for international donors.',
    icon: BarChart3,
  },
  {
    id: 'policy-advisory',
    title: 'Policy Advisory',
    description: 'Strategic guidance for stakeholders navigating complex regulatory and developmental landscapes.',
    impact: 'Advised on the formulation of new agricultural guidelines.',
    icon: Lightbulb,
  },
  {
    id: 'research-mentorship',
    title: 'Research Mentorship',
    description: 'Building capacity for young researchers through hands-on training and academic guidance.',
    impact: 'Trained over 50 junior researchers in advanced methodologies.',
    icon: GraduationCap,
  },
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    title: 'Agriculture',
    description: 'Sustainable farming practices, food security, and value chain analysis.',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Climate Change',
    description: 'Adaptation strategies, environmental resilience, and green economy.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Gender',
    description: 'Inclusive development, women\'s empowerment, and social equity.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Environment',
    description: 'Conservation, biodiversity, and natural resource management.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Socioeconomic Dev',
    description: 'Poverty reduction, economic policy, and community livelihoods.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Education',
    description: 'Policy reform, curriculum development, and access to quality learning.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Agricultural Value Chain Analysis',
    category: 'Agriculture',
    client: 'Ministry of Agriculture',
    description: 'A comprehensive study on the bottlenecks in the maize value chain in Eastern Province, aimed at improving farmer incomes and market access through data-driven policy interventions.',
    status: 'Completed',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Climate Resilience in Rural Communities',
    category: 'Climate Change',
    client: 'UN Environment',
    description: 'Developing adaptation strategies for smallholder farmers facing changing weather patterns, focusing on drought-resistant crops and water management techniques.',
    status: 'Ongoing',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Women in Agribusiness',
    category: 'Gender',
    client: 'UN Women',
    description: 'Assessment of financial inclusion barriers for women-led agribusinesses. The project delivered a roadmap for increasing credit access for female entrepreneurs.',
    status: 'Completed',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1590664216212-62e7637d1606?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Biodiversity Conservation Framework',
    category: 'Environment',
    client: 'Local NGO',
    description: 'Formulating a framework for community-led conservation efforts in protected areas, balancing ecological preservation with local economic needs.',
    status: 'Completed',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    title: 'Digital Literacy in Primary Schools',
    category: 'Education',
    client: 'Mastercard Foundation',
    description: 'Evaluating the impact of the One Laptop Per Child program on learning outcomes across 50 rural schools, providing recommendations for curriculum integration.',
    status: 'Ongoing',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    title: 'Urban Poverty Assessment',
    category: 'Socioeconomic Development',
    client: 'World Bank',
    description: 'Surveying urban households to understand post-pandemic economic recovery, focusing on informal sector workers and social safety nets.',
    status: 'Completed',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef902a?auto=format&fit=crop&q=80&w=800'
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
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/The_World_Bank_logo.svg/512px-The_World_Bank_logo.svg.png'
  },
  {
    name: 'USAID',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/USAID-Identity.svg/512px-USAID-Identity.svg.png'
  },
  {
    name: 'UNDP',
    logo: 'https://lh3.googleusercontent.com/d/1gezW2xAyHMesrR3lrahjywRR2W3LlOP2'
  },
  {
    name: 'European Union',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/512px-Flag_of_Europe.svg.png'
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
    title: 'Agricultural Resilience in East Africa: 2024 Report',
    type: 'Report',
    date: 'March 2024',
    pdfUrl: 'https://pdfobject.com/pdf/sample.pdf'
  },
  {
    title: 'Gender Mainstreaming in Climate Policy',
    type: 'Policy Brief',
    date: 'January 2024',
    pdfUrl: 'https://pdfobject.com/pdf/sample.pdf'
  },
  {
    title: 'Socioeconomic Impacts of Digital Education',
    type: 'Working Paper',
    date: 'November 2023',
    pdfUrl: 'https://pdfobject.com/pdf/sample.pdf'
  },
  {
    title: 'Sustainable Urbanization in Kigali',
    type: 'Report',
    date: 'September 2023',
    pdfUrl: 'https://pdfobject.com/pdf/sample.pdf'
  },
  {
    title: 'Youth Employment Trends 2023',
    type: 'Policy Brief',
    date: 'July 2023',
    pdfUrl: 'https://pdfobject.com/pdf/sample.pdf'
  }
];

export const NEWS_EVENTS: NewsEvent[] = [
  {
    id: 'news-1',
    title: 'L4D Launches New Mentorship Initiative',
    type: 'News',
    date: 'February 2024',
    summary: 'A new comprehensive mentorship program aimed at building capacity for young researchers in Rwanda.',
    content: 'We are thrilled to announce the launch of our new Mentorship Initiative. This program is designed to pair junior researchers with experienced professionals within our organization, fostering a culture of continuous learning and development. Over the next six months, participants will engage in hands-on research projects, receive personalized guidance, and attend tailored workshops focusing on advanced methodologies and data analysis techniques.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'news-2',
    title: 'Rwanda Economic Update: Q4 Analysis',
    type: 'News',
    date: 'December 2023',
    summary: 'A summary of the recent economic update and key takeaways for policymakers.',
    content: 'Our latest analysis of the Rwandan economy in Q4 highlights significant growth in the agricultural sector, driven by recent policy interventions. The report underscores the need for continued investment in rural infrastructure to sustain this momentum. Furthermore, it identifies emerging challenges in the informal sector and recommends targeted support measures to enhance resilience among vulnerable populations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'event-1',
    title: 'Annual Policy Research Conference 2024',
    type: 'Event',
    date: 'May 15-16, 2024',
    summary: 'Join us for two days of insightful discussions on sustainable development in East Africa.',
    content: 'The Annual Policy Research Conference brings together leading academics, policymakers, and development practitioners. This year\'s theme focuses on building resilience in the face of global economic uncertainties. Expect keynote speeches from prominent figures, interactive panel discussions, and opportunities to network with professionals dedicated to driving positive change in the region.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I joined L4D in 2013 as an intern and later became a Research Assistant under Prof. Alfred Bizoza’s mentorship. His guidance fueled my passion for research, enhanced my skills in data and field management, and inspired me to pursue postgraduate studies in Agricultural and Applied Economics.",
    name: "Mugabe Bonaventure",
    title: "Field Supervisor"
  },
  {
    quote: "My journey at L4D under Prof. Alfred Bizoza’s leadership has been truly transformative. His mentorship and commitment to excellence inspired my growth, sharpened my research and critical thinking skills, and nurtured curiosity and innovation that continue to guide my professional and personal development.",
    name: "Simeon Sibomana",
    title: "Field Supervisor"
  },
  {
    quote: "I joined L4D in 2013 as an intern, contributing to research and proposal writing under Prof. Alfred Bizoza’s mentorship. His guidance and the team’s support strengthened my confidence and skills, leading to my promotion to Research Fellow in 2018 and paving the way for my doctoral studies in 2020.",
    name: "Nkurikiye Jean Bosco",
    title: "Research Fellow/Data Analyst"
  },
  {
    quote: "After earning my Bachelor’s degree in 2013, I joined L4D as one of the pioneer mentees under Prof. Alfred Bizoza. The Centre’s mentorship has shaped my professional growth. Now as a Research Fellow and Data Manager, I lead research design, data management, analysis, and policy evaluation with a dynamic, value-driven team.",
    name: "Byishimo Patrick",
    title: "Research Fellow/Data Manager"
  },
  {
    quote: "I first met Prof. Alfred in 2008 during his PhD research, where he shared his vision for L4D. Since joining the Centre, I have grown professionally through research and mentorship, gaining valuable skills in leadership, teamwork, and analysis while contributing to Rwanda’s sustainable development initiatives.",
    name: "Dr. Jules Rutebuka",
    title: "Senior Research Fellow/GIS Expert"
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Prof. Alfred R. Bizoza",
    role: "Founder & President",
    bio: "Renowned expert in agricultural economics and policy research with decades of experience guiding evidence-based development.",
    image: "https://lh3.googleusercontent.com/d/1EiByhvCUjkqYeHLUWL6Swf8JVzTr8TiY",
    type: "Board",
    focusArea: ["Agricultural Economics", "Policy Research", "Institutional Development"]
  },
  {
    name: "Marie Chantal Rwakazina",
    role: "Managing Director",
    bio: "Experienced executive driving operational excellence and strategic partnerships to strengthen credible development initiatives.",
    image: "https://images.unsplash.com/photo-1573496359-136d475583dc?auto=format&fit=crop&q=80&w=800",
    type: "Board",
    researchFocus: ["Strategic Management", "Partnerships", "Operational Excellence"]
  },
  {
    name: "Dr. Teferi Tensay Mequaninte",
    role: "Head of Research",
    bio: "Accomplished researcher leading comprehensive studies in socio-economic development and guiding policy formulation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    type: "Leadership",
    researchFocus: ["Socio-economic Development", "Policy Formulation", "Quantitative Analysis"]
  },
  {
    name: "Patrick Byishimo",
    role: "Research Fellow/Data Manager",
    bio: "Specializes in data management and quantitative research, ensuring data integrity and robust analysis for policy formulation.",
    image: "https://ui-avatars.com/api/?name=Patrick+Byishimo&background=115e59&color=fff&size=512",
    type: "Staff",
    researchFocus: ["Data Management", "Quantitative Methods"]
  },
  {
    name: "Jean Bosco Nkurikiye",
    role: "Research Fellow/Data Analyst",
    bio: "Skilled data analyst with a deep understanding of statistical methods and their application in developmental research.",
    image: "https://ui-avatars.com/api/?name=Jean+Bosco+Nkurikiye&background=115e59&color=fff&size=512",
    type: "Staff",
    researchFocus: ["Statistical Analysis", "Econometrics"]
  },
  {
    name: "Yvette Kagoyire",
    role: "Research Operations Manager",
    bio: "Coordinates research activities, manages logistics, and ensures the smooth execution of field operations.",
    image: "https://ui-avatars.com/api/?name=Yvette+Kagoyire&background=115e59&color=fff&size=512",
    type: "Staff",
    researchFocus: ["Field Operations", "Logistics"]
  },
  {
    name: "Divine Irakoze",
    role: "Finance & HR",
    bio: "Manages financial planning and human resources, supporting the administrative backbone of the Centre.",
    image: "https://ui-avatars.com/api/?name=Divine+Irakoze&background=115e59&color=fff&size=512",
    type: "Staff",
    researchFocus: ["Financial Planning", "Human Resources"]
  },
  {
    name: "Belise Kangabe Hategeka",
    role: "Impact Analyst",
    bio: "Focuses on monitoring and evaluating the impact of research findings and developmental interventions.",
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
    role: "Consultant - Gender Expert",
    bio: "Brings extensive expertise in gender studies, promoting inclusive and equitable policy recommendations.",
    image: "https://ui-avatars.com/api/?name=Iris+Landi&background=115e59&color=fff&size=512",
    type: "Consultant",
    researchFocus: ["Gender Studies", "Social Inclusion"]
  },
  {
    name: "Richard Ngabo",
    role: "IT & Comms Officer",
    bio: "Drives internal IT infrastructure and leads communication strategies to amplify the Centre's research impact.",
    image: "https://ui-avatars.com/api/?name=Richard+Ngabo&background=115e59&color=fff&size=512",
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
    image: "https://ui-avatars.com/api/?name=Bridget+Vuguziga&background=115e59&color=fff&size=512",
    type: "Staff",
    researchFocus: ["Qualitative Assessment", "Field Supervision"]
  },
  {
    name: "Dusabe Ruth",
    role: "Research Assistant/Field Supervisor",
    bio: "Engages in rigorous field monitoring, ensuring data fidelity and bridging community insights with research objectives.",
    image: "https://ui-avatars.com/api/?name=Dusabe+Ruth&background=115e59&color=fff&size=512",
    type: "Staff",
    researchFocus: ["Field Monitoring", "Community Engagement"]
  },
  {
    name: "Bonaventure Mugabe",
    role: "Research Assistant/Field Supervisor",
    bio: "Brings deep contextual knowledge to field supervision, guaranteeing the accurate capture of localized research inputs.",
    image: "https://ui-avatars.com/api/?name=Bonaventure+Mugabe&background=115e59&color=fff&size=512",
    type: "Staff",
    researchFocus: ["Localized Research", "Data Capture"]
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
    description: 'We are seeking motivated Quantitative Field Enumerators to conduct structured interviews and administer surveys for our ongoing research projects. You will be responsible for accurate data entry using electronic devices while maintaining research ethics.',
    sector: 'Field Research',
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
    sector: 'Field Research',
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
    description: 'We are hiring Qualitative Field Enumerators to act as Facilitators for Focus Group Discussions (FGDs) and Key Informant Interviews (KIIs). You will guide conversations, probe for in-depth insights, and ensure all research objectives are covered.',
    sector: 'Field Research',
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
    description: 'We are seeking experienced Field Supervisors to oversee data collection activities across various sites. You will manage teams of enumerators, ensure data quality control, handle logistics, and report daily progress to the research coordination team.',
    sector: 'Field Research',
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