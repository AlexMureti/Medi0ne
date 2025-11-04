import { Service, TeamMember, Location, FAQ, Testimonial } from '../types';

export const services: Service[] = [
  {
    id: 'prescriptions',
    title: 'Prescription Services',
    description: 'Professional prescription filling with expert counseling on medication usage, side effects, and drug interactions.',
    shortDescription: 'Expert prescription filling and medication counseling',
    icon: 'Prescription',
    features: [
      'Prescription verification and filling',
      'Medication counseling and education',
      'Drug interaction screening',
      'Insurance processing support',
      'Refill reminders'
    ],
    category: 'pharmacy',
    price: 'Varies by medication',
    duration: '15-30 minutes',
    available: true,
    image: '/images/medication-services.png'
  },
  {
    id: 'consultations',
    title: 'Pharmacist Consultations',
    description: 'Personalized medication therapy management and health consultations with licensed pharmacists.',
    shortDescription: 'Professional medication and health consultations',
    icon: 'Consultation',
    features: [
      'Medication therapy management',
      'Health condition assessments',
      'Chronic disease support',
      'Medication adherence counseling',
      'Lifestyle recommendations'
    ],
    category: 'consultation',
    price: 'From KES 500',
    duration: '30-60 minutes',
    available: true,
    image: '/images/consultation.png'
  },
  {
    id: 'vaccinations',
    title: 'Vaccination Services',
    description: 'Comprehensive vaccination services including routine immunizations, travel vaccines, and seasonal vaccinations.',
    shortDescription: 'Complete vaccination services for all ages',
    icon: 'Vaccination',
    features: [
      'Routine childhood immunizations',
      'Adult vaccination programs',
      'Travel vaccines and advice',
      'Flu shots and COVID-19 vaccines',
      'Vaccination record maintenance'
    ],
    category: 'health',
    price: 'Varies by vaccine',
    duration: '15-30 minutes',
    available: true,
    image: '/images/consultation.png'
  },
  {
    id: 'lab-tests',
    title: 'Laboratory Services',
    description: 'Convenient laboratory testing services with quick results and expert interpretation.',
    shortDescription: 'Professional lab testing with fast results',
    icon: 'LabTest',
    features: [
      'Blood glucose testing',
      'Blood pressure monitoring',
      'Cholesterol screening',
      'Urinalysis',
      'Pregnancy tests'
    ],
    category: 'health',
    price: 'From KES 300',
    duration: '10-20 minutes',
    available: true,
    image: '/images/consultation.png'
  },
  {
    id: 'health-checkups',
    title: 'Health Checkups',
    description: 'Comprehensive health screening and monitoring services for early detection and prevention.',
    shortDescription: 'Comprehensive health screening and monitoring',
    icon: 'HealthCheckup',
    features: [
      'Blood pressure monitoring',
      'Diabetes screening',
      'Heart health assessments',
      'Weight and BMI checks',
      'Health risk assessments'
    ],
    category: 'health',
    price: 'From KES 400',
    duration: '20-45 minutes',
    available: true,
    image: '/images/consultation.png'
  },
  {
    id: 'delivery',
    title: 'Pharmacy Delivery',
    description: 'Convenient home delivery service for prescriptions and health products in Nanyuki and surrounding areas.',
    shortDescription: 'Fast and secure pharmacy delivery service',
    icon: 'Delivery',
    features: [
      'Prescription delivery',
      'Same-day delivery available',
      'Secure packaging',
      'Delivery tracking',
      'Contactless delivery options'
    ],
    category: 'pharmacy',
    price: 'KES 100-200',
    duration: 'Same day',
    available: true,
    image: '/images/delivery-service.png'
  },
  {
    id: 'skincare',
    title: 'Skincare & Beauty',
    description: 'Professional skincare consultations and beauty product recommendations tailored to your needs.',
    shortDescription: 'Expert skincare consultations and products',
    icon: 'Skincare',
    features: [
      'Skin analysis and consultation',
      'Skincare routine recommendations',
      'Product selection guidance',
      'Allergy and sensitivity testing',
      'Beauty product recommendations'
    ],
    category: 'beauty',
    price: 'From KES 300',
    duration: '30-45 minutes',
    available: true,
    image: '/images/medication-services.png'
  },
  {
    id: 'family-health',
    title: 'Family Health Services',
    description: 'Comprehensive healthcare services for the whole family including children\'s health and wellness.',
    shortDescription: 'Complete family healthcare solutions',
    icon: 'Family',
    features: [
      'Children\'s health services',
      'Family wellness programs',
      'Health education',
      'Preventive care advice',
      'Family health planning'
    ],
    category: 'health',
    price: 'Varies',
    duration: '30-60 minutes',
    available: true,
    image: '/images/consultation.png'
  }
];

export const nancyKimathi: TeamMember = {
  id: 'nancy-kimathi',
  name: 'Nancy Kanana Kimathi',
  title: 'Principal Medical Consultant & Lead Pharmacist',
  credentials: [
    'Licensed Pharmaceutical Technologist',
    'Pharmacy and Poisons Board of Kenya (PPB) Registration #2231',
    'Active License Valid until December 31, 2025',
    'Member of Pharmaceutical Society of Kenya'
  ],
  bio: 'Nancy Kanana Kimathi is a highly qualified pharmaceutical technologist with extensive experience in community pharmacy practice, medication therapy management, and patient-centered care. She is passionate about improving health outcomes through personalized pharmaceutical services, patient education, and community health advocacy.',
  specialties: [
    'Medication Therapy Management',
    'Chronic Disease Management',
    'Vaccination Services',
    'Patient Counseling',
    'Community Health',
    'Pharmaceutical Care'
  ],
  image: '/images/nancy-consultant.png',
  phone: '+254728079401',
  email: 'nancy@medione.co.ke',
  registration: 'PPB2231',
  activeStatus: 'Active until December 31, 2025',
  isPrimary: true
};

export const locations: Location[] = [
  {
    id: 'nanyuki-main',
    name: 'Medione Pharmacy - Peak Place Mall',
    address: 'Peak Place Mall, Ground Floor',
    city: 'Nanyuki',
    county: 'Laikipia',
    country: 'Kenya',
    coordinates: {
      latitude: -0.0667,
      longitude: 36.7833
    },
    phone: '+254728079401',
    whatsapp: '+254728079401',
    email: 'medionenanyuki@gmail.com',
    hours: {
      'monday': 'Open until late',
      'tuesday': 'Open until late',
      'wednesday': 'Open until late',
      'thursday': 'Open until late',
      'friday': 'Open until late',
      'saturday': 'Open until late',
      'sunday': 'Open until late'
    },
    services: [
      'Prescription Services',
      'Consultations',
      'Vaccinations',
      'Laboratory Tests',
      'Health Checkups',
      'Delivery',
      'Skincare Services'
    ],
    images: ['/images/nanyuki-location.png'],
    parkingInfo: 'Free parking available at Peak Place Mall',
    accessibility: [
      'Wheelchair accessible entrance',
      'Accessible restrooms',
      'Reserved parking spaces'
    ]
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What are your operating hours?',
    answer: 'We are open until late seven days a week, including weekends and public holidays. For specific timing or urgent needs, please call us at 0728079401.',
    category: 'general',
    featured: true
  },
  {
    id: '2',
    question: 'Do you accept insurance?',
    answer: 'Yes, we work with most major insurance providers in Kenya. We also offer payment plans for qualifying patients. Please contact us to verify your specific coverage.',
    category: 'general',
    featured: true
  },
  {
    id: '3',
    question: 'How long does prescription delivery take?',
    answer: 'We offer same-day delivery for prescriptions submitted before 2 PM. For deliveries outside Nanyuki, please call us to confirm delivery timeframes and availability.',
    category: 'prescription',
    featured: false
  },
  {
    id: '4',
    question: 'Do you provide vaccination services?',
    answer: 'Yes, we offer comprehensive vaccination services including routine immunizations, travel vaccines, flu shots, and COVID-19 vaccines. All vaccines are administered by qualified pharmacists.',
    category: 'services',
    featured: true
  },
  {
    id: '5',
    question: 'Can I book consultations online?',
    answer: 'You can book consultations by calling us at 0728079401, messaging us on WhatsApp, or visiting our pharmacy. We also offer telemedicine consultations for certain health concerns.',
    category: 'consultation',
    featured: true
  },
  {
    id: '6',
    question: 'What laboratory tests do you offer?',
    answer: 'We provide various laboratory tests including blood glucose, cholesterol, blood pressure monitoring, urinalysis, and pregnancy tests. We can also arrange specimen collection for specialized tests.',
    category: 'services',
    featured: false
  },
  {
    id: '7',
    question: 'Do you offer medication counseling?',
    answer: 'Yes, our licensed pharmacists provide comprehensive medication counseling including proper usage, side effects management, drug interactions, and adherence strategies.',
    category: 'consultation',
    featured: true
  },
  {
    id: '8',
    question: 'Is your pharmacy wheelchair accessible?',
    answer: 'Yes, our location at Peak Place Mall is fully wheelchair accessible with accessible entrances, restrooms, and reserved parking spaces.',
    category: 'general',
    featured: false
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    patientName: 'Grace Wanjiku',
    service: 'Prescription Services',
    rating: 5,
    comment: 'Medione provides exceptional service. Nancy and her team are professional, knowledgeable, and always willing to help. The delivery service is convenient and reliable.',
    date: '2025-10-15',
    location: 'Nanyuki',
    verified: true
  },
  {
    id: '2',
    patientName: 'Peter Mwangi',
    service: 'Consultation',
    rating: 5,
    comment: 'The pharmacist consultation was thorough and helpful. I received excellent guidance on managing my diabetes medication. Highly recommend their professional approach.',
    date: '2025-10-10',
    location: 'Nanyuki',
    verified: true
  },
  {
    id: '3',
    patientName: 'Mary Chepkemoi',
    service: 'Vaccination',
    rating: 5,
    comment: 'Great vaccination service! Clean facility, professional staff, and no long wait times. The pharmacist explained everything clearly and made me feel comfortable.',
    date: '2025-09-28',
    location: 'Nanyuki',
    verified: true
  },
  {
    id: '4',
    patientName: 'James Kiprotich',
    service: 'Health Checkup',
    rating: 4,
    comment: 'Excellent health screening service. Quick results and helpful interpretation of my blood pressure and cholesterol levels. Will definitely return for future checkups.',
    date: '2025-09-20',
    location: 'Nanyuki',
    verified: true
  },
  {
    id: '5',
    patientName: 'Sarah Nyambura',
    service: 'Skincare Consultation',
    rating: 5,
    comment: 'The skincare consultation was very informative. The pharmacist provided personalized recommendations and explained everything in simple terms. Great service!',
    date: '2025-09-15',
    location: 'Nanyuki',
    verified: true
  }
];

export const businessInfo = {
  name: 'Medione Pharmacy',
  tagline: 'Your Trusted Healthcare Partner',
  description: 'Leading pharmacy and health services provider in Nanyuki, Kenya, offering comprehensive pharmaceutical care, medical consultations, vaccinations, and wellness services.',
  established: '2019',
  license: 'Licensed by Pharmacy and Poisons Board of Kenya',
  registration: 'PPB2231',
  phone: '+254728079401',
  whatsapp: '+254728079401',
  email: 'medionenanyuki@gmail.com',
  address: {
    street: 'Peak Place Mall, Ground Floor',
    city: 'Nanyuki',
    county: 'Laikipia',
    country: 'Kenya'
  },
  coordinates: {
    latitude: -0.0667,
    longitude: 36.7833
  },
  operatingHours: {
    monday: 'Open until late',
    tuesday: 'Open until late',
    wednesday: 'Open until late',
    thursday: 'Open until late',
    friday: 'Open until late',
    saturday: 'Open until late',
    sunday: 'Open until late'
  },
  social: {
    facebook: 'https://facebook.com/medionenanyuki',
    instagram: 'https://instagram.com/medionenanyuki',
    website: 'https://medione.co.ke'
  },
  services: services,
  team: [nancyKimathi],
  locations: locations,
  faqs: faqs,
  testimonials: testimonials
};
