import React, { useState } from 'react';
import { Globe, Binary, PenTool, Users, ShoppingCart, Code, Rocket, Menu, X } from 'lucide-react';

const PromesaWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Promesa
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-purple-600">About</a>
              <a href="#services" className="text-gray-600 hover:text-purple-600">Services</a>
              <a href="#case-studies" className="text-gray-600 hover:text-purple-600">Case Studies</a>
              <a href="#blog" className="text-gray-600 hover:text-purple-600">Blog</a>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-3">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-600 hover:text-purple-600">About</a>
                <a href="#services" className="text-gray-600 hover:text-purple-600">Services</a>
                <a href="#case-studies" className="text-gray-600 hover:text-purple-600">Case Studies</a>
                <a href="#blog" className="text-gray-600 hover:text-purple-600">Blog</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <svg viewBox="0 0 800 800" className="w-full h-full">
            <defs>
              <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="100%" stopColor="#fff" />
              </linearGradient>
            </defs>
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#grid-gradient)" strokeWidth="1"/>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Unlocking the Future of Marketing
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
              with AI, Web 3, and Storytelling
            </p>
            <p className="text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0">
              We specialize in cutting-edge marketing strategies across the USA, Middle East, Asia, and Latin America, 
              with expertise in cannabis, fungi, spirits, and alternative products.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition mb-4 sm:mb-0">
                Get Started Today
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6">
                Promesa is a trailblazer in marketing consulting, merging traditional and digital strategies 
                to create impactful campaigns. With a global footprint, we bring unique insights from our 
                work in the USA, Middle East, Asia, and Latin America.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower businesses with innovative marketing solutions that foster growth, 
                    engagement, and brand loyalty.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the leading marketing consultancy that transforms businesses through 
                    advanced technologies and culturally resonant messaging.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Globe className="text-purple-600 mb-4" size={32} />
                <h3 className="font-semibold mb-2">Global Reach</h3>
                <p className="text-sm text-gray-600">Operating across USA, Middle East, Asia, and Latin America</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Binary className="text-purple-600 mb-4" size={32} />
                <h3 className="font-semibold mb-2">Tech-Forward</h3>
                <p className="text-sm text-gray-600">AI and Web3 integration experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div id="services" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Binary className="text-purple-600" size={24} />,
                title: 'AI-Driven Marketing',
                description: 'Harness the power of artificial intelligence to analyze data, predict trends, and personalize customer experiences.'
              },
              {
                icon: <Code className="text-purple-600" size={24} />,
                title: 'Web 3 Solutions',
                description: 'Embrace the future with decentralized applications and blockchain-based marketing strategies.'
              },
              {
                icon: <PenTool className="text-purple-600" size={24} />,
                title: 'Content & Storytelling',
                description: 'Craft compelling narratives that resonate with your audience and drive engagement.'
              },
              {
                icon: <Users className="text-purple-600" size={24} />,
                title: 'Cross-Cultural Marketing',
                description: 'Navigate diverse markets with tailored messaging across multiple regions and cultures.'
              },
              {
                icon: <ShoppingCart className="text-purple-600" size={24} />,
                title: 'E-commerce Solutions',
                description: 'Optimize your online presence with seamless shopping experiences and increased conversions.'
              },
              {
                icon: <Rocket className="text-purple-600" size={24} />,
                title: 'Alternative Products Marketing',
                description: 'Expert marketing for cannabis, fungi, spirits, and alternatives, ensuring regulatory compliance.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col h-full">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div id="case-studies" className="py-16 sm:py-20 bg-gradient-to-br from-slate-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Case Studies</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Global Reach, Local Impact',
                description: 'How we helped a US-based e-commerce brand expand into the Middle East, Asia, and Latin America.'
              },
              {
                title: 'Innovative Alternative Products',
                description: 'Our expertise in marketing cannabis, fungi, and spirits drove significant growth for our clients.'
              },
              {
                title: 'AI-Powered Personalization',
                description: 'Learn about our AI-driven strategies that increased customer engagement and conversion rates.'
              }
            ].map((study, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div id="blog" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Insights and Innovations</h2>
            <p className="text-gray-600">
              Stay updated with the latest trends in AI, Web 3, and digital marketing. 
              Our blog features expert analyses and thought leadership.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
              Visit Our Blog
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">Promesa</h3>
              <p className="text-gray-400">
                Transforming marketing through technology and storytelling.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI Marketing</li>
                <li>Web 3 Solutions</li>
                <li>Content Creation</li>
                <li>Alternative Products</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Regions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>USA</li>
                <li>Middle East</li>
                <li>Asia</li>
                <li>Latin America</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <button className="bg-white text-slate-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition">
                Get in Touch
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Promesa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PromesaWebsite;
