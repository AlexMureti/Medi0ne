import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-medione-blue to-medione-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <div>
                <h2 className="text-2xl font-bold">
                  <img src="/medione logo.jpg" alt="Medione Pharmacy" className="h-10 w-auto inline" />
                </h2>
                <p className="text-sm text-gray-300 italic">
                  <span className="text-blue-600 font-semibold">Y</span>our{' '}
                  <span className="text-blue-600 font-semibold">H</span>ealth{' '}
                  is{' '}
                  <span className="text-green-600 font-semibold">Y</span>our{' '}
                  <span className="text-blue-600 font-semibold">W</span>ealth
                </p>
                <p className="text-gray-400">Pharmacy & Health Services</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted healthcare partner in Nanyuki, Kenya. We provide comprehensive 
              pharmacy services, medical consultations, vaccinations, and health checkups 
              with a commitment to excellence and patient care.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/medionenanyuki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/medionenanyuki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/shop" className="block text-gray-300 hover:text-white transition-colors">
                Shop
              </Link>
              <Link to="/consultations" className="block text-gray-300 hover:text-white transition-colors">
                Consultations
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-white transition-colors">
                Health Blog
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Location</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Peak Place Mall, Ground Floor</p>
                  <p className="text-gray-300">Nanyuki, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+254728079401" className="text-gray-300 hover:text-white transition-colors">
                  0728079401
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/254728079401" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:medionenanyuki@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  medionenanyuki@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Open until Late</p>
                  <p className="text-gray-400 text-sm">Monday - Sunday</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; {currentYear} <img src="/medione logo.jpg" alt="Medione Pharmacy" className="h-6 w-auto inline mx-1" /> All rights reserved.</p>
              <p className="mt-1">Licensed by Pharmacy and Poisons Board of Kenya</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
