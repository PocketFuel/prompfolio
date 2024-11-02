import React from 'react';
import { Search } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Blog Layout',
    category: 'Blogs',
    description: 'A clean and modern blog layout with dark mode support',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643'
  },
  {
    id: 2,
    title: 'Crypto Dashboard',
    category: 'Blockchain',
    description: 'Real-time cryptocurrency tracking dashboard',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0'
  },
  {
    id: 3,
    title: 'E-commerce Product Page',
    category: 'E-commerce',
    description: 'Dynamic product page with cart functionality',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc'
  },
  {
    id: 4,
    title: 'Real Estate Listing',
    category: 'Real Estate',
    description: 'Property listing page with advanced filters',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa'
  }
];

export default function ProjectsPage() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">All Projects</h1>
            <p className="mt-2 text-gray-600">Browse our collection of web design prompts</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full">
                  {project.category}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}