import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Star, 
  Users, 
  Award, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { SEOComponent } from '../components/seo/SEOComponent';
import { businessInfo, services, testimonials } from '../data/business';
import { SEOData } from '../types';

const HomePage: React.FC = () => {
  const featuredServices = services.slice(0, 6);
  const recentTestimonials = testimonials.slice(0, 3);

  const seoData: SEOData = {
    title: 'Medione Pharmacy Nanyuki - Kenya\'s Leading Healthcare Partner',
    description: 'Medione Pharmacy in Nanyuki, Kenya offers expert pharmaceutical services, medical consultations, vaccinations, and health checkups. Licensed by PPB Kenya. Call 0728079401.',
    keywords: [
      'pharmacy Nanyuki',
      'medical consultation Nanyuki',
      'vaccination services Kenya',
      'prescription services Nanyuki',
      'pharmaceutical services Laikipia',
      'health checkups Nanyuki',
      'Nancy Kimathi pharmacist',
      'pharmacy near me',
      'healthcare Nanyuki Kenya',
      'Peak Place Mall pharmacy'
    ],
    canonical: 'https://medione.co.ke'
  };

  return (
    <>
      <SEOComponent data={seoData} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-medione-blue via-blue-700 to-medione-green text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-pharmacy.png"
            alt="Medione Pharmacy - Professional Healthcare Services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Award className="h-4 w-4 mr-1" />
                Licensed by PPB Kenya
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Trusted Healthcare Partner in <span className="text-blue-200">Nanyuki</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                M<span className="text-medione-green">ed</span>i<span className="text-medione-blue">o</span>ne Pharmacy offers comprehensive pharmaceutical services, expert medical consultations, 
                vaccinations, and health checkups. Led by licensed pharmacist Nancy Kanana Kimathi, 
                we provide patient-centered care with excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-medione-green hover:bg-green-700" asChild>
                  <a href="https://wa.me/254728079401" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+254728079401">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-sm">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Licensed & Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span className="text-sm">1000+ Happy Patients</span>
                </div>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-blue-200" />
                    <div>
                      <p className="font-semibold">Peak Place Mall, Ground Floor</p>
                      <p className="text-blue-200">Nanyuki, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-blue-200" />
                    <div>
                      <p className="font-semibold">0728079401</p>
                      <p className="text-blue-200">Call or WhatsApp</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-blue-200" />
                    <div>
                      <p className="font-semibold">Open Until Late</p>
                      <p className="text-blue-200">7 Days a Week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From prescription services to expert consultations, we provide everything you need 
              for your health and wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-medione-blue rounded"></div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{service.duration}</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/services">
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Nancy Kimathi Profile Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/nancy-consultant.png"
                alt="Nancy Kanana Kimathi - Principal Medical Consultant"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <Badge variant="outline" className="mb-4">
                <Award className="h-4 w-4 mr-1" />
                Licensed Professional
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet <span className="text-medione-blue">Nancy Kanana Kimathi</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Principal Medical Consultant & Lead Pharmacist
              </p>
              <p className="text-gray-700 mb-6">
                Nancy Kanana Kimathi is a licensed pharmaceutical technologist with extensive 
                experience in community pharmacy practice, medication therapy management, 
                and patient-centered care. She holds active registration with the Pharmacy 
                and Poisons Board of Kenya (PPB2231) and is passionate about improving 
                health outcomes through personalized pharmaceutical services.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">PPB Registration #2231 - Active</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Licensed until December 31, 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Member of Pharmaceutical Society of Kenya</span>
                </div>
              </div>
              <Button size="lg" asChild>
                <Link to="/consultations">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Read testimonials from satisfied patients who trust M<span className="text-medione-green">ed</span>i<span className="text-medione-blue">o</span>ne Pharmacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.patientName}</p>
                    <p className="text-sm text-gray-500">{testimonial.service}</p>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Us in Nanyuki
              </h2>
              <p className="text-gray-600 mb-8">
                Conveniently located at Peak Place Mall, we're easily accessible with 
                free parking and full accessibility features.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-medione-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">Peak Place Mall, Ground Floor</p>
                    <p className="text-gray-600">Nanyuki, Laikipia County, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-medione-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Operating Hours</h3>
                    <p className="text-gray-600">Open until late, 7 days a week</p>
                    <p className="text-gray-600">Including weekends and holidays</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Get Directions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/images/nanyuki-location.png"
                alt="Medione Pharmacy Location - Peak Place Mall Nanyuki"
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
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact M<span className="text-medione-green">ed</span>i<span className="text-medione-blue">o</span>ne Pharmacy today for professional healthcare services, 
            expert consultations, and personalized medication management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-medione-green hover:bg-green-700" asChild>
              <a href="https://wa.me/254728079401" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
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
      </section>
    </>
  );
};

export default HomePage;
