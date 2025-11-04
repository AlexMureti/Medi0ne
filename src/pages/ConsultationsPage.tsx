import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  FileText, 
  CheckCircle,
  Star,
  Award,
  MapPin
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { SEOComponent } from '../components/seo/SEOComponent';
import { nancyKimathi, businessInfo } from '../data/business';
import { SEOData } from '../types';

const ConsultationsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
    urgency: 'medium'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Consultation request:', formData);
    setIsSubmitted(true);
  };

  const consultationTypes = [
    {
      id: 'medication-therapy',
      title: 'Medication Therapy Management',
      description: 'Comprehensive review and optimization of your medication regimen',
      duration: '45-60 minutes',
      price: 'KES 1,500',
      features: [
        'Complete medication review',
        'Drug interaction screening',
        'Side effect management',
        'Adherence strategies',
        'Personalized recommendations'
      ]
    },
    {
      id: 'health-consultation',
      title: 'General Health Consultation',
      description: 'Expert guidance on health conditions, symptoms, and wellness',
      duration: '30-45 minutes',
      price: 'KES 1,000',
      features: [
        'Health condition assessment',
        'Symptom evaluation',
        'Preventive care advice',
        'Lifestyle recommendations',
        'Follow-up planning'
      ]
    },
    {
      id: 'chronic-care',
      title: 'Chronic Disease Management',
      description: 'Specialized support for ongoing health conditions',
      duration: '45-60 minutes',
      price: 'KES 1,200',
      features: [
        'Diabetes management',
        'Hypertension monitoring',
        'Medication optimization',
        'Lifestyle modifications',
        'Progress tracking'
      ]
    },
    {
      id: 'vaccination-counseling',
      title: 'Vaccination Counseling',
      description: 'Expert advice on vaccination schedules and safety',
      duration: '20-30 minutes',
      price: 'KES 500',
      features: [
        'Vaccination schedule review',
        'Travel vaccine advice',
        'Safety assessment',
        'Contraindication screening',
        'Record keeping'
      ]
    }
  ];

  const seoData: SEOData = {
    title: 'Book Consultation Nanyuki - Nancy Kimathi Pharmacist | M<span className="text-medione-green">ed</span>i<span className="text-medione-blue">o</span>ne Pharmacy',
    description: 'Book professional consultation with Nancy Kanana Kimathi (PPB2231). Medication therapy, health advice, chronic disease management. Call 0728079401.',
    keywords: [
      'pharmacist consultation Nanyuki',
      'Nancy Kimathi consultation',
      'medication therapy management Kenya',
      'health consultation Laikipia',
      'chronic disease consultation Nanyuki',
      'vaccination counseling Kenya',
      'Peak Place Mall consultation',
      'pharmaceutical consultation services'
    ],
    canonical: 'https://medione.co.ke/consultations'
  };

  return (
    <>
      <SEOComponent data={seoData} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-medione-green to-medione-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Consultations
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Expert pharmaceutical and health consultations with Nancy Kanana Kimathi, 
              your licensed pharmacist in Nanyuki
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}>
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900" asChild>
                <a href="https://wa.me/254728079401" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Quick WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nancy Kimathi Profile */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src={nancyKimathi.image}
                alt="Nancy Kanana Kimathi - Consultation Specialist"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <Badge variant="outline" className="mb-4">
                <Award className="h-4 w-4 mr-1" />
                Licensed Consultant
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Your Consultant
              </h2>
              <h3 className="text-xl text-medione-blue mb-4">{nancyKimathi.name}</h3>
              <p className="text-gray-700 mb-6">{nancyKimathi.title}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">PPB Registration #{nancyKimathi.registration}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Active until December 31, 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">5+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">500+ Successful Consultations</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Specializing in medication therapy management, chronic disease support, 
                and comprehensive health consultations, Nancy brings professional expertise 
                and compassionate care to every patient interaction.
              </p>

              <div className="flex space-x-4">
                <Button asChild>
                  <a href="tel:+254728079401">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://wa.me/254728079401" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Consultation Services
            </h2>
            <p className="text-xl text-gray-600">
              Choose the consultation type that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultationTypes.map((consultation) => (
              <Card key={consultation.id} className="group hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-600 rounded"></div>
                    </div>
                    <Badge variant="secondary">{consultation.duration}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{consultation.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {consultation.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-600">{consultation.price}</span>
                    </div>
                    <ul className="space-y-2">
                      {consultation.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full" onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}>
                    Book This Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Your Consultation
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below to schedule your appointment with Nancy Kimathi
            </p>
          </div>

          {!isSubmitted ? (
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Consultation Request Form</CardTitle>
                <CardDescription>
                  Please provide your details and we'll confirm your appointment within 2 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+254 XXX XXX XXX"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Consultation Type *</Label>
                    <Select onValueChange={(value) => handleInputChange('service', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select consultation type" />
                      </SelectTrigger>
                      <SelectContent>
                        {consultationTypes.map((consultation) => (
                          <SelectItem key={consultation.id} value={consultation.id}>
                            {consultation.title} - {consultation.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                          <SelectItem value="17:00">5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select onValueChange={(value) => handleInputChange('urgency', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - Can wait a few days</SelectItem>
                        <SelectItem value="medium">Medium - Within 24-48 hours</SelectItem>
                        <SelectItem value="high">High - Same day preferred</SelectItem>
                        <SelectItem value="urgent">Urgent - As soon as possible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      placeholder="Please describe your health concerns or questions..."
                      rows={4}
                    />
                  </div>

                  <Separator />

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="flex-1" size="lg">
                      <Calendar className="mr-2 h-5 w-5" />
                      Request Appointment
                    </Button>
                    <Button type="button" variant="outline" size="lg" asChild className="flex-1">
                      <a href="https://wa.me/254728079401" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Quick WhatsApp
                      </a>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Consultation Request Submitted!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your request. Nancy Kimathi will contact you within 2 hours to confirm 
                  your appointment and discuss any additional details.
                </p>
                <div className="space-y-3">
                  <p className="text-sm text-gray-500">
                    For urgent matters, please call us directly at:
                  </p>
                  <Button asChild variant="outline">
                    <a href="tel:+254728079401">
                      <Phone className="mr-2 h-4 w-4" />
                      0728079401
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Alternative Ways to Book
            </h2>
            <p className="text-xl text-gray-600">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-medione-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Phone Call</h3>
                <p className="text-gray-600 mb-4">
                  Call us directly to speak with our team and book your consultation
                </p>
                <Button asChild>
                  <a href="tel:+254728079401">Call Now</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">WhatsApp</h3>
                <p className="text-gray-600 mb-4">
                  Send us a WhatsApp message for quick consultation booking
                </p>
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <a href="https://wa.me/254728079401" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Walk-In</h3>
                <p className="text-gray-600 mb-4">
                  Visit us at Peak Place Mall for immediate consultation scheduling
                </p>
                <Button asChild variant="outline">
                  <Link to="/contact">Get Directions</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConsultationsPage;
