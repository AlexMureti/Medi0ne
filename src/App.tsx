import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ShopPage from './pages/ShopPage';
import ConsultationsPage from './pages/ConsultationsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/consultations" element={<ConsultationsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Blog post routes */}
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            
            {/* Privacy and legal pages */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

// Placeholder components for additional routes
const BlogPostPage: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post</h1>
        <p className="text-gray-600">Individual blog post page coming soon...</p>
      </div>
    </div>
  );
};

const PrivacyPage: React.FC = () => (
  <div className="py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p className="text-gray-600">Privacy policy content coming soon...</p>
      </div>
    </div>
  </div>
);

const TermsPage: React.FC = () => (
  <div className="py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      <div className="prose max-w-none">
        <p className="text-gray-600">Terms of service content coming soon...</p>
      </div>
    </div>
  </div>
);

const AccessibilityPage: React.FC = () => (
  <div className="py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Accessibility Statement</h1>
      <div className="prose max-w-none">
        <p className="text-gray-600">Accessibility statement coming soon...</p>
      </div>
    </div>
  </div>
);

const NotFoundPage: React.FC = () => (
  <div className="py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
      <a href="/" className="text-blue-600 hover:text-blue-700 font-medium">
        Return to Home
      </a>
    </div>
  </div>
);

export default App;
