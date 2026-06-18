import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href?: string }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  impact: string;
  icon: LucideIcon;
}

export interface FocusArea {
  title: string;
  description: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  status: 'Ongoing' | 'Completed';
  image: string;
  year: string;
}

export interface Publication {
  title: string;
  type: 'Report' | 'Policy Brief' | 'Working Paper';
  date: string;
  pdfUrl?: string;
}

export interface NewsEvent {
  id: string;
  title: string;
  type: 'News' | 'Event';
  date: string;
  summary: string;
  content: string;
  image: string;
  relatedProjectId?: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  department: string;
  requirements: string[];
  sector?: string;
  educationLevel?: string;
  desiredExperience?: string;
  contractType?: string;
  postedDate?: string;
  deadline?: string;
  positions?: number;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  type?: 'Leadership' | 'Board' | 'Staff' | 'Consultant';
  focusArea?: string[];
}