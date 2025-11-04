import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Tag,
  Search,
  Filter
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { SEOComponent } from '../components/seo/SEOComponent';
import { nancyKimathi } from '../data/business';
import { SEOData } from '../types';

const BlogPage: React.FC = () => {
  const seoData: SEOData = {
    title: 'Health Education Blog - Nancy Kimathi Pharmacist | M<span className="text-medione-green">ed</span>i<span className="text-medione-blue">o</span>ne Pharmacy Nanyuki',
    description: 'Expert health education and medication guidance from Nancy Kanana Kimathi. Learn about vaccinations, chronic disease management, and pharmacy services in Nanyuki.',
    keywords: [
      'health education blog Nanyuki',
      'Nancy Kimathi health articles',
      'pharmacy health advice Kenya',
      'medication education Nanyuki',
      'vaccination information Kenya',
      'chronic disease management',
      'pharmacist health tips',
      'pharmaceutical education Laikipia'
    ],
    canonical: 'https://medione.co.ke/blog'
  };

  const blogPosts = [
    {
      id: '1',
      title: 'Understanding Blood Pressure: Numbers That Matter',
      slug: 'understanding-blood-pressure-numbers',
      excerpt: 'Learn what your blood pressure readings mean and how to maintain healthy levels with expert guidance from Nancy Kimathi.',
      content: 'Blood pressure is one of the most important indicators of cardiovascular health...',
      author: nancyKimathi,
      publishedAt: '2025-10-15',
      updatedAt: '2025-10-15',
      category: 'Health Education',
      tags: ['blood pressure', 'cardiovascular health', 'prevention', 'lifestyle'],
      image: '/images/consultation.png',
      readTime: 5,
      featured: true
    },
    {
      id: '2',
      title: 'Medication Adherence: Building Sustainable Habits',
      slug: 'medication-adherence-building-habits',
      excerpt: 'Discover practical strategies for taking medications consistently and managing side effects effectively.',
      content: 'Medication adherence is crucial for treatment success...',
      author: nancyKimathi,
      publishedAt: '2025-10-10',
      updatedAt: '2025-10-10',
      category: 'Medical Advice',
      tags: ['medication', 'adherence', 'chronic disease', 'patient care'],
      image: '/images/medication-services.png',
      readTime: 6,
      featured: true
    },
    {
      id: '3',
      title: 'Vaccination Readiness: What to Expect at M<span className="text-medione-green">ed</span>i<span className="text-medione-blue">o</span>ne',
      slug: 'vaccination-readiness-medione',
      excerpt: 'A comprehensive guide to preparing for vaccinations, understanding side effects, and maintaining vaccination schedules.',
      content: 'Vaccinations are one of the most effective ways to prevent disease...',
      author: nancyKimathi,
      publishedAt: '2025-10-05',
      updatedAt: '2025-10-05',
      category: 'Health Education',
      tags: ['vaccination', 'prevention', 'immunization', 'health screening'],
      image: '/images/consultation.png',
      readTime: 7,
      featured: false
    },
    {
      id: '4',
      title: 'Antibiotics Stewardship: Use, Side Effects, and Myths',
      slug: 'antibiotics-stewardship-use-myths',
      excerpt: 'Understanding when antibiotics are needed, how to take them safely, and common misconceptions about antibiotic use.',
      content: 'Antibiotics are powerful medications that can save lives...',
      author: nancyKimathi,
      publishedAt: '2025-09-28',
      updatedAt: '2025-09-28',
      category: 'Health Education',
      tags: ['antibiotics', 'stewardship', 'resistance', 'safe use'],
      image: '/images/medication-services.png',
      readTime: 8,
      featured: false
    },
    {
      id: '5',
      title: 'Prenatal Nutrition: Vitamins and Safe Practices',
      slug: 'prenatal-nutrition-vitamins-practices',
      excerpt: 'Essential nutritional guidance for expecting mothers, including vitamin supplementation and healthy lifestyle recommendations.',
      content: 'Proper nutrition during pregnancy is crucial for both mother and baby...',
      author: nancyKimathi,
      publishedAt: '2025-09-20',
      updatedAt: '2025-09-20',
      category: 'Women\'s Health',
      tags: ['pregnancy', 'nutrition', 'vitamins', 'prenatal care'],
      image: '/images/consultation.png',
      readTime: 6,
      featured: false
    },
    {
      id: '6',
      title: 'Diabetes Care Basics: Monitoring and Lifestyle',
      slug: 'diabetes-care-basics-monitoring',
      excerpt: 'Comprehensive guide to diabetes management, including blood glucose monitoring, dietary considerations, and lifestyle modifications.',
      content: 'Living with diabetes requires careful monitoring and lifestyle adjustments...',
      author: nancyKimathi,
      publishedAt: '2025-09-15',
      updatedAt: '2025-09-15',
      category: 'Chronic Disease',
      tags: ['diabetes', 'monitoring', 'lifestyle', 'chronic care'],
      image: '/images/consultation.png',
      readTime: 9,
      featured: false
    }
  ];

  const categories = [
    'All Categories',
    'Health Education',
    'Medical Advice',
    'Women\'s Health',
    'Chronic Disease',
    'Prevention',
    'Medication Safety'
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <SEOComponent data={seoData} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-medione-green to-medione-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Health Education Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Expert health guidance, medication education, and wellness tips from 
              Nancy Kanana Kimathi, your trusted pharmacist in Nanyuki
            </p>
            <div className="flex justify-center">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600">
              Essential health information from our expert pharmacist
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <CardTitle className="text-xl line-clamp-2 group-hover:text-medione-blue transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author.name}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/blog/${post.slug}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">All Articles</h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="reading-time">Reading Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-medione-blue transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime} min</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full" size="sm" asChild>
                    <Link to={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Health Tips
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to receive the latest health education articles and pharmacy updates 
            from Nancy Kimathi and the M<span className="text-medione-green">ed</span>i<span className="text-medione-blue">o</span>ne team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
            />
            <Button className="bg-white text-blue-900 hover:bg-blue-50">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={nancyKimathi.image}
                  alt="Nancy Kanana Kimathi - Health Education Author"
                  className="w-32 h-32 rounded-full mx-auto lg:mx-0 object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  About the Author
                </h2>
                <h3 className="text-xl text-medione-blue mb-2">{nancyKimathi.name}</h3>
                <p className="text-gray-700 mb-4">{nancyKimathi.title}</p>
                <p className="text-gray-600 mb-4">
                  With extensive experience in pharmaceutical care and a passion for patient education, 
                  Nancy shares evidence-based health information to help you make informed decisions 
                  about your wellness journey.
                </p>
                <div className="flex items-center space-x-4">
                  <Badge variant="outline">PPB #2231</Badge>
                  <Badge variant="outline">5+ Years Experience</Badge>
                  <Badge variant="outline">Health Educator</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
