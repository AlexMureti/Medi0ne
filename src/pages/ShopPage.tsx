import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingCart,
  Search,
  Filter,
  Star,
  Heart,
  ShoppingBag,
  Phone,
  MessageCircle,
  Package,
  Shield
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { SEOComponent } from '../components/seo/SEOComponent';
import ImageModal from '../components/ui/ImageModal';
import { businessInfo } from '../data/business';
import { SEOData } from '../types';

const ShopPage: React.FC = () => {
  const seoData: SEOData = {
    title: 'Pharmacy Shop Nanyuki - Medications & Health Products | Medione',
    description: 'Shop medications, health products, and wellness items at Medione Pharmacy Nanyuki. Prescription and OTC medicines with professional guidance.',
    keywords: [
      'pharmacy shop Nanyuki',
      'medications for sale Kenya',
      'health products Nanyuki',
      'prescription drugs pharmacy',
      'over the counter medicines',
      'wellness products Kenya',
      'Peak Place Mall pharmacy shop',
      'pharmaceutical products Laikipia'
    ],
    canonical: 'https://medione.co.ke/shop'
  };

  const productCategories = [
    { id: 'all', label: 'All Products', count: 120 },
    { id: 'prescription', label: 'Prescription Medicines', count: 85 },
    { id: 'otc', label: 'Over The Counter', count: 45 },
    { id: 'vitamins', label: 'Vitamins & Supplements', count: 32 },
    { id: 'skincare', label: 'Skincare & Beauty', count: 28 },
    { id: 'medical', label: 'Medical Supplies', count: 22 }
  ];

  const featuredProducts = [
    {
      id: '1',
      name: 'Amoxicillin 500mg Capsules',
      brand: 'MediPharm',
      category: 'Prescription Antibiotics',
      prescription: true,
      rating: 4.8,
      reviews: 24,
      inStock: true,
      image: 'https://deshabpharmacy.com/shop/wp-content/uploads/2022/09/amoxicillin-capsule-unbrand-500mg.jpg',
      description: 'Broad-spectrum antibiotic for bacterial infections',
      benefits: ['Effective against various bacterial infections', 'Doctor prescription required', 'Available in convenient blister pack']
    },
    {
      id: '2',
      name: 'Multivitamin Complex',
      brand: 'HealthPlus',
      category: 'Vitamins',
      prescription: false,
      rating: 4.7,
      reviews: 18,
      inStock: true,
      image: 'https://www.nutralie.com/wp-content/uploads/2020/10/Diseno-sin-titulo-3.png',
      description: 'Complete daily multivitamin for adults',
      benefits: ['Supports immune system', 'Boosts energy levels', '30-day supply']
    },
    {
      id: '3',
      name: 'Paracetamol 500mg Tablets',
      brand: 'Panado',
      category: 'Pain Relief',
      prescription: false,
      rating: 4.9,
      reviews: 45,
      inStock: true,
      image: 'https://tiimg.tistatic.com/fp/2/007/943/500mg-paracetamol-tablets-984.jpg',
      description: 'Effective pain relief and fever reducer',
      benefits: ['Fast-acting pain relief', 'Reduces fever', 'Available without prescription']
    },
    {
      id: '4',
      name: 'Vitamin D3 1000 IU',
      brand: 'SunVital',
      category: 'Vitamins',
      prescription: false,
      rating: 4.6,
      reviews: 12,
      inStock: true,
      image: 'https://deliverypharmacyke.com/wp-content/uploads/2021/06/SOLGAR-Vitamin-D3-1000iu-Capsules-100_s.jpeg',
      description: 'Essential vitamin D3 supplement',
      benefits: ['Supports bone health', 'Boosts immune system', 'Easy to swallow capsules']
    }
  ];

  const regularProducts = [
    {
      id: '5',
      name: 'Ibuprofen 400mg Tablets',
      brand: 'Advil',
      category: 'Pain Relief',
      prescription: false,
      rating: 4.5,
      reviews: 32,
      inStock: true,
      image: 'https://www.simplymedsonline.co.uk/storage/products/3677/images/ibuprofen-400mg-tablets-x-48-1000070875.webp',
      description: 'Anti-inflammatory pain reliever'
    },
    {
      id: '6',
      name: 'Omeprazole 20mg Capsules',
      brand: 'Prilosec',
      category: 'Digestive Health',
      prescription: true,
      rating: 4.4,
      reviews: 28,
      inStock: true,
      image: 'https://img500.exportersindia.com/product_images/bc-500/2023/8/11685037/omeprazole-20-mg-capsule-1693462350-7058124.jpeg',
      description: 'Proton pump inhibitor for acid reflux'
    },
    {
      id: '7',
      name: 'Metformin 500mg Tablets',
      brand: 'Glucophage',
      category: 'Diabetes Care',
      prescription: true,
      rating: 4.7,
      reviews: 22,
      inStock: true,
      image: 'https://www.shutterstock.com/shutterstock/photos/1754907857/display_1500/stock-photo-southminster-essex-a-box-of-metformin-mg-tablets-showing-blister-pack-with-single-1754907857.jpg',
      description: 'Diabetes medication for blood sugar control'
    },
    {
      id: '8',
      name: 'Facial Moisturizer SPF 30',
      brand: 'SkinCare Plus',
      category: 'Skincare',
      prescription: false,
      rating: 4.3,
      reviews: 15,
      inStock: true,
      image: 'https://m.media-amazon.com/images/I/61-CJCqYuXL._SL400_.jpg',
      description: 'Daily moisturizing cream with sun protection'
    }
  ];

  const allProducts = [...featuredProducts, ...regularProducts];

  const ProductCard: React.FC<{ product: any, featured?: boolean }> = ({
    product,
    featured = false
  }) => {
    const [open, setOpen] = React.useState(false);

    return (
      <Card className="group card-elevated card-entrance transition-all duration-300 h-full flex flex-col">
        <div className={`relative product-image-wrap ${featured ? 'shimmer-highlight' : ''}`}>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`View full image of ${product.name}`}
            className="w-full block p-0 border-0 bg-transparent cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className={`w-full ${featured ? 'h-56 md:h-48' : 'h-48 md:h-40'} object-contain md:object-cover`}
            />
          </button>
          <div className="product-image-overlay" />
          <div className="absolute top-2 right-2 flex flex-col space-y-1">
            {product.prescription && (
              <Badge variant="destructive" className="text-xs">
                Rx Required
              </Badge>
            )}
            {!product.inStock && (
              <Badge variant="secondary" className="text-xs">
                Out of Stock
              </Badge>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <div className="absolute bottom-2 right-2 bg-white/80 rounded-full p-1 shadow-sm">
            <Search className="h-4 w-4 text-gray-700" />
          </div>
          {featured && (
            <div className="absolute left-2 top-2">
              <div className="premium-badge text-xs px-2 py-0.5 rounded">Top Pick</div>
            </div>
          )}

          {/* Image modal for full view */}
          <ImageModal src={product.image} alt={product.name} open={open} onClose={() => setOpen(false)} />
        </div>
        <CardHeader className={featured ? 'pb-2' : 'pb-0'}>
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="text-xs">
              {product.category}
            </Badge>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{product.rating}</span>
              <span className="text-sm text-gray-400">({product.reviews})</span>
            </div>
          </div>
          <CardTitle className={`${featured ? 'text-lg' : 'text-base'} line-clamp-2`}>
            {product.name}
          </CardTitle>
          <p className="text-sm text-gray-600 line-clamp-1">
            {product.description}
          </p>
        </CardHeader>

        <CardContent className={`${featured ? 'pt-2' : 'pt-0'} mt-auto`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-lg font-bold text-medione-blue">Inquire for Price</span>
            </div>
            {!product.inStock && (
              <Badge variant="secondary">Out of Stock</Badge>
            )}
          </div>

          {featured && product.benefits && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-1">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="card-actions-stack">
            <Button
              className="w-full sm:flex-1"
              size={featured ? 'default' : 'sm'}
              disabled={!product.inStock}
              asChild
            >
              <a href="https://wa.me/254728079401" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Inquire Now
              </a>
            </Button>
            <Button
              variant="outline"
              size={featured ? 'default' : 'sm'}
              className="w-full sm:w-auto"
              asChild
            >
              <a href="tel:+254728079401">
                <Phone className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };
  return (
    <>
      <SEOComponent data={seoData} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-medione-green to-medione-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pharmacy Shop
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Quality medications, health products, and wellness items with
              professional pharmaceutical guidance
            </p>
            <div className="flex justify-center">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search medicines, products..."
                  className="pl-10 pr-4 py-3 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
              </div>
            </div>
          </div>
          <div className="shop-hero-overlay" />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-medione-blue" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Licensed Pharmacy</h3>
              <p className="text-sm text-gray-600">PPB Kenya Regulated</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="h-6 w-6 text-medione-green" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Quality Products</h3>
              <p className="text-sm text-gray-600">Authenticated Medicines</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShoppingBag className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Expert Guidance</h3>
              <p className="text-sm text-gray-600">Professional Consultation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Quick Support</h3>
              <p className="text-sm text-gray-600">WhatsApp & Phone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Popular medications and health products recommended by our pharmacists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600">
              Browse our comprehensive selection of health products
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="tabs-scroll no-scrollbar mb-8">
              {productCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="tab-trigger text-sm inline-flex items-center whitespace-nowrap px-3 py-2 rounded-md">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {allProducts
                    .filter(product =>
                      category.id === 'all' ||
                      product.category.toLowerCase().includes(category.label.toLowerCase().split(' ')[0])
                    )
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Prescription Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prescription Services
              </h2>
              <p className="text-gray-600 mb-6">
                Need prescription medications? Our licensed pharmacists can help you with
                prescription verification, medication counseling, and insurance processing.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Prescription Verification</h3>
                    <p className="text-gray-600">Fast verification and processing of your prescriptions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Medication Counseling</h3>
                    <p className="text-gray-600">Expert guidance on proper medication usage and side effects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Insurance Processing</h3>
                    <p className="text-gray-600">We work with most insurance providers to reduce costs</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button asChild>
                  <Link to="/consultations">
                    Consult a Pharmacist
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+254728079401">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/images/medication-services.png"
                alt="Prescription services at Medione Pharmacy"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Orders */}
      <section className="py-20 bg-gradient-to-r from-medione-green to-medione-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help Finding a Product?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our pharmacists are here to help you find the right medication or health product.
            Contact us for personalized recommendations and product availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
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
          <div className="mt-8 text-blue-200">
            <p className="text-sm">
              Available until late, 7 days a week. We can also arrange delivery for prescription medications.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
