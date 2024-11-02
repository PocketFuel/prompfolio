import React from 'react';
import { Globe, Shield, ShoppingBag, Home, Plane, Code, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const categories = [
  { 
    name: 'Blogs',
    icon: <Globe className="w-4 h-4" />,
    blocks: [
      {
        title: 'Personal Blog',
        description: 'Modern minimalist blog with dark mode support',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
        stats: '2.5k+ Generated'
      },
      {
        title: 'Tech Blog',
        description: 'Developer-focused blog with code highlighting',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
        stats: '1.8k+ Generated'
      }
    ]
  },
  { 
    name: 'Blockchain',
    icon: <Shield className="w-4 h-4" />,
    blocks: [
      {
        title: 'NFT Marketplace',
        description: 'Digital art marketplace with wallet integration',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0',
        stats: '3.2k+ Generated'
      },
      {
        title: 'DeFi Dashboard',
        description: 'Real-time cryptocurrency tracking and trading',
        image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040',
        stats: '1.5k+ Generated'
      }
    ]
  },
  { 
    name: 'E-commerce',
    icon: <ShoppingBag className="w-4 h-4" />,
    blocks: [
      {
        title: 'Fashion Store',
        description: 'Elegant fashion e-commerce with AR try-on',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
        stats: '4.1k+ Generated'
      },
      {
        title: 'Digital Products',
        description: 'Marketplace for digital downloads and subscriptions',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
        stats: '2.7k+ Generated'
      }
    ]
  },
  { 
    name: 'Real Estate',
    icon: <Home className="w-4 h-4" />,
    blocks: [
      {
        title: 'Property Listings',
        description: 'Modern real estate platform with virtual tours',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
        stats: '3.8k+ Generated'
      },
      {
        title: 'Rental Platform',
        description: 'Vacation rental marketplace with booking system',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        stats: '2.3k+ Generated'
      }
    ]
  },
  { 
    name: 'Travel',
    icon: <Plane className="w-4 h-4" />,
    blocks: [
      {
        title: 'Travel Blog',
        description: 'Adventure travel blog with interactive maps',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
        stats: '3.4k+ Generated'
      },
      {
        title: 'Tour Booking',
        description: 'Travel experience marketplace with local guides',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
        stats: '1.9k+ Generated'
      }
    ]
  },
  { 
    name: 'Dev Docs',
    icon: <Code className="w-4 h-4" />,
    blocks: [
      {
        title: 'API Documentation',
        description: 'Interactive API documentation with code examples',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        stats: '2.9k+ Generated'
      },
      {
        title: 'Developer Portal',
        description: 'Developer resources and documentation hub',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        stats: '2.1k+ Generated'
      }
    ]
  },
];

export default function TabSection() {
  const [activeTab, setActiveTab] = React.useState('Blogs');
  const { isDark, toggleTheme } = useTheme();
  const activeCategory = categories.find(cat => cat.name === activeTab);

  return (
    <div className="w-full py-12 md:py-24 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Explore Categories
          </h2>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveTab(category.name)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === category.name
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeCategory?.blocks.map((block, index) => (
            <div
              key={index}
              className="relative group h-64 overflow-hidden rounded-xl"
            >
              <img
                src={block.image}
                alt={block.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                <div className="text-center p-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{block.title}</h3>
                  <p className="text-gray-200 mb-4">{block.description}</p>
                  <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                    {block.stats}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}