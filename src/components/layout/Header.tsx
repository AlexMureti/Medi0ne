import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';
import { Button } from '../ui/button';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Shop', href: '/shop' },
    { name: 'Consultations', href: '/consultations' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className={`bg-white shadow-lg sticky top-0 z-50 ${className}`}>
      {/* Festive Banner */}
      <div className="bg-gradient-to-r from-festive-red via-festive-gold to-festive-green text-white py-1 text-center text-xs font-medium festive-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="festive-emoji">🎄</span> Merry Christmas & Happy Holidays from{' '}
          <img src="/medione logo.jpg" alt="Medione Pharmacy" className="h-4 inline mx-1 align-text-bottom" />
          <span className="festive-emoji">🎄</span>
        </div>
      </div>

      {/* Top Bar */}
      <div className="bg-gradient-to-r from-medione-blue to-medione-green text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex flex-wrap items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Open until Late</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Peak Place Mall, Nanyuki</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <a href="tel:+254728079401" className="hover:text-blue-200">
                  0728079401
                </a>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <a href="mailto:medionenanyuki@gmail.com" className="hover:text-blue-200">
                  medionenanyuki@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                <img src="/medione logo.jpg" alt="Medione Pharmacy" className="h-10 w-auto inline" />
              </h1>
              <p className="text-sm text-gray-600 italic">
                <span className="text-medione-blue font-semibold">Y</span>our{' '}
                <span className="text-medione-blue font-semibold">H</span>ealth{' '}
                is{' '}
                <span className="text-medione-green font-semibold">Y</span>our{' '}
                <span className="text-medione-blue font-semibold">W</span>ealth
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive(item.href)
                    ? 'text-medione-blue bg-blue-50'
                    : 'text-gray-700 hover:text-medione-blue hover:bg-gray-50'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Button asChild variant="outline" size="sm">
              <a href="tel:+254728079401" className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Call</span>
              </a>
            </Button>
            <Button asChild size="sm" className="bg-medione-green hover:bg-green-700">
              <a
                href="https://wa.me/254728079401"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200 bg-white">
        <nav className="px-4 py-3">
          <div className="grid grid-cols-2 gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-3 text-sm font-medium rounded-lg text-center transition-colors ${isActive(item.href)
                    ? 'text-white bg-medione-blue'
                    : 'text-gray-700 bg-gray-50 hover:text-medione-blue hover:bg-blue-50'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};
