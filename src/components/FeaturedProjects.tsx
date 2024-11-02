import React from 'react';

const featuredProjects = [
  {
    id: 1,
    title: 'Modern Blog Layout',
    category: 'Blogs',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643'
  },
  {
    id: 2,
    title: 'Crypto Dashboard',
    category: 'Blockchain',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0'
  },
  {
    id: 3,
    title: 'E-commerce Product Page',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc'
  },
  {
    id: 4,
    title: 'Real Estate Listing',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa'
  }
];

export default function FeaturedProjects() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{project.category}</p>
                <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}