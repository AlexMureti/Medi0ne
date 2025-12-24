import React from 'react';
import { Award, Users, Clock, Shield, Heart, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { SEOComponent } from '../components/seo/SEOComponent';
import { businessInfo, nancyKimathi } from '../data/business';
import { SEOData } from '../types';

const AboutPage: React.FC = () => {
  const seoData: SEOData = {
    title: 'About Medione Pharmacy - Nancy Kanana Kimathi, Licensed Pharmacist Nanyuki',
    description: 'Learn about Medione Pharmacy in Nanyuki and Nancy Kanana Kimathi, our licensed pharmaceutical technologist (PPB2231). Committed to excellent healthcare services in Kenya.',
    keywords: [
      'Nancy Kanana Kimathi pharmacist',
      'about Medione pharmacy Nanyuki',
      'pharmacist Laikipia Kenya',
      'PPB2231 pharmacy Kenya',
      'pharmaceutical technologist Nanyuki',
      'healthcare professionals Nanyuki',
      'Peak Place Mall pharmacy',
      'licensed pharmacist Kenya'
    ],
    canonical: 'https://medione.co.ke/about'
  };

  const stats = [
    { icon: Users, label: 'Patients Served', value: '1000+' },
    { icon: Clock, label: 'Years Experience', value: '5+' },
    { icon: Award, label: 'Professional License', value: 'Active PPB2231' },
    { icon: Shield, label: 'Years Licensed', value: '2025 Expiry' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'We prioritize your health and well-being in every decision we make, ensuring personalized attention and compassionate service.'
    },
    {
      icon: Shield,
      title: 'Professional Excellence',
      description: 'Our licensed pharmacists maintain the highest standards of pharmaceutical practice with continuous education and professional development.'
    },
    {
      icon: Award,
      title: 'Community Commitment',
      description: 'We are dedicated to improving community health outcomes through education, prevention, and accessible healthcare services.'
    },
    {
      icon: Users,
      title: 'Accessible Healthcare',
      description: 'We believe quality healthcare should be accessible to everyone, offering flexible hours, multiple contact methods, and delivery services.'
    }
  ];

  return (
    <>
      <SEOComponent data={seoData} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-medione-green to-medione-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About M<span className="text-medione-green">ed</span>i<span className="text-medione-blue">o</span>ne Pharmacy
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your trusted healthcare partner in Nanyuki, Kenya, led by licensed pharmacist
              Nancy Kanana Kimathi
            </p>
          </div>
        </div>
      </section>

      {/* Nancy Kimathi Profile */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={nancyKimathi.image}
                  alt="Nancy Kanana Kimathi - Principal Medical Consultant"
                  className="w-full object-cover image-dim image-dim-strong"
                />
                {/* Stronger premium overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
              </div>
            </div>
            <div>
              <Badge variant="outline" className="mb-4">
                <Award className="h-4 w-4 mr-1" />
                Licensed Professional
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {nancyKimathi.name}
              </h2>
              <p className="text-xl text-medione-blue mb-6">{nancyKimathi.title}</p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {nancyKimathi.bio}
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-gray-900">Credentials & Certifications</h3>
                {nancyKimathi.credentials.map((credential, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{credential}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {nancyKimathi.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Commitment in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Demonstrating our dedication to healthcare excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-medione-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our practice and commitment to exceptional healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-medione-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-xl text-gray-600">
                Building trust through professional excellence and community care
              </p>
            </div>

            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                M<span className="text-medione-green">ed</span>i<span className="text-medione-blue">o</span>ne Pharmacy was founded with a simple yet profound mission: to provide
                exceptional pharmaceutical care and health services to the people of Nanyuki
                and surrounding areas. Located in the heart of Peak Place Mall, we have become
                a trusted healthcare destination for families and individuals seeking professional,
                compassionate care.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Under the leadership of Nancy Kanana Kimathi, a licensed pharmaceutical
                technologist with active registration from the Pharmacy and Poisons Board of
                Kenya, M<span className="text-medione-green">ed</span>i<span className="text-medione-blue">o</span>ne has established itself as a pillar of health and wellness in
                the community. Our approach combines traditional pharmaceutical care with
                modern healthcare solutions, ensuring that every patient receives personalized
                attention and expert guidance.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                From prescription services and medication consultations to vaccinations and
                health screenings, our comprehensive range of services addresses the diverse
                healthcare needs of our community. We pride ourselves on our accessibility,
                professional excellence, and unwavering commitment to patient safety and
                well-being.
              </p>

              <p className="text-lg leading-relaxed">
                Today, M<span className="text-medione-green">ed</span>i<span className="text-medione-blue">o</span>ne Pharmacy continues to evolve and grow, always keeping patient
                care at the center of everything we do. Whether you're seeking medication
                counseling, planning a vaccination, or need expert health advice, our team
                is here to serve you with the highest standards of pharmaceutical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Licensed and regulated by Kenya's health authorities
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Shield className="h-8 w-8 text-medione-blue" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Pharmacy and Poisons Board of Kenya</h3>
                      <p className="text-gray-600">Officially licensed and regulated facility</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Award className="h-8 w-8 text-medione-blue" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Registration Number: PPB2231</h3>
                      <p className="text-gray-600">Active license valid until December 31, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Users className="h-8 w-8 text-medione-blue" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Pharmaceutical Society of Kenya</h3>
                      <p className="text-gray-600">Active member in good standing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-16 w-16 text-medione-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Licensed Healthcare Facility</h3>
                <p className="text-gray-600">
                  Operates under strict regulatory oversight to ensure the highest standards
                  of pharmaceutical care and patient safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
