import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Navigation,
  Car,
  Accessibility,
  ParkingCircle
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
import { businessInfo } from '../data/business';
import { SEOData } from '../types';

const ContactPage: React.FC = () => {
  const seoData: SEOData = {
    title: 'Contact Medione Pharmacy Nanyuki - Peak Place Mall Location | Phone 0728079401',
    description: 'Contact Medione Pharmacy at Peak Place Mall, Nanyuki. Phone: 0728079401, Email: medionenanyuki@gmail.com. Open until late, 7 days a week.',
    keywords: [
      'contact Medione pharmacy Nanyuki',
      'Peak Place Mall pharmacy address',
      'Medione pharmacy phone number',
      'Nanyuki pharmacy WhatsApp',
      'pharmacy location Nanyuki Kenya',
      'Peak Place Mall directions',
      'pharmacy hours Nanyuki',
      'Medione pharmacy email'
    ],
    canonical: 'https://medione.co.ke/contact'
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Call',
      description: 'Call us directly for immediate assistance',
      contact: '+254728079401',
      action: 'tel:+254728079401',
      color: 'blue'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick messages and consultation booking',
      contact: '+254728079401',
      action: 'https://wa.me/254728079401',
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us detailed inquiries',
      contact: 'medionenanyuki@gmail.com',
      action: 'mailto:medionenanyuki@gmail.com',
      color: 'purple'
    }
  ];

  const accessibilityFeatures = [
    {
      icon: Accessibility,
      title: 'Wheelchair Accessible',
      description: 'Fully accessible entrance and facilities'
    },
    {
      icon: ParkingCircle,
      title: 'Free Parking',
      description: 'Complimentary parking at Peak Place Mall'
    },
    {
      icon: Car,
      title: 'Easy Access',
      description: 'Convenient location with good road access'
    }
  ];

  const directions = [
    {
      step: '1',
      title: 'Locate Peak Place Mall',
      description: 'Peak Place Mall is located in the heart of Nanyuki town center'
    },
    {
      step: '2',
      title: 'Enter the Mall',
      description: 'Use the main entrance facing the main road'
    },
    {
      step: '3',
      title: 'Find Ground Floor',
      description: 'Medione Pharmacy is located on the ground floor'
    },
    {
      step: '4',
      title: 'Look for Signage',
      description: 'Clear Medione Pharmacy signage will guide you to our location'
    }
  ];

  return (
    <>
      <SEOComponent 
        data={seoData}
        localBusiness={{
          name: 'Medione Pharmacy',
          address: 'Peak Place Mall, Ground Floor, Nanyuki, Laikipia County, Kenya',
          telephone: '+254728079401',
          openingHours: 'Open until late, 7 days a week',
          geo: {
            latitude: -0.0667,
            longitude: 36.7833
          }
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-medione-green to-medione-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Medione Pharmacy
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Visit us at Peak Place Mall or reach out through any of our convenient contact methods
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Choose your preferred way to reach us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-xl transition-shadow duration-300 text-center">
                <CardContent className="pt-8 pb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    method.color === 'blue' ? 'bg-blue-100' : 
                    method.color === 'green' ? 'bg-green-100' : 'bg-purple-100'
                  }`}>
                    <method.icon className={`h-8 w-8 ${
                      method.color === 'blue' ? 'text-medione-blue' : 
                      method.color === 'green' ? 'text-green-600' : 'text-purple-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="text-lg font-medium text-gray-900 mb-4">{method.contact}</p>
                  <Button 
                    className={method.color === 'green' ? 'bg-green-600 hover:bg-green-700' : ''} 
                    asChild
                  >
                    <a href={method.action} target={method.action.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      Contact Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Our Pharmacy
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-medione-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-700">Peak Place Mall, Ground Floor</p>
                    <p className="text-gray-700">Nanyuki, Laikipia County</p>
                    <p className="text-gray-700">Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-medione-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Operating Hours</h3>
                    <p className="text-gray-700">Open until late, 7 days a week</p>
                    <p className="text-gray-600 text-sm">Including weekends and public holidays</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Accessibility Features</h3>
                  <div className="space-y-3">
                    {accessibilityFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <feature.icon className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{feature.title}</p>
                          <p className="text-xs text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" asChild>
                  <a 
                    href="https://www.google.com/maps/search/Peak+Place+Mall+Nanyuki" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Navigation className="mr-2 h-5 w-5" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <img
                src="/images/nanyuki-location.png"
                alt="Medione Pharmacy Location - Peak Place Mall Nanyuki"
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Landmark Information</h3>
                <p className="text-sm text-gray-600">
                  Peak Place Mall is easily recognizable from the main road through Nanyuki. 
                  Look for the prominent mall signage and ample parking area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Find Us
            </h2>
            <p className="text-xl text-gray-600">
              Simple directions to reach our pharmacy
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {directions.map((direction, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6 pb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {direction.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {direction.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {direction.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Have a question? We'd love to hear from you
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>
                We'll respond to your message within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your full name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+254 XXX XXX XXX" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="service">Service Information</SelectItem>
                        <SelectItem value="appointment">Appointment Booking</SelectItem>
                        <SelectItem value="delivery">Delivery Service</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-medione-blue" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Emergency Situations
              </h2>
              <p className="text-blue-700 mb-6">
                For medical emergencies, please call emergency services immediately or visit the nearest hospital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="destructive" size="lg">
                  <a href="tel:999">Call 999</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:117">Call 117</a>
                </Button>
              </div>
              <p className="text-sm text-medione-blue mt-4">
                For non-emergency pharmacy needs outside our operating hours, 
                please call us and we'll assist you as soon as we open.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
