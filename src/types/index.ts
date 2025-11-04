// Core types for Medione Pharmacy Website

export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  category: 'pharmacy' | 'health' | 'beauty' | 'consultation';
  price?: string;
  duration?: string;
  available: boolean;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  credentials: string[];
  bio: string;
  specialties: string[];
  image: string;
  phone?: string;
  email?: string;
  linkedin?: string;
  registration?: string;
  activeStatus?: string;
  isPrimary?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: TeamMember;
  publishedAt: string;
  updatedAt: string;
  category: string;
  tags: string[];
  image?: string;
  readTime: number;
  featured: boolean;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  county: string;
  country: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  phone: string;
  whatsapp: string;
  email: string;
  hours: {
    [key: string]: string;
  };
  services: string[];
  images: string[];
  parkingInfo?: string;
  accessibility?: string[];
}

export interface Appointment {
  id: string;
  service: string;
  provider?: TeamMember;
  date: string;
  time: string;
  duration: number;
  location: Location;
  patientInfo: {
    name: string;
    phone: string;
    email?: string;
    notes?: string;
  };
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  type: 'in-person' | 'telehealth' | 'home-visit';
}

export interface Testimonial {
  id: string;
  patientName: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  location: string;
  verified: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  service?: string;
  urgency: 'low' | 'medium' | 'high' | 'urgent';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'prescription' | 'consultation' | 'delivery';
  service?: string;
  featured: boolean;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  image: string;
  inStock: boolean;
  prescriptionRequired: boolean;
  dosage?: string;
  sideEffects?: string[];
  interactions?: string[];
  usage: string;
  storage: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
  structuredData?: any;
}
