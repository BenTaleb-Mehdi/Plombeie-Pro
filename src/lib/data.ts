export interface Company {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  whatsappMessage: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  images?: string[];
  duration?: string;
  location?: string;
  date?: string;
  details?: string;
  features?: string[];
}

export interface Stat {
  label: string;
  value: string;
}

export interface About {
  title: string;
  description: string;
  stats: Stat[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content?: string[];
  image?: string;
}

export interface SiteData {
  company: Company;
  navigation: NavItem[];
  services: Service[];
  portfolio: PortfolioItem[];
  about: About;
  blog: BlogPost[];
}

import data from "../../data/plombier.json";

export function getData(): SiteData {
  return data as SiteData;
}
