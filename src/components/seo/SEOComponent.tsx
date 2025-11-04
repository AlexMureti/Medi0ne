import React, { useEffect } from 'react';
import { SEOData } from '../../types';

interface SEOProps {
  data: SEOData;
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  reviews?: Array<{
    author: string;
    rating: number;
    reviewBody: string;
  }>;
  localBusiness?: {
    name: string;
    address: string;
    telephone: string;
    openingHours: string;
    geo?: {
      latitude: number;
      longitude: number;
    };
  };
}

export const SEOComponent: React.FC<SEOProps> = ({ 
  data, 
  breadcrumbs,
  reviews,
  localBusiness
}) => {
  useEffect(() => {
    // Update document title
    document.title = data.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', data.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = data.description;
      document.head.appendChild(meta);
    }
    
    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', data.keywords.join(', '));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = data.keywords.join(', ');
      document.head.appendChild(meta);
    }
    
    // Update canonical link
    const linkCanonical = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = data.canonical || window.location.href;
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonicalUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }
  }, [data]);

  return null; // This component doesn't render anything visible
};
