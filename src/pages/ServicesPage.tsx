import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  DollarSign, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  MessageCircle,
  Calendar,
  MapPin
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { SEOComponent } from '../components/seo/SEOComponent';
import { services } from '../data/business';
import { SEOData } from '../types';

const ServicesPage: React.FC = () => {
  const seoData: SEOData = {
    title: 'Pharmacy Services Nanyuki - Prescription, Consultations, Vaccinations | Medione',
    description: 'Comprehensive pharmacy services in Nanyuki, Kenya: prescriptions, consultations, vaccinations, lab tests, health checkups, delivery. Call 0728079401.',
    keywords: [
      'pharmacy services Nanyuki',
      'prescription services Kenya',
      'pharmacist consultation Nanyuki',
      'vaccination services Laikipia',
      'laboratory tests Nanyuki',
      'health checkups Kenya',
      'pharmacy delivery Nanyuki',
      'Peak Place Mall pharmacy services'
    ],
    canonical: 'https://medione.co.ke/services'
  };

  const serviceCategories = [
    { id: 'all', label: 'All Services' },
    { id: 'pharmacy', label: 'Pharmacy' },
    { id: 'health', label: 'Health Services' },
    { id: 'consultation', label: 'Consultations' },
    { id: 'beauty', label: 'Beauty & Skincare' }
  ];

  const getServicesByCategory = (category: string) => {
    if (category === 'all') return services;
    return services.filter(service => service.category === category);
  };

  const ServiceCard: React.FC<{ service: typeof services[0] }> = ({ service }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 h-full">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-medione-blue rounded"></div>
          </div>
          <Badge variant={service.available ? "default" : "secondary"}>
            {service.available ? "Available" : "Coming Soon"}
          </Badge>
        </div>
        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
        <CardDescription className="text-gray-600">
          {service.shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700 mb-6">{service.description}</p>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Duration:</span>
            <span className="font-medium">{service.duration}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Starting Price:</span>
            <span className="font-medium text-medione-green">{service.price}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-2">
          <Button className="flex-1" asChild>
            <Link to="/consultations" className="flex items-center justify-center">
              <Calendar className="mr-2 h-4 w-4" />
              Book Now
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="tel:+254728079401">
              <Phone className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://wa.me/254728079401" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <SEOComponent data={seoData} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-medione-green to-medione-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Healthcare Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Professional pharmaceutical and health services tailored to your needs, 
              delivered by licensed experts in Nanyuki, Kenya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-medione-green hover:bg-green-700" asChild>
                <a href="https://wa.me/254728079401" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book Consultation
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900" asChild>
                <a href="tel:+254728079401">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From prescription services to comprehensive health consultations, 
              we provide everything you need for your wellness journey
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {serviceCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-sm">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getServicesByCategory(category.id).map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose M<span className="text-medione-green">ed</span>i<span className="text-medione-blue">o</span>ne Pharmacy?
            </h2>
            <p className="text-xl text-gray-600">
              Professional excellence meets personalized care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-medione-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Licensed Professionals
                </h3>
                <p className="text-gray-600">
                  All services delivered by licensed pharmacists and certified healthcare professionals 
                  with active PPB registration.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-medione-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Flexible Scheduling
                </h3>
                <p className="text-gray-600">
                  Convenient hours with same-day appointments available. Call us to schedule 
                  or walk in for urgent needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Affordable Care
                </h3>
                <p className="text-gray-600">
                  Competitive pricing with insurance processing support and payment plans 
                  for qualifying patients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Service Coverage Areas
              </h2>
              <p className="text-gray-600 mb-8">
                We proudly serve patients throughout Nanyuki and surrounding areas, 
                with convenient pharmacy delivery options available.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-medione-blue" />
                  <span className="text-gray-700">Nanyuki Town Center</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-medione-blue" />
                  <span className="text-gray-700">Laikipia County</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-medione-blue" />
                  <span className="text-gray-700">Peak Place Mall Area</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-medione-blue" />
                  <span className="text-gray-700">Surrounding Communities</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Delivery Service</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Fast and secure pharmacy delivery available throughout Nanyuki and nearby areas.
                </p>
                <div className="flex space-x-3">
                  <Badge variant="secondary">Same Day Delivery</Badge>
                  <Badge variant="secondary">Contactless Options</Badge>
                  <Badge variant="secondary">Secure Packaging</Badge>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="/images/delivery-service.png"
                alt="Pharmacy delivery service in Nanyuki"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-medione-green to-medione-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule your appointment or visit us today. Our licensed team is ready 
            to provide you with exceptional pharmaceutical care and health services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-medione-green hover:bg-green-700" asChild>
              <Link to="/consultations">
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900" asChild>
              <a href="tel:+254728079401">
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
